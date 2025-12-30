function getProductTags(itemId) {
  var tags = null;
  var numericId = parseInt(itemId, 10);
  //Check if on PDP
  //If PDP, grab EAN and compare to ensure correct product.
  if (
    StoreFront &&
    StoreFront.product &&
    StoreFront.product.raw &&
    StoreFront.product.raw.productCode
  ) {
    if (StoreFront.product.raw.productCode == numericId) {
      return StoreFront.product.raw.productCodeClassNames?.join(", ") || "";
    }
  } else {
    //Not PDP, so loop through dom to find the data
    var domCheck = document.querySelectorAll("[data-barcode]");
    domCheck?.forEach(function (element) {
      if (parseInt(element.getAttribute("data-barcode"), 10) == numericId) {
        var tagData = element.getAttribute("data-tags");
        if (tagData) {
          tags = tagData.replace("template--", "");
        }
      }
    });
    //If not a merchandised page, then must be search
    domCheck = document.querySelectorAll("[data-product-code]");
    domCheck?.forEach(function (element) {
      if (
        parseInt(element.getAttribute("data-product-code"), 10) == numericId
      ) {
        var parentEl = element.closest(".search-item");
        if (parentEl) {
          var tagData = parentEl.className;
          tags = tagData
            .replace(" search-item--discounted", "")
            .replace(" search-item--limitedStock", "")
            .replace(" search-item--preOrder", "")
            .replace(" search-item--inStock", "")
            .replace(" search-item--outOfStock", "")
            .replaceAll("search-item--", "")
            .replace("search-item", "")
            .trim()
            .replace(" ", ", ");
        }
      }
    });
  }
  return tags;
}

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

const waitForOptanon = (cb, retries = 5) => {
  const check = () => {
    if (typeof OnetrustActiveGroups !== "undefined") {
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

function cookieExists(name) {
  const cookies = document.cookie.split(";").map((c) => c.trim().split("=")[0]);
  return cookies.includes(name);
}

function getCookieValue(name) {
  const match = document.cookie.match(
    new RegExp(
      "(?:^|; )" + name.replace(/[-.*+?^${}()|[\]\\/]/g, "\\$&") + "=([^;]*)"
    )
  );
  return match ? decodeURIComponent(match[1]) : null;
}

// Checkout Steps
const pushCheckoutEvent = (eventType, options = {}) => {
  const {
    currency = "GBP",
    value = 0,
    coupon = "",
    items = [],
    shipping_tier,
    fulfilment_type,
    payment_type,
  } = options;

  const ecommerceData = { currency, value, coupon, items };

  if (eventType === "add_shipping_info") {
    ecommerceData.shipping_tier = shipping_tier || "";
    ecommerceData.fulfilment_type = fulfilment_type || "";
    sessionStorage.setItem("StoreFrontBasketShippingType", shipping_tier);
    sessionStorage.setItem("StoreFrontBasketFulfilmentType", fulfilment_type);
  } else if (eventType === "add_payment_info") {
    ecommerceData.payment_type = payment_type || "";
    sessionStorage.setItem("StoreFrontBasketPaymentType", payment_type);
  }

  window.dataLayer.push({
    event: eventType,
    ecommerce: ecommerceData,
  });
};

function getTotalPrice() {
  const totalPriceEl = document.querySelector(".totalPrice");
  if (totalPriceEl) {
    return (
      parseFloat(
        totalPriceEl.dataset.totalprice ||
          totalPriceEl.textContent.replace(/[^\d.]/g, "")
      ) || 0
    );
  }
  return 0;
}

function getFirstGenealogyLine(item, facetDetailsById, options = {}) {
  const format = (options && options.format) || "joined";

  if (!item || !Array.isArray(item.genealogy) || item.genealogy.length === 0) {
    return format === "split" ? {} : "";
  }

  const firstTree = item.genealogy[0];
  if (!firstTree) return format === "split" ? {} : "";

  let map =
    facetDetailsById && typeof facetDetailsById === "object"
      ? { ...facetDetailsById }
      : {};

  const getIdFromNode = (node) => {
    if (!node) return null;
    if (typeof node.value === "object" && node.value !== null) {
      return node.value.facetDetailId || node.value.value || null;
    }
    if (
      typeof node.value === "number" ||
      (typeof node.value === "string" && node.value.match(/^\d+$/))
    ) {
      return Number(node.value);
    }
    return null;
  };

  const firstId = getIdFromNode(firstTree);

  if (firstId != null && !map[firstId]) {
    try {
      const el = document.getElementById(
        "productGenealogyTreeFacetDetailsJson"
      );
      if (el && el.textContent) {
        const parsed = JSON.parse(el.textContent);
        Object.keys(parsed).forEach((k) => (map[k] = parsed[k]));
      }
    } catch (e) {}
  }

  if (
    (firstId == null || !map[firstId]) &&
    typeof StoreFront !== "undefined" &&
    StoreFront.product?.breadcrumbs
  ) {
    try {
      const crumbs = StoreFront.product.breadcrumbs || [];
      crumbs.forEach((crumb) => {
        map[String(crumb.facetId)] = {
          facetDetailId: crumb.facetId,
          facetId: crumb.facetId,
          description: crumb.description,
          valueText: crumb.facetQuery,
          isVisible: true,
        };
      });
    } catch (e) {}
  }

  const ids = [];
  (function walk(node) {
    if (!node) return;
    const id = getIdFromNode(node);
    if (id != null) ids.push(id);
    if (Array.isArray(node.children) && node.children.length > 0) {
      walk(node.children[0]);
    }
  })(firstTree);

  const path = ids
    .map((id) => {
      if (map[id]) return map[id].description;
      if (map[String(id)]) return map[String(id)].description;
      const found = Object.values(map).find(
        (v) => v && (v.facetDetailId === id || v.facetId === id)
      );
      return found ? found.description : "";
    })
    .filter(Boolean);

  if (
    typeof StoreFront !== "undefined" &&
    Array.isArray(StoreFront.product?.breadcrumbs) &&
    StoreFront.product.breadcrumbs.length > 0
  ) {
    const rootDesc = StoreFront.product.breadcrumbs[0]?.description;
    if (rootDesc && !path.includes(rootDesc)) {
      path.unshift(rootDesc);
    }
  }

  if (format === "split") {
    const out = {};
    path.forEach((desc, i) => {
      const key = i === 0 ? "item_category2" : `item_category${i + 2}`;
      out[key] = desc;
    });
    return out;
  } else {
    return path.join(" / ");
  }
}

function sendViewPromotionEvent(element, index = 0) {
  if (!element) return;

  function sanitizeValue(str, fallback = "") {
    if (typeof str !== "string") return fallback;

    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;")
      .replace(/\//g, "&#x2F;");
  }

  const promoDataRaw = element.getAttribute("data-promodata");
  if (!promoDataRaw) return;
 //const promoDataRawNew = promoDataRaw.replace('&quot;lid&quot;:&quot;&quot;', '&quot;lid&quot;:&quot;slot_' + (index + 1) + '&quot;');
  const promoDataRawNew = promoDataRaw.replace('"lid":""', '"lid":"slot_' + (index + 1) + '"');
  element.setAttribute("data-promodata", promoDataRawNew);

  try {
    const promoData = JSON.parse(promoDataRawNew);

    const ecommerceData = {
      promotion_id: sanitizeValue(promoData.pid),
      promotion_name: sanitizeValue(promoData.promotion_name),
      creative_name: sanitizeValue(promoData.cname),
      creative_slot: sanitizeValue(promoData.cslot),
      location_id: sanitizeValue(promoData.lid),
    };

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "view_promotion",
      ecommerce: ecommerceData,
    });
  } catch (e) {
    console.warn("Invalid JSON in data-promodata:", e);
  }
}

const uniqueId = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};

function safeJSONParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch {
    console.warn("Invalid JSON:", jsonString);
    return null;
  }
}

const toNumber = (value) => {
  if (!value) return 0;
  return parseFloat(value.replace(/[^0-9.]/g, "")) || 0;
};
