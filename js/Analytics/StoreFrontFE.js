(() => {
  // ==============================
  // Util
  // ==============================
  const productTypes = StoreFront.productTypes || {
    1: "Book",
    2: "DVD",
    3: "Blu-ray",
    4: "CD",
    5: "eBook",
    6: "Merchandise",
    7: "Vinyl",
    8: "eAudiobook",
    9: "Customisable Book",
  };

  function getBlockTitle(productEl) {
    let container =
      productEl.closest(".template-container") || productEl.closest("section");

    while (container) {
      const titleEl = container.querySelector(".title-block__sub h2");
      if (titleEl) return titleEl.innerText.trim();

      let prev = container.previousElementSibling;
      while (prev && !prev.classList.contains("template-container")) {
        prev = prev.previousElementSibling;
      }

      container = prev;
    }
    return "(Unknown Template)";
  }

  function genealogyParser(productEl) {
    const genealogyEl = document.querySelector(
      `.genealogyTreeJson[data-ean="${productEl.dataset.ean}"]`
    );
    if (!genealogyEl) return null;

    let genealogyData;
    try {
      genealogyData = JSON.parse(genealogyEl.textContent.trim());
    } catch (err) {
      console.error(
        "Invalid genealogy JSON for EAN:",
        productEl.dataset.ean,
        err
      );
      return null;
    }

    const facetData = StoreFrontFE.products.genealogy || {};

    function mapTree(node) {
      const facet = facetData[node.value] || {};
      return {
        id: node.value,
        label: facet.description || "(Unknown)",
        valueText: facet.valueText || null,
        children: (node.children || []).map(mapTree),
      };
    }

    const readableTree = genealogyData.map(mapTree);

    function flattenTree(node, path = []) {
      const newPath = [...path, node.label];
      if (!node.children || node.children.length === 0) return [newPath];
      return node.children.flatMap((child) => flattenTree(child, newPath));
    }

    let categoryPaths = readableTree.flatMap((node) => flattenTree(node));

    const typeLabel =
      productTypes[productEl.dataset.productType] ||
      productEl.dataset.group ||
      null;

    if (typeLabel) {
      categoryPaths = categoryPaths.map((path) => [typeLabel, ...path]);
    }

    return { tree: readableTree, categoryPaths };
  }

  function parseTemplateTags(raw) {
    if (!raw) return [];

    return raw
      .split(/\s+/)
      .filter(Boolean)
      .map((tag) => tag.replace(/^template--/, ""));
  }

  function joinTags(tags) {
    if (!Array.isArray(tags) || tags.length === 0) return "";
    return tags.join(", ");
  }

  const baseCarouselConfig = {
    gap: 24,
    type: "carousel",
    bound: true,
  };

  // ==============================
  // StoreFrontFE Global Init
  // ==============================
  // TODO: No Cookie = Data Grab Loop // Loop 2 to use c0003
  window.StoreFrontFE = {
    ...(window.StoreFrontFE || {}),
    basket: {
      list: null,
      removed: null,
      ...(window.StoreFrontFE?.basket || {}),
    },
    callToActions: {
      all: null,
      background: null,
      circle: null,
      ...(window.StoreFrontFE?.callToActions || {}),
    },
    checkout: {
      genealogy: null,
      // TODO: Delivery Details, Payment Details, Gift, Collection Address,
      selectedPreferences: null,
      ...(window.StoreFrontFE?.checkout || {}),
    },
    configurationOptions: {
      enableFB: true,
      enableGa4: true,
      enableMeta: true,
      carouselProductConfig: {
        ...baseCarouselConfig,
        perView: 5,
        breakpoints: {
          1200: { perView: 4 },
          992: { perView: 3 },
          768: { perView: 2 },
        },
      },
      carouselHeroConfig: {
        ...baseCarouselConfig,
        perView: 1,
      },
      ...(window.StoreFrontFE?.configurationOptions || {}),
    },
    products: {
      all: null,
      carousels: null,
      genealogy: null,
      pdp: null,
      templates: null,
      ...(window.StoreFrontFE?.products || {}),
    },
    promotions: {
      all: null,
      carousel: null,
      static: null,
      ...(window.StoreFrontFE?.promotions || {}),
    },
    search: {
      list: null,
      ...(window.StoreFrontFE?.search || {}),
    },
    thankyou: {
      basket: null,
      ...(window.StoreFrontFE?.thankyou || {}),
    },
  };

  // ==============================
  // Basket
  // ==============================
  function initBasketList() {
    const basket = window?.StoreFront?.basket;
    if (!basket || !basket.items || !basket.items.length) {
      console.warn("No basket data found");
      return;
    }

    StoreFrontFE.basket = {
      ...(StoreFrontFE.basket || {}),
      list: StoreFrontFE.basket?.list || {},
      removed: StoreFrontFE.basket?.removed || {},
    };

    const facetData = StoreFront?.basket?.facetDetailsById || {};

    function mapGenealogyNode(node) {
      const facet = facetData[node.value] || {};
      const treeNode = {
        id: node.value,
        label: facet.description || "(Unknown)",
        valueText: facet.valueText || null,
        children: (node.children || []).map(
          (child) => mapGenealogyNode(child).treeNode
        ),
      };

      const flattenTree = (node, path = []) => {
        const newPath = [...path, node.label];
        if (!node.children || node.children.length === 0) return [newPath];
        return node.children.flatMap((child) => flattenTree(child, newPath));
      };

      return { treeNode, flattenTree };
    }

    basket.items.forEach((item) => {
      const barcode = item.code;
      const price = item.price;
      const net = item.netPrice;

      const discount = price > net ? Number((price - net).toFixed(2)) : 0;
      const discountPercentage =
        price > net ? Number(((discount / price) * 100).toFixed(2)) : 0;

      let tree = [];
      let categoryPaths = [];

      if (item.genealogy && item.genealogy.length) {
        const mapped = item.genealogy.map(mapGenealogyNode);
        tree = mapped.map((m) => m.treeNode);
        categoryPaths = mapped
          .flatMap((m) => m.flattenTree(m.treeNode))
          .map((path) => [productTypes[item.type] || item.type, ...path]);
      }

      const basketData = {
        barcode,
        brand: item.brand,
        contributor: item.contributor,
        publisher: item.publisher,
        title: item.title,
        type: item.type,
        ecommerce: {
          discount,
          discountPercentage,
          price: item.netPrice,
          quantity: item.quantity,
          rrp: item.price,
          total: Math.round(item.total),
        },
        genealogy: {
          categoryPaths,
          tree,
        },
        raw: item,
      };

      StoreFrontFE.basket.list[barcode] = basketData;
    });
  }
  function initBasketChange() {
    const changes = window?.StoreFront?.events?.basketChange;
    if (!changes || !changes.items || !changes.items.length) return;

    const savedBasket = StoreFrontFE.basket.list || {};
    const removedList = StoreFrontFE.basket.removed || {};

    changes.items.forEach((change) => {
      const code = change.code;
      const before = change.quantity.before;
      const after = change.quantity.after;

      if (before > 0 && after === 0) {
        if (savedBasket[code]) {
          removedList[code] = {
            ...savedBasket[code],
            removedAt: Date.now(),
          };

          delete savedBasket[code];
        }
      }
      if (before === 0 && after > 0) {
      }
    });

    StoreFrontFE.basket.list = savedBasket;
    StoreFrontFE.basket.removed = removedList;
  }
  function loadSavedBasket() {
    try {
      const saved = sessionStorage.getItem("StoreFrontFE_Basket");
      const removed = sessionStorage.getItem("StoreFrontFE_Basket_Removed");

      StoreFrontFE.basket.list = saved ? JSON.parse(saved) : {};
      StoreFrontFE.basket.removed = removed ? JSON.parse(removed) : {};
    } catch (e) {
      StoreFrontFE.basket.list = {};
      StoreFrontFE.basket.removed = {};
    }
  }
  function saveBasketToStorage() {
    sessionStorage.setItem(
      "StoreFrontFE_Basket",
      JSON.stringify(StoreFrontFE.basket.list)
    );

    sessionStorage.setItem(
      "StoreFrontFE_Basket_Removed",
      JSON.stringify(StoreFrontFE.basket.removed)
    );
  }

  // ==============================
  // Call To Action
  // ==============================
  function initCallToActionList() {
    const circleElements = Array.from(
      document.querySelectorAll(".c-img-block, .bg-c-img-block")
    );
    if (!circleElements.length) return;

    const circleList = [];
    const backgroundList = [];

    circleElements.forEach((el) => {
      const linkEl = el.querySelector("a");
      const imgEl = el.querySelector("img");
      const titleEl = el.querySelector(
        ".c-img-block__title a, .bg-c-img-block__title a"
      );

      const ctaInfo = {
        title: titleEl?.textContent?.trim() || imgEl?.alt?.trim() || null,
        link: linkEl?.href || null,
        image: imgEl?.src || null,
        alt: imgEl?.alt || null,
        type: el.classList.contains("bg-c-img-block") ? "background" : "circle",
        element: el,
      };

      if (ctaInfo.type === "background") backgroundList.push(ctaInfo);
      else circleList.push(ctaInfo);
    });

    StoreFrontFE.callToActions.all = [...backgroundList, ...circleList];
    StoreFrontFE.callToActions.background = backgroundList;
    StoreFrontFE.callToActions.circle = circleList;
  }

  // ==============================
  // Checkout
  // ==============================
  // TODO: MiniBasket List
  // TODO: SessionStorage MiniBasket Items
  // TODO: SessionStorage Shipping Info
  // TODO: SessionStorage Payment Info
  function initCheckoutList() {
    const minibasket = window?.StoreFront?.basket;
    if (!minibasket || !minibasket.items || !minibasket.items.length) {
      console.warn("No minibasket data found");
      return;
    }

    StoreFrontFE.checkout = {
      ...(StoreFrontFE.checkout || {}),
      list: null,
      genealogy: {},
      selectedPreferences: {},
    };

    const facetData = StoreFront?.basket?.facetDetailsById || {};

    minibasket.items.forEach((product) => {
      const barcode = product.code;
      const price = product.netPrice;
      const rrp = product.price;

      const discount = price > rrp ? Number((price - rrp).toFixed(2)) : 0;
      const discountPercentage =
        price > rrp ? Number(((discount / price) * 100).toFixed(2)) : 0;

      const productData = {
        barcode,
        ecommerce: {
          price,
          rrp,
          discount,
          discountPercentage,
          quantity: product.quantity,
          total: price * product.quantity,
        },
        genealogy: {},
        info: {
          brand: product.brand,
          ean: product.code || null,
          product_type: product.type || null,
          publisher: product.publisher,
          title: product.title || null,
        },
        element: product,
      };

      StoreFrontFE.checkout.list[barcode] = productData;
    });
  }

  // ==============================
  // Product
  // ==============================
  // TODO: Handle ENTs
  function initProductList() {
    const productElements = Array.from(
      document.querySelectorAll("[data-barcode]")
    ).filter((el) => !el.closest(".glide__slide--clone"));

    if (!productElements.length) return;

    // Load genealogy once
    if (!StoreFrontFE.products.genealogy) {
      const facetEl = document.querySelector(
        "#productGenealogyTreeFacetDetailsJson"
      );
      if (facetEl) {
        try {
          StoreFrontFE.products.genealogy = JSON.parse(
            facetEl.textContent.trim()
          );
        } catch (err) {
          console.error("Invalid facet JSON table:", err);
          StoreFrontFE.products.genealogy = {};
        }
      } else {
        console.warn("No global genealogy facet table found");
        StoreFrontFE.products.genealogy = {};
      }
    }

    StoreFrontFE.products = {
      ...(StoreFrontFE.products || {}),
      genealogy: StoreFrontFE.products?.genealogy || null,
      all: StoreFrontFE.products?.all || {},
      carousels: StoreFrontFE.products?.carousels || {},
      templates: StoreFrontFE.products?.templates || {},
    };

    productElements.forEach((el) => {
      const barcode = el.dataset.barcode;
      const carouselId = el.closest(".glide")?.id || null;
      const templateName = getBlockTitle(el);

      const price = toNumber(el.dataset.price);
      const rrp = toNumber(el.dataset.rrp);

      const discount = price > rrp ? Number((price - rrp).toFixed(2)) : 0;
      const discountPercentage =
        price > rrp ? Number(((discount / price) * 100).toFixed(2)) : 0;

      const rawTags = el.dataset.tags || "";
      const parsedTags = parseTemplateTags(rawTags);

      const productData = {
        barcode,
        carousel: carouselId,
        ecommerce: {
          price,
          rrp,
          discount,
          discountPercentage,
        },
        genealogy: genealogyParser(el),
        info: {
          author: el.dataset.author || null,
          ean: el.dataset.ean || null,
          product_type: el.dataset.group || null,
          tags: joinTags(parsedTags),
          title: el.dataset.title || null,
        },
        template: templateName,
        element: el,
      };

      if (!StoreFrontFE.products.all[barcode]) {
        StoreFrontFE.products.all[barcode] = [];
      }
      StoreFrontFE.products.all[barcode].push(productData);

      if (carouselId) {
        if (!StoreFrontFE.products.carousels[carouselId]) {
          StoreFrontFE.products.carousels[carouselId] = [];
        }
        StoreFrontFE.products.carousels[carouselId].push(productData);
      } else if (templateName) {
        if (!StoreFrontFE.products.templates[templateName]) {
          StoreFrontFE.products.templates[templateName] = [];
        }
        StoreFrontFE.products.templates[templateName].push(productData);
      }
    });
  }
  // TODO: Parse Product Page
  function initProductPage() {
    const data = StoreFront.product.raw || {};
    const genealogy = StoreFront.product.genealogy || {};

    if (!data) return;

    StoreFrontFE.products = {
      ...(StoreFrontFE.products || {}),
      pdp: StoreFrontFE.products?.pdp || {},
    };

    const price = data.netPrice;
    const rrp = data.price;

    const discount = price > rrp ? Number((price - rrp).toFixed(2)) : 0;
    const discountPercentage =
      price > rrp ? Number(((discount / price) * 100).toFixed(2)) : 0;

    const actorNames = new Set((data.actors ?? []).map((actor) => actor.name));
    const authorNames = new Set(
      (data.authors ?? []).map((author) => author.name)
    );
    const artistNames = new Set(
      (data.artists ?? []).map((artist) => artist.name)
    );

    // Book Category = StoreFront.product.genealogy
    // Music Category = productTypeDescription + main Category + subCategory
    // DVD Category = productTypeDescription + videoGenreDescription
    // if (Book) else switch(productTypeDescription) ...

    const productData = {
      barcode: data.productCode,
      ecommerce: {
        availability: data.availability,
        price,
        rrp,
        discount,
        discountPercentage,
      },
      // TODO
      genealogy: {},
      images: {
        image_location: data.imageLocation,
        small: data.prodImages[0].small,
        medium: data.prodImages[0].medium,
        large: data.prodImages[0].large,
      },
      info: {
        actors: actorNames,
        artist: artistNames,
        author: authorNames,
        bindingCode: data.bindingCode,
        certificate: data.certificate,
        contributor: data.contributor || data.contributors,
        director: data.director,
        distributor: data.distributorName,
        ean: data.productCode,
        format: data.format,
        musicContributors: data.musicContributors,
        product_type: data.productTypeDescription,
        region: data.region,
        releaseDate: data.releaseDate,
        series: data.series,
        studio: data.studio,
        tags: data.productCodeClassNames,
        title: data.title,
        trackList: data.musicTrackList,
      },
    };

    StoreFrontFE.products.pdp = productData;
  }

  // ==============================
  // Promotions / Banners
  // ==============================
  // TODO: Create seperate lists per carousel
  function initBannerList() {
    const promoElements = Array.from(
      document.querySelectorAll("[data-promodata]")
    ).filter((el) => !el.closest(".glide__slide--clone"));

    if (!promoElements.length) return;

    const staticBannerList = [];
    const carouselBannerList = [];

    promoElements.forEach((el) => {
      const promoData = safeJSONParse(el.dataset.promodata);
      if (!promoData) return;

      const carouselId = el.closest(".glide")?.id || null;

      const bannerInfo = {
        ...promoData,
        carousel: carouselId,
        element: el,
      };

      if (carouselId) {
        carouselBannerList.push(bannerInfo);
      } else {
        staticBannerList.push(bannerInfo);
      }
    });

    StoreFrontFE.promotions.all = [...carouselBannerList, ...staticBannerList];
    StoreFrontFE.promotions.carousel = carouselBannerList;
    StoreFrontFE.promotions.static = staticBannerList;
  }

  // ==============================
  // Search
  // ==============================
  function initSearchList() {
    const searchItems = Array.from(
      document.querySelectorAll("[data-product-code]")
    );

    if (!searchItems.length) return;

    StoreFrontFE.search = {
      ...(StoreFrontFE.search || {}),
      list: StoreFrontFE.search?.list || {},
    };

    searchItems.forEach((el) => {
      const wrapper = el.closest(".search-item");
      if (!wrapper) return;

      const barcode = el.dataset.productCode;
      const typeLabel = productTypes[el.dataset.productType] || null;

      const titleEl = wrapper.querySelector(".search-item__title a");
      const authorEl = wrapper.querySelector(".search-item__contributor a");
      const priceEl = wrapper.querySelector(".search-item__purchase-price");
      const rrpEl = wrapper.querySelector(".search-item__purchase-rrp");

      const price = priceEl
        ? parseFloat(priceEl.textContent.replace(/[^\d.]/g, ""))
        : 0;
      const rrp = rrpEl
        ? parseFloat(rrpEl.textContent.replace(/[^\d.]/g, ""))
        : 0;

      const discount = price > rrp ? Number((price - rrp).toFixed(2)) : 0;
      const discountPercentage =
        price > rrp ? Number(((discount / price) * 100).toFixed(2)) : 0;

      const productData = {
        barcode,
        ecommerce: {
          price,
          rrp,
          discount,
          discountPercentage,
        },
        info: {
          title: titleEl?.textContent.trim() || null,
          author: authorEl?.textContent.trim() || null,
          ean: barcode || null,
          product_type: typeLabel || null,
        },
        element: wrapper,
      };

      if (!StoreFrontFE.search.list[barcode]) {
        StoreFrontFE.search.list[barcode] = [];
      }
      StoreFrontFE.search.list[barcode].push(productData);
    });
  }

  // ==============================
  // Thankyou
  // ==============================
  // TODO: Thankyou
  function initThankyouList() {}
  // ==============================
  // Init all on DOM ready
  // ==============================
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(initCallToActionList, 50);
    setTimeout(initProductList, 50);
    setTimeout(initBannerList, 100);

    if (window.location.pathname.toLowerCase().includes("/basket")) {
      setTimeout(() => {
        loadSavedBasket();
        initBasketList();
        initBasketChange();
        saveBasketToStorage();
      }, 50);
    }

    if (window.location.pathname.toLowerCase().includes("/checkout")) {
      setTimeout(() => {
        initCheckoutList();
      }, 50);
    }

    if (window.location.pathname.toLowerCase().includes("/product")) {
      setTimeout(initProductPage, 50);
    }

    if (window.location.pathname.toLowerCase().includes("/search")) {
      setTimeout(initSearchList, 50);
    }
  });
})();
