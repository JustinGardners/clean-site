document.addEventListener("DOMContentLoaded", function () {
  (() => {
    // Search Page
    if (window.location.pathname.toLowerCase().includes("/search")) {
      function buildItemData(itemId, index) {
        const sf = window.StoreFrontFE?.search?.list?.[itemId]?.[0];
        if (!sf) return null;

        const price = sf.ecommerce?.price ?? 0;
        const rrp = sf.ecommerce?.rrp ?? price;
        const discount = sf.ecommerce?.discount ?? Math.max(rrp - price, 0);
        const discountPercent =
          sf.ecommerce?.discountPercentage ??
          (rrp > 0 ? ((discount / rrp) * 100).toFixed(0) : 0);

        return {
          item_id: itemId,
          item_name: sf.info?.title || "",
          author: sf.info?.author || "",
          item_brand: sf.info?.author || "",
          item_category: sf.info?.product_type || "",
          index,
          quantity: 1,
          price,
          rrp,
          discount,
          discount_percent: discountPercent,
          on_offer: discount > 0,
          in_stock: true,
        };
      }

      function sendViewItemList(items, listId, listName) {
        const chunkSize = 20;

        for (let i = 0; i < items.length; i += chunkSize) {
          window.dataLayer.push({
            event: "view_item_list",
            ecommerce: {
              currency: "GBP",
              item_list_id: listId,
              item_list_name: listName,
              items: items.slice(i, i + chunkSize),
            },
          });
        }
      }

      function setupClickTracking(domItems, items, listId, listName) {
        domItems.forEach((el, i) => {
          const item = items[i];
          if (!item) return;

          el.addEventListener("click", () => {
            window.dataLayer.push({
              event: "select_item",
              ecommerce: {
                currency: "GBP",
                item_list_id: listId,
                item_list_name: listName,
                items: [item],
              },
            });
          });
        });
      }

      function processSearchPage() {
        const listName = "Search Results";
        const listId = "Search Results";

        const nodes = Array.from(document.querySelectorAll(".search-item"));

        const items = nodes
          .map((node, index) => {
            const btn = node.querySelector(".buyButton");
            if (!btn) return null;

            const itemId = btn.dataset.productCode;
            if (!itemId) return null;

            return buildItemData(itemId, index);
          })
          .filter(Boolean);

        if (!items.length) return;

        sendViewItemList(items, listId, listName);
        setupClickTracking(nodes, items, listId, listName);
      }

      (function initTracking() {
        window.dataLayer = window.dataLayer || [];
        processSearchPage();
      })();
    }

    // Navigation Menu
    const nav = document.querySelector("#navMain");
    if (nav) {
      nav.addEventListener("click", function (e) {
        const target = e.target.closest("a");
        if (!target) return;

        let level1 = "";
        let level2 = "";
        let level3 = "";

        // Level 1
        const liTop = target.closest("ul.primary > li");
        if (liTop) {
          const level1Link = liTop.querySelector(":scope > a");
          level1 = level1Link ? level1Link.textContent.trim() : "";
        }

        // Level 2
        const category = target.closest(".category");
        if (category) {
          const groupLabel = category.querySelector(":scope > h5.group-label");
          if (groupLabel) {
            if (groupLabel.contains(target)) {
              level2 = target.textContent.trim();
            } else {
              level2 = groupLabel.textContent.trim();
              level3 = target.textContent.trim();
            }
          }
        }

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "nav_click",
          navigation_level1: level1,
          navigation_level2: level2,
          navigation_level3: level3,
        });
      });
    }

    // Navigation Top
    const trackingMap = [
      { selector: ".header__logo", category: "homepage logo" },
      { selector: "#keyword", category: "homepage search" },
      { selector: "#dropdownMenuLink", category: "homepage my account" },
      {
        selector: ".header__store-locator__wrap",
        category: "homepage store search",
      },
      { selector: "#miniBasket a", category: "homepage basket" },
    ];

    trackingMap.forEach(({ selector, category }) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) =>
        el.addEventListener("click", () =>
          window.dataLayer.push({
            event: "sitewide_abovenav_interaction",
            element_category: category,
          })
        )
      );
    });

    // Navigation Footer
    const footerNav = document.querySelector(".tp-footer-links");
    if (footerNav) {
      footerNav.addEventListener("click", function (e) {
        const target = e.target.closest("a");
        if (!target) return;

        let level1 = "";
        let level2 = "";

        const accordionTrigger = target.closest(".accordionTrigger");
        if (accordionTrigger) {
          const h4Link = accordionTrigger.querySelector("h4 a");
          const h4Text =
            h4Link?.textContent ||
            accordionTrigger.querySelector("h4")?.textContent;
          level1 = h4Text?.trim() || "";
        }

        if (!target.closest("h4")) {
          level2 = target.textContent.trim();
        }

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "sitewide_footer_interaction",
          navigation_level1: level1,
          navigation_level2: level2,
        });
      });
    }

    // Site Search
    const searchForm = document.querySelector("#SearchForm");
    const searchInput = document.querySelector("#keyword");
    if (searchForm) {
      searchForm.addEventListener("submit", function () {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
          window.dataLayer.push({
            event: "site_search",
            element_category: "search bar",
            search_term: searchTerm,
          });
        }
      });
    }

    // Product List Filtering
    document
      .querySelectorAll("#refineBy .facetDetailList a")
      .forEach((link) => {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();

          const refineItem = link.closest(".refineItem");
          if (!refineItem) return;

          const filterCategory = refineItem
            .querySelector("h5")
            .innerText.trim();

          let selectedValue = this.textContent.trim();
          selectedValue = selectedValue.replace(/\s*\(\d+\)\s*/g, "");

          const txt = document.createElement("textarea");
          txt.innerHTML = selectedValue;
          selectedValue = txt.value;

          window.dataLayer.push({
            event: "plp_interaction",
            element_category: "filter",
            element_action: "select",
            element_label: filterCategory,
            filter_value: selectedValue,
          });

          window.location.href = this.href;
        });
      });

    // Product List Sorting
    const plpSorter = document.getElementById("Sort");
    if (plpSorter) {
      plpSorter.addEventListener("change", function () {
        let selectedValue = this.options[this.selectedIndex].text.trim();
        selectedValue = selectedValue.replace(/\s*\(\d+\)\s*/g, "");

        const txt = document.createElement("textarea");
        txt.innerHTML = selectedValue;
        selectedValue = txt.value;

        window.dataLayer.push({
          event: "plp_interaction",
          element_category: "sort",
          element_action: "select",
          sort_value: selectedValue,
        });
      });
    }

    function initPromoBanners() {
      const staticPromos = document.querySelectorAll(
        ".img-banner[data-promodata]"
      );

      staticPromos.forEach((banner, index) => {
        const promoData = JSON.parse(banner.getAttribute("data-promodata"));
        sendViewPromotionEvent(banner, index);

        banner.addEventListener("click", function () {
          window.dataLayer.push({
            event: "select_promotion",
            ecommerce: {
              promotion_id: promoData.pid || undefined,
              promotion_name: promoData.promotion_name || undefined,
              creative_name: promoData.cname || undefined,
              creative_slot: promoData.cslot || undefined,
              location_id: "slot_" + (index + 1),
              // location_id: promoData.lid || undefined,
            },
          });
        });
      });
    }

    initPromoBanners();

    // Email Subscribes
    const emailSub = document.getElementById("SubscribesForm");
    if (emailSub) {
      emailSub.addEventListener("submit", function () {
        window.dataLayer.push({
          event: "email_subscribe",
        });
      });
    }
  })();

  // View Item List + Select Item -- Non Carousel
  (function waitForTemplates() {
    const ready =
      window.StoreFrontFE?.products?.templates &&
      Object.keys(StoreFrontFE.products.templates).length;

    if (!ready) return setTimeout(waitForTemplates, 50);

    initGA4TemplateTracking();
  })();

  function initGA4TemplateTracking() {
    const templates = StoreFrontFE.products.templates;
    window.dataLayer = window.dataLayer || [];

    function buildGA4Items() {
      const items = [];

      Object.entries(templates).forEach(([templateName, products]) => {
        products.forEach((product, index) => {
          const { info, genealogy, ecommerce } = product;

          const path = genealogy?.categoryPaths?.[0] || [];
          const category1 = path[0] || null;
          const category2 = path[1] || null;
          const category3 = path[2] || null;
          const category4 = path[3] || null;
          const category5 = path[4] || null;

          items.push({
            item_id: info.ean ?? product.barcode,
            item_name: info.title,
            item_brand: info.author || null,
            item_category: category1,
            item_category2: category2,
            item_category3: category3,
            item_category4: category4,
            item_category5: category5,
            item_list_id: templateName,
            item_list_name: templateName,
            template: templateName,
            quantity: 1,
            index: index,

            price: ecommerce?.price ?? null,
            rrp: ecommerce?.rrp ?? null,
            discount: ecommerce?.discount ?? null,
            discount_percent: ecommerce?.discountPercentage ?? null,
            in_stock: ecommerce?.inStock ?? null,
            on_offer: ecommerce?.discount > 0 ? "True" : "False",
            product_card: info.tags,
            author: info.author || null,
            product_type: info.product_type || null,
          });
        });
      });

      return items;
    }

    const ga4Items = buildGA4Items();

    const CHUNK = 20;

    for (let i = 0; i < ga4Items.length; i += CHUNK) {
      dataLayer.push({
        event: "view_item_list",
        ecommerce: {
          currency: "GBP",
          item_list_id: "Templates",
          item_list_name: "All Templates",
          items: ga4Items.slice(i, i + CHUNK),
        },
      });
    }

    addSelectItemTracking(ga4Items);
  }

  function addSelectItemTracking(ga4Items) {
    const cards = document.querySelectorAll("[data-product-id]");

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-product-id");

        const item = ga4Items.find((i) => i.item_id == id);
        if (!item) return;

        dataLayer.push({
          event: "select_item",
          ecommerce: {
            item_list_id: item.item_list_id,
            item_list_name: item.item_list_name,
            items: [item],
          },
        });
      });
    });
  }

  // Homepage Interaction
  (() => {
    if (window.location.pathname !== "/") return;

    function text(el) {
      return el ? el.textContent.trim() : "";
    }

    const selectors = [".c-img-block", ".bg-c-img-block"].join(",");
    document.querySelectorAll(selectors).forEach((block) => {
      const link = block.querySelector("a");
      if (!link) return;

      const nameEl = block.querySelector("p a") || block.querySelector("p");
      const elementName = text(nameEl);

      let elementCategory = "homepage";
      const parentContainer = block.closest(".template-container.tm");
      if (parentContainer) {
        const prev = parentContainer.previousElementSibling;
        const hdr = prev && prev.querySelector(".title-block__sub h2");
        elementCategory = text(hdr);
      }

      const CTA = link.getAttribute("href") || "";

      link.addEventListener("click", function () {
        window.dataLayer.push({
          event: "homepage_interaction",
          element_category: elementCategory,
          element_action: "click",
          element_name: elementName,
          CTA,
        });
      });
    });
  })();

  // Checkout Interaction
  (() => {
    const forgotPwd = document.querySelector(
      'a[href="https://www.tgjonesonline.co.uk/Account/ForgottenPassword"]'
    );
    if (forgotPwd) {
      forgotPwd.addEventListener("click", function () {
        window.dataLayer.push({
          event: "checkout_interaction",
          element_category: "forgot password",
        });
      });
    }

    if (["/Checkout", "/Checkout/"].includes(window.location.pathname)) {
      pushCheckoutEvent("begin_checkout", {
        value: getTotalPrice(),
        coupon: distcountList || [],
        items: basketItems || [],
      });
    }
  })();

  // Remove From Basket (FE)
  (function () {
    function buildItemCategories(categoryPaths) {
      if (!categoryPaths || !categoryPaths.length) return {};

      const firstPath = categoryPaths[0];
      const output = {};

      firstPath.forEach((cat, index) => {
        const key = index === 0 ? "item_category" : `item_category${index + 1}`;
        output[key] = cat;
      });

      return output;
    }

    function fireRemovedEvents() {
      const removed = StoreFrontFE.basket.removed || {};
      if (!Object.keys(removed).length) return;

      Object.keys(removed).forEach((code) => {
        const item = removed[code];
        if (!item) return;

        const raw = item.raw || {};
        const ecommerce = item.ecommerce || {};
        const genealogy = item.genealogy || {};

        const itemCategories = buildItemCategories(genealogy.categoryPaths);

        const discountVal = ecommerce.discount || 0;
        const discountPct = ecommerce.discountPercentage || 0;
        const hasDiscount = discountVal > 0;

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "remove_from_cart",
          ecommerce: {
            currency: "GBP",
            value: parseFloat(
              (ecommerce.price * ecommerce.quantity).toFixed(2)
            ),
            items: [
              {
                item_name: item.title,
                item_id: item.barcode,
                price: ecommerce.price,
                item_brand: item.brand || item.publisher || null,
                quantity: ecommerce.quantity,
                index: 0,
                discount: discountVal,
                discount_percentage: discountPct,
                on_offer: hasDiscount ? "True" : "False",
                rrp: ecommerce.rrp,
                ...itemCategories,
              },
            ],
          },
        });

        console.log("GA4 remove_from_cart fired for:", item.title);

        delete StoreFrontFE.basket.removed[code];
      });

      try {
        sessionStorage.setItem(
          "StoreFrontFE_Basket_Removed",
          JSON.stringify(StoreFrontFE.basket.removed)
        );
      } catch (e) {}
    }

    document.addEventListener("StoreFrontFE_Basket_Changed", fireRemovedEvents);

    setInterval(fireRemovedEvents, 500);
  })();
});
