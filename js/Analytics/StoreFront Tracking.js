// ---------------------------------------------------------
// Storefront Tracking | version: 1.50.0
// ---------------------------------------------------------
(() => {
  function extractAllPaths(trees, facetDetails) {
    const paths = [];

    function dfs(node, accCodes, accDescs) {
      let detail = node.value;

      if (typeof detail !== "object") {
        detail = facetDetails?.[detail];
      }

      if (!detail || !detail.facetId || !detail.facetDetailId) {
        console.warn("[extractAllPaths] Skipping invalid node:", node);
        return;
      }

      const prevCode = accCodes[accCodes.length - 1];
      const depth = accCodes.length;

      let newCodes, newDescs;

      if (depth === 0 && Genealogy.topCategoryMap[detail.facetId]) {
        const top = Genealogy.topCategoryMap[detail.facetId].code;
        const topDesc = Genealogy.topCategoryMap[detail.facetId].description;
        const first = Genealogy._makeCode(detail, null, 0);
        newCodes = [top, first];
        newDescs = [topDesc, detail.description];
      } else {
        const code = Genealogy._makeCode(detail, prevCode, depth);
        newCodes = [...accCodes, code];
        newDescs = [...accDescs, detail.description];
      }

      if (node.children?.length) {
        node.children.forEach((child) => dfs(child, newCodes, newDescs));
      } else {
        paths.push({ codes: newCodes, descs: newDescs });
      }
    }

    trees.forEach((tree) => {
      if (tree && typeof tree === "object") {
        dfs(tree, [], []);
      }
    });

    return paths;
  }

  function normalizeFacetKeys(details = {}) {
    const normalized = {};
    Object.keys(details).forEach((k) => {
      normalized[String(k)] = details[k];
    });
    return normalized;
  }

  function uniquePreserveOrder(arr) {
    const seen = new Set();
    return arr.filter((item) => {
      if (seen.has(item)) return false;
      seen.add(item);
      return true;
    });
  }

  // Util to get URL context
  const getTrackingContext = () => {
    let url;
    let params = new URLSearchParams();

    try {
      url = new URL(window.location.href);
      params = url.searchParams;
    } catch (e) {
      const parser = document.createElement("a");
      parser.href = window.location.href;
      url = {
        protocol: parser.protocol,
        hostname: parser.hostname,
        pathname: parser.pathname,
        href: window.location.href,
      };

      const queryString = window.location.search;
      params = new URLSearchParams(queryString);
    }

    const rawCookie = getCookieValue("_aw_sn_3017");
    const isAffiliate = rawCookie !== null;
    const cookieSegments = isAffiliate ? rawCookie.split("_") : [];

    return {
      domain: `${url.protocol}//${url.hostname}`,
      location: url.href,
      isGuest: document.documentElement.classList.contains("unauthenticated"),
      isAffiliate: isAffiliate ? "affiliate" : "online",
      campaign: params.get("utm_campaign") || null,
      language: navigator.language,
    };
  };

  // Genealogy processing
  const Genealogy = {
    topCategoryMap: {
      12: { code: "01120", description: "Books" },
      20: { code: "01121", description: "DVD" },
      31: { code: "01126", description: "Vinyl" },
      40: { code: "01125", description: "Gifts & Memorabilia" },
    },

    extractDetails(nodes, map = {}) {
      nodes.forEach((node) => {
        if (node.value && node.value.facetDetailId != null) {
          map[node.value.facetDetailId] = node.value;
        }
        if (Array.isArray(node.children)) {
          this.extractDetails(node.children, map);
        }
      });

      return map;
    },

    extractLeaves(tree, facetDetails) {
      const leafs = [];
      const walk = (nodes, prevId, accCodes, accDescs) => {
        nodes.forEach((node) => {
          const detail = facetDetails[node.value] || node.value;
          let newCodes = [],
            newDescs = [];
          if (accCodes.length === 0 && this.topCategoryMap[detail.facetId]) {
            const top = this.topCategoryMap[detail.facetId].code;
            const topDesc = this.topCategoryMap[detail.facetId].description;
            const first = this._makeCode(detail, null, 0);
            newCodes = [top, first];
            newDescs = [topDesc, detail.description];
          } else {
            const code = this._makeCode(detail, prevId, accCodes.length);
            newCodes = [...accCodes, code];
            newDescs = [...accDescs, detail.description];
          }
          if (!node.children || node.children.length === 0) {
            leafs.push({ codes: newCodes, descs: newDescs });
          } else {
            walk(node.children, detail.facetDetailId, newCodes, newDescs);
          }
        });
      };
      walk(tree, null, [], []);
      return leafs;
    },

    generate(genealogy = [], detailsById = {}) {
      if (!Array.isArray(genealogy) || genealogy.length === 0) {
        return {
          codes: { raw: [], stepByStep: [] },
          descriptions: { raw: [], stepByStep: [], progressiveList: [] },
        };
      }

      const codes = [];
      const descriptions = [];
      let node = genealogy[0];
      let depth = 0;
      let prevId = null;

      while (node && depth < 10) {
        const nodeKey =
          typeof node.value === "object" && node.value.facetDetailId != null
            ? node.value.facetDetailId
            : node.value;
        const detail = detailsById[nodeKey] || {
          facetId: 0,
          facetDetailId: 0,
          description: "Unknown Category",
        };

        let code;
        if (typeof node.value === "object" && node.value.code) {
          code = node.value.code;
        } else {
          if (depth === 0 && this.topCategoryMap[detail.facetId]) {
            const top = this.topCategoryMap[detail.facetId];
            codes.push(top.code);
            descriptions.push(top.description);
          }
          code = this._makeCode(detail, prevId, depth);
        }

        codes.push(code);
        descriptions.push(detail.description);

        prevId = detail.facetDetailId;
        node = node.children?.[0];
        depth++;
      }

      return this._format(codes, descriptions);
    },

    _makeCode({ facetId, facetDetailId }, prevId, depth) {
      const fid = String(facetId).padStart(2, "0");
      const cid = String(facetDetailId).padStart(4, "0");
      return depth === 0
        ? `${fid}0000${cid}`
        : `${fid}${String(prevId).padStart(4, "0")}${cid}`;
    },

    _format(codes, descs) {
      return {
        codes: {
          raw: [...codes],
          stepByStep: codes.map((_, i) => codes.slice(0, i + 1).join("-")),
          progressiveList: codes.map((_, i) =>
            codes.slice(0, i + 1).join(" | ")
          ),
        },
        descriptions: {
          raw: [...descs],
          stepByStep: descs.map((_, i) => descs.slice(0, i + 1).join(" > ")),
          progressiveList: descs.map((_, i) =>
            descs.slice(0, i + 1).join(" | ")
          ),
        },
      };
    },
  };

  // Logger
  const isLocal =
    location.protocol === "file:" || location.hostname === "localhost";
  const waitForExponea = (cb, retries = 5) => {
    const check = () => {
      if (
        typeof exponea !== "undefined" &&
        exponea !== null &&
        exponea.isLoaded === true &&
        exponea.isInitialized === true
      ) {
        cb();
      } else if (retries > 0) {
        setTimeout(check, 500);
        retries--;
      } else {
        console.warn("Exponea is not ready or missing after retries");
      }
    };
    check();
  };

  const track = (type, payload) => {
    if (isLocal) {
      console.log({ eventType: type, ...payload });
    } else {
      waitForExponea(() => {
        exponea.track(type, { ...payload });
      });
    }
  };

  // Event handler
  const Handlers = {
    purchase(data) {
      const ctx = getTrackingContext();

      const items = Array.isArray(data.items)
        ? data.items.filter(Boolean).map((item) => {
            const code = item.code || item.productCode;
            let genealogy = Array.isArray(item.genealogy)
              ? item.genealogy
              : null;

            if (!genealogy) {
              const stored = sessionStorage.getItem(
                `StoreFrontBasketItem_${code}`
              );
              if (stored) {
                try {
                  const parsed = JSON.parse(stored);
                  genealogy = parsed.genealogy;
                } catch (e) {
                  console.warn(
                    `[Genealogy] Invalid JSON in sessionStorage for ${code}:`,
                    e
                  );
                }
              }
            }

            return { ...item, code, genealogy };
          })
        : [];

      const total_quantity = items.reduce(
        (sum, i) => sum + Number(i?.quantity || 0),
        0
      );

      const purchasePayload = {
        brEmail: data.purchasedBy?.email || null,
        product_ids: items.map((i) => i.productCode),
        product_list: items.map((i) => ({
          product_id: i.productCode,
          quantity: i.quantity,
        })),
        purchase_id: data.customerOrderReference,
        purchase_source_name: ctx.domain,
        purchase_source_type:
          ctx.isAffiliate === "affiliate" ? "affiliate" : "online",
        purchase_status: "success",
        shipping_cost: data.deliveryTotalPrice,
        timestamp: data.datePurchased,
        total_price_without_tax:
          data.productTotalPriceExVat + data.deliveryTotalPrice,
        total_price: data.totalNetValue,
        total_quantity,
        ...ctx,
      };

      track("purchase", purchasePayload);

      // GA4
      const ga4Items = items.map((item, idx) => {
        const mergedFacetDetails = {
          ...(data.facetDetailsById || {}),
          ...(StoreFront?.basket?.facetDetailsById || {}),
        };

        const allPaths = extractAllPaths(
          item.genealogy || [],
          mergedFacetDetails
        );
        const primaryPath = allPaths[0]?.descs || [];
        const [c1, c2, c3, c4] = primaryPath;

        const hasDiscount = item.price > item.netPrice;
        const discountVal = hasDiscount
          ? +(item.price - item.netPrice).toFixed(2)
          : 0;

        return {
          item_id: item.productCode,
          item_name: item.title,
          affiliation: "TGJones",
          coupon: item.couponCode || data.couponCode || "",
          discount: discountVal,
          index: idx + 1,
          item_brand: item.book?.publisher || item.merchandise?.brand || "",
          item_category: c1 || "",
          item_category2: c2 || "",
          item_category3: c3 || "",
          item_category4: c4 || "",
          price: item.netPrice,
          quantity: item.quantity,
        };
      });

      const txId =
        data && (data.customerOrderReference || data.purchase_id || null);
      if (txId) {
        const dedupeKey = `sf_ga4_purchase_${txId}`;
        try {
          if (sessionStorage.getItem(dedupeKey)) {
            console.warn(
              "Duplicate GA4 purchase blocked for transaction",
              txId
            );
          } else {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "purchase",
              ecommerce: {
                currency: "GBP",
                value: data.totalNetValue,
                tax: data.productTotalPrice - data.productTotalPriceExVat,
                shipping: data.deliveryTotalPrice,
                transaction_id: data.customerOrderReference,
                affiliation: "TGJones",
                coupon: data.couponCode,
                items: ga4Items,
                sf_dedupe_flag: true,
              },
            });

            sessionStorage.setItem(dedupeKey, "1");
          }
        } catch (err) {
          console.warn("Failed GA4 dedupe sessionStorage access", err);

          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "purchase",
            ecommerce: {
              currency: "GBP",
              value: data.totalNetValue,
              tax: data.productTotalPrice - data.productTotalPriceExVat,
              shipping: data.deliveryTotalPrice,
              transaction_id: txId,
              affiliation: "TGJones",
              coupon: data.couponCode,
              items: ga4Items,
              sf_dedupe_flag: true,
            },
          });
        }
      } else {
        console.warn(
          "Handlers.purchase: no transaction id found; pushing GA4 purchase with no dedupe."
        );

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "purchase",
          ecommerce: {
            currency: "GBP",
            value: data.totalNetValue,
            tax: data.productTotalPrice - data.productTotalPriceExVat,
            shipping: data.deliveryTotalPrice,
            transaction_id: null,
            affiliation: "TGJones",
            coupon: data.couponCode,
            items: ga4Items,
            sf_dedupe_flag: true,
          },
        });
      }

      items.forEach((item) => {
        const mergedFacetDetails = {
          ...(data.facetDetailsById || {}),
          ...(StoreFront?.basket?.facetDetailsById || {}),
        };

        Handlers.purchase_item({
          item,
          purchaseData: { ...data, facetDetailsById: mergedFacetDetails },
        });
      });

      Object.keys(sessionStorage).forEach((key) => {
        if (key.startsWith("StoreFrontBasketItem_")) {
          sessionStorage.removeItem(key);
        }
      });
    },

    purchase_item({ item, purchaseData }) {
      const ctx = getTrackingContext();
      const facetDetails = purchaseData.facetDetailsById;

      let genealogy = Array.isArray(item.genealogy) ? item.genealogy : [];
      if (!genealogy.length) {
        const stored = sessionStorage.getItem(
          `StoreFrontBasketItem_${item.code}`
        );
        if (stored) {
          try {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed.genealogy) && parsed.genealogy.length) {
              genealogy = parsed.genealogy;
            }
          } catch (e) {
            console.warn(
              `[Genealogy] malformed sessionStorage for ${item.code}`,
              e
            );
          }
        }
      }

      const fullFacetDetails = {
        ...facetDetails,
        ...Genealogy.extractDetails(genealogy, facetDetails),
      };

      const allPaths = extractAllPaths(genealogy, fullFacetDetails);
      const allCodesStepByStep = allPaths.flatMap(({ codes }) =>
        codes.map((_, i) => codes.slice(0, i + 1).join("-"))
      );
      const allDescsStepByStep = allPaths.flatMap(({ descs }) =>
        descs.map((_, i) => descs.slice(0, i + 1).join(" > "))
      );
      const uniqueCodes = uniquePreserveOrder(allCodesStepByStep);
      const uniqueDescs = uniquePreserveOrder(allDescsStepByStep);

      const categoryFields = {};
      allPaths.forEach((path, pathIdx) => {
        const prefix = pathIdx === 0 ? "category" : `category${pathIdx + 1}`;
        path.descs.slice(0, 6).forEach((desc, levelIdx) => {
          if (desc != null) {
            categoryFields[`${prefix}_level_${levelIdx + 1}`] = desc;
          }
        });
      });

      const totalPrice = parseFloat((item.netPrice * item.quantity).toFixed(2));
      const totalPriceExVat = parseFloat(
        (item.netPriceExVat * item.quantity).toFixed(2)
      );
      const brand = item.merchandise?.brand || item.book?.publisher || null;

      const payload = {
        author: item.contributor || null,
        brand,
        brEmail: purchaseData.purchasedBy?.email || null,
        categories_ids_all: uniqueCodes.join(" | "),
        categories_paths_all: uniqueDescs.join(" | "),
        discount_percentage:
          item.price > item.netPrice
            ? +(((item.price - item.netPrice) / item.price) * 100).toFixed(0)
            : null,
        discount_value:
          item.price > item.netPrice
            ? +(item.price - item.netPrice).toFixed(2)
            : null,
        original_price: item.price,
        price: item.netPrice,
        product_id: item.productCode,
        purchase_id: purchaseData.customerOrderReference,
        purchase_source_name: ctx.domain,
        purchase_source_type:
          ctx.isAffiliate === "affiliate" ? "affiliate" : "online",
        purchase_status: "success",
        quantity: item.quantity,
        timestamp: purchaseData.datePurchased,
        title: item.title,
        total_price_without_tax: totalPriceExVat,
        total_price: totalPrice,
        ...categoryFields,
        ...ctx,
      };

      track("purchase_item", payload);
    },

    cart_update({ basket, events }) {
      const items = Array.isArray(basket?.items) ? basket.items : [];

      const changes = Array.isArray(events?.basketChange?.items)
        ? events.basketChange.items
        : null;
      if (!changes) return;

      changes.forEach((change) => {
        const isRemoved = change.quantity.after === 0;
        let item = items.find((i) => i.code === change.code);

        if (!item && isRemoved) {
          try {
            const stored = sessionStorage.getItem(
              `StoreFrontBasketItem_${change.code}`
            );
            if (stored) {
              item = JSON.parse(stored);
            }
          } catch (err) {
            console.warn(
              `Error reading item from sessionStorage: StoreFrontBasketItem_${change.code}`,
              err
            );
          }
        }

        if (!item) return;

        const action =
          change.quantity.after > change.quantity.before
            ? "add"
            : change.quantity.after < change.quantity.before
            ? "remove"
            : null;
        if (!action) return;

        const ctx = getTrackingContext();
        const facetDetails =
          basket.facetDetailsById ||
          Genealogy.extractDetails(item.genealogy || []);
        const genealogies = item.genealogy || [];
        const fullFacetDetails = {
          ...facetDetails,
          ...Genealogy.extractDetails(genealogies, facetDetails),
        };

        const categoryFields = {};
        genealogies.forEach((tree, idx) => {
          const { descriptions } = Genealogy.generate([tree], fullFacetDetails);
          const prefix = idx === 0 ? "category" : `category${idx + 1}`;
          descriptions.raw.forEach((desc, i) => {
            categoryFields[`${prefix}_level_${i + 1}`] = desc;
          });
        });

        const allPaths = extractAllPaths(genealogies, fullFacetDetails);
        const allCodesStepByStep = allPaths.flatMap(({ codes }) =>
          codes.map((_, i) => codes.slice(0, i + 1).join("-"))
        );
        const allDescsStepByStep = allPaths.flatMap(({ descs }) =>
          descs.map((_, i) => descs.slice(0, i + 1).join(" > "))
        );
        const uniqueCodes = uniquePreserveOrder(allCodesStepByStep);
        const uniqueDescs = uniquePreserveOrder(allDescsStepByStep);

        const hasDiscount = item.price > item.netPrice;
        const discountVal = hasDiscount
          ? +(item.price - item.netPrice).toFixed(2)
          : null;
        const discountPct = hasDiscount
          ? +(((item.price - item.netPrice) / item.price) * 100).toFixed(0)
          : null;
        const product_list = items.map((i) => ({
          product_id: i.code,
          quantity: i.quantity,
        }));
        const product_ids = items.map((i) => i.code);
        const total_price = items
          .reduce((sum, i) => sum + Number(i.price) * Number(i.quantity), 0)
          .toFixed(2);
        const total_price_without_tax = items
          .reduce((sum, i) => sum + Number(i.netPrice) * Number(i.quantity), 0)
          .toFixed(2);
        const total_quantity = items.reduce(
          (sum, i) => sum + Number(i.quantity),
          0
        );
        const fullTitle = item.title;
        let title = item.title;
        let subtitle = null;
        if (fullTitle.includes(" : ")) {
          const parts = fullTitle.split(" : ");
          title = parts[0]?.trim() || item.title;
          subtitle = parts[1]?.trim(0) || null;
        }

        const payload = {
          action,
          categories_ids_all: uniqueCodes.join(" | "),
          category_paths_all: uniqueDescs.join(" | "),
          discount_percentage: discountPct,
          discount_value: discountVal,
          original_price: item.price,
          price: item.netPrice,
          product_id: item.code,
          product_ids,
          product_list,
          subtitle,
          title,
          total_price_without_tax: parseFloat(total_price_without_tax),
          total_price: parseFloat(total_price),
          total_quantity,
          ...categoryFields,
          ...ctx,
        };

        track("cart_update", payload);
      });
    },

    add_to_basket(basketResp) {
      const item = basketResp?.basket?.items?.find(
        (i) => i.code === basketResp.code
      );
      if (!item) return;

      const ctx = getTrackingContext();

      const facetDetails = basketResp.basket.facetDetailsById || {};

      let genealogies = Array.isArray(item.genealogy)
        ? [...item.genealogy]
        : [];
      if (genealogies.length === 0) {
        const fallbackDetail =
          item.dvdGenre || item.merchandiseCateggory || item.musicGenre;
        if (
          fallbackDetail &&
          fallbackDetail.facetDetailId &&
          fallbackDetail.facetId
        ) {
          genealogies = [
            {
              value: fallbackDetail,
              children: [],
            },
          ];
          facetDetails[fallbackDetail.facetDetailId] = fallbackDetail;
        }
      }

      const fullFacetDetails = {
        ...facetDetails,
        ...Genealogy.extractDetails(genealogies, facetDetails),
      };

      const allPaths = extractAllPaths(genealogies, fullFacetDetails);
      const allCodesStepByStep = allPaths.flatMap(({ codes }) =>
        codes.map((_, i) => codes.slice(0, i + 1).join("-"))
      );
      const allDescsStepByStep = allPaths.flatMap(({ descs }) =>
        descs.map((_, i) => descs.slice(0, i + 1).join(" > "))
      );
      const uniqueCodes = uniquePreserveOrder(allCodesStepByStep);
      const uniqueDescs = uniquePreserveOrder(allDescsStepByStep);

      const categoryFields = {};
      allPaths.forEach((path, pathIdx) => {
        const prefix = pathIdx === 0 ? "category" : `category${pathIdx + 1}`;
        path.descs.slice(0, 6).forEach((desc, levelIdx) => {
          if (desc != null) {
            categoryFields[`${prefix}_level_${levelIdx + 1}`] = desc;
          }
        });
      });

      const hasDiscount = item.price > item.netPrice;
      const discountVal = hasDiscount
        ? +(item.price - item.netPrice).toFixed(2)
        : null;
      const discountPct = hasDiscount
        ? +(((item.price - item.netPrice) / item.price) * 100).toFixed(0)
        : null;
      const product_list = basketResp.basket.items.map((i) => ({
        product_id: i.code,
        quantity: i.quantity,
      }));
      const product_ids = basketResp.basket.items.map((i) => i.code);
      const total_price = basketResp.basket.items
        .reduce((sum, i) => sum + i.price * i.quantity, 0)
        .toFixed(2);
      const total_price_without_tax = basketResp.basket.items
        .reduce((sum, i) => sum + i.netPrice * i.quantity, 0)
        .toFixed(2);
      const total_quantity = basketResp.basket.items.reduce(
        (sum, i) => sum + i.quantity,
        0
      );

      const payload = {
        action: "add",
        categories_ids_all: uniqueCodes.join(" | "),
        category_paths_all: uniqueDescs.join(" | "),
        discount_percentage: discountPct,
        discount_value: discountVal,
        original_price: item.price,
        price: item.netPrice,
        product_id: item.code,
        product_ids,
        product_list,
        title: item.title,
        total_price_without_tax: parseFloat(total_price_without_tax),
        total_price: parseFloat(total_price),
        total_quantity,
        ...categoryFields,
        ...ctx,
      };

      track("cart_update", payload);
    },

    view_item(data) {
      const hasBreadcrumbs =
        Array.isArray(data.breadcrumbs) && data.breadcrumbs.length > 0;
      const hasGenealogy =
        Array.isArray(data.genealogy) && data.genealogy.length > 0;

      let categories_ids_primary, category_paths_primary;
      if (hasGenealogy) {
      } else if (hasBreadcrumbs) {
        const primCodes = data.breadcrumbs.map((b) => b.facetQuery);
        const primDescs = data.breadcrumbs.map((b) => b.description);
        categories_ids_primary = primCodes.join(" > ");
        category_paths_primary = primDescs.join(" > ");
      }

      let categories_ids_all, category_paths_all;
      if (hasGenealogy) {
        const allPaths = extractAllPaths(data.genealogy);
        const allCodesStepByStep = allPaths.flatMap(({ codes }) =>
          codes.map((_, i) => codes.slice(0, i + 1).join("-"))
        );
        const allDescsStepByStep = allPaths.flatMap(({ descs }) =>
          descs.map((_, i) => descs.slice(0, i + 1).join(" > "))
        );
        categories_ids_all =
          uniquePreserveOrder(allCodesStepByStep).join(" | ");
        category_paths_all =
          uniquePreserveOrder(allDescsStepByStep).join(" | ");
      } else if (hasBreadcrumbs) {
        const allCodes = data.breadcrumbs.map((b) => b.facetQuery);
        const allDescs = data.breadcrumbs.map((b) => b.description);
        categories_ids_all = allCodes.join(" | ");
        category_paths_all = allDescs.join(" | ");
      } else {
        categories_ids_primary = null;
        category_paths_primary = null;
      }

      const allPaths = extractAllPaths(hasGenealogy ? data.genealogy : []);
      // const contributorsDiv = document.querySelector(".titleAuthorContributor--authorContributor");
      // const contributors = contributorsDiv
      //   ? Array.from(contributorsDiv.querySelectorAll("h2 a span[itemprop='name']"))
      //       .map((span) => span.innerText.trim())
      //       .filter(Boolean)
      //       .join(" | ")
      //   : null;
      const itemData = StoreFront.product.raw;
      var contributorsRaw = null;
      if (typeof itemData.authors !== "undefined") {
        contributorsRaw = itemData.authors;
      } else if (typeof itemData.artists !== "undefined") {
        contributorsRaw = itemData.artists;
      } else if (typeof itemData.actors !== "undefined") {
        contributorsRaw = itemData.actors;
      }

      const contributors = contributorsRaw
        ? contributorsRaw.map((a) => a.name).join(" | ")
        : "";
      const author = contributors;

      const brandDiv = document.querySelector(
        ".productInfo .brand .info, .productInfo .publisher .info"
      );
      const brand = brandDiv?.innerText || null;

      const ctx = getTrackingContext();
      const rrpEl = document.querySelector(".price .rrp");
      const sitePriceEl = document.querySelector(".sitePrice");
      const originalPrice = rrpEl
        ? parseFloat(rrpEl.innerText.replace("£", ""))
        : null;
      const price = sitePriceEl
        ? parseFloat(sitePriceEl.innerText.replace("£", ""))
        : null;
      const discountVal = originalPrice
        ? +(originalPrice - price).toFixed(2)
        : null;
      const discountPct = originalPrice
        ? +((discountVal / originalPrice) * 100).toFixed(0)
        : null;
      const productId = document.querySelector(".EAN .info")?.innerText || null;

      const ogTitleContent =
        document.head.querySelector('[property="og:title"]')?.content || null;
      let title = null;
      let subtitle = null;
      if (ogTitleContent) {
        const parts = ogTitleContent.split(" : ");
        title = parts[0]?.trim() || null;
        subtitle = parts[1]?.trim() || null;
      }

      const payload = {
        author: author,
        brand,
        categories_ids_all,
        categories_ids_primary,
        category_paths_all,
        category_paths_primary,
        contributors,
        discount_percentage: discountPct,
        discount_value: discountVal,
        original_price: originalPrice,
        price,
        product_id: productId,
        subtitle,
        title,
        ...ctx,
      };

      allPaths.forEach((path, pathIdx) => {
        const prefix = pathIdx === 0 ? "category" : `category${pathIdx + 1}`;
        path.descs.slice(0, 6).forEach((desc, levelIdx) => {
          if (desc != null) {
            payload[`${prefix}_level_${levelIdx + 1}`] = desc;
          }
        });
      });

      track("view_item", payload);
    },

    view_category(payload) {
      track("view_category", payload);
    },
  };

  StoreFront.events.track = (type, detail) => {
    if (Handlers[type]) Handlers[type](detail);
  };

  function viewCategoryInit() {
    const detailsEl = document.getElementById(
      "productGenealogyTreeFacetDetailsJson"
    );
    const treeEls = Array.from(document.querySelectorAll(".genealogyTreeJson"));
    if (!detailsEl || treeEls.length === 0) return;

    let facetDetailsById;
    try {
      facetDetailsById = JSON.parse(detailsEl.textContent);
    } catch (e) {
      console.error("Failed to parse facet details:", e);
      return;
    }

    const allLeafIds = [];
    const allLeafPaths = [];
    const rootCounts = {};
    const eanSet = new Set();

    treeEls.forEach((el) => {
      try {
        const genealogy = JSON.parse(el.textContent);
        const leafs = Genealogy.extractLeaves(genealogy, facetDetailsById);

        leafs.forEach(({ codes, descs }) => {
          allLeafIds.push(codes.join("-"));
          allLeafPaths.push(descs.join(" > "));

          if (descs[0]) {
            rootCounts[descs[0]] = (rootCounts[descs[0]] || 0) + 1;
          }
        });

        const ean = el.getAttribute("data-ean");
        if (ean) eanSet.add(ean);
      } catch (e) {
        console.error("Error processing genealogy JSON:", e);
      }
    });

    const dedupedLeafIds = [...new Set(allLeafIds)];
    const dedupedLeafPaths = [...new Set(allLeafPaths)];

    const deepCategoryIds = dedupedLeafIds.slice(0, 5).join(" | ");
    const deepCategoryPaths = dedupedLeafPaths.slice(0, 5).join(" | ");

    const sortedRoots = Object.entries(rootCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([name]) => name);

    const topCategoryIdsArr = [];
    const topCategoryPathsArr = [];

    sortedRoots.forEach((rootName) => {
      const matchingIndex = dedupedLeafPaths.findIndex((p) =>
        p.startsWith(rootName)
      );
      if (matchingIndex !== -1) {
        const fullId = dedupedLeafIds[matchingIndex];
        const segments = fullId.split("-");
        if (segments.length >= 2) {
          topCategoryIdsArr.push(`${segments[0]}-${segments[1]}`);
          topCategoryPathsArr.push(rootName);
        }
      }
    });

    const topCategoryIds = topCategoryIdsArr.join(" | ") || null;
    const topCategoryPaths = topCategoryPathsArr.join(" | ") || null;
    const firstTree = JSON.parse(treeEls[0].textContent);
    const detailMap = Genealogy.extractDetails(firstTree, {
      ...facetDetailsById,
    });
    const { descriptions } = Genealogy.generate(firstTree, detailMap);

    const payload = {
      category_level_1: descriptions.raw[0] || null,
      category_level_2: descriptions.raw[1] || null,
      category_level_3: descriptions.raw[2] || null,
      category_level_4: descriptions.raw[3] || null,
      category_level_5: descriptions.raw[4] || null,
      category_level_6: descriptions.raw[5] || null,
      category_listed_products: [...eanSet].join(","),
      deepCategoryIds,
      deepCategoryPaths,
      topCategoryIds,
      topCategoryPaths,
    };

    Handlers.view_category(payload);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", viewCategoryInit);
  } else {
    viewCategoryInit();
  }
})();
