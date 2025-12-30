function GlideCarousel() {
  // Define check_resize at module scope to be accessible to setUp
  function check_resize(glide, element) {
    if (glide.slides_count <= glide.settings.perView) {
      glide.update({ startAt: 0 }).disable();
      element.classList.add("hideArrows");
    } else {
      glide.enable();
      element.classList.remove("hideArrows");
    }
  }

  function extractProductItem(element, index) {
    const title =
      element
        .querySelector(".product-list__content--title a")
        ?.textContent.trim() ||
      element
        .querySelector(".pb-template__content--title a")
        ?.textContent.trim() ||
      "";
    const author =
      element
        .querySelector(".pb-template__content--author")
        ?.textContent.trim() ||
      element
        .querySelector(".product-list__content--author")
        ?.textContent.trim() ||
      "";
    const priceEl =
      element.querySelector(".product-list__content--current") ||
      element.querySelector(".pb-template__content--current");
    const price = priceEl
      ? parseFloat(priceEl.textContent.replace(/[^\d.]/g, ""))
      : 0;
    const rrpEl =
      element.querySelector(".single-hero-product__content--rrp") ||
      element.querySelector(".pb-template__content--rrp");
    const rrp = rrpEl
      ? parseFloat(rrpEl.textContent.replace(/[^\d.]/g, ""))
      : price;
    const discount = rrp > price ? rrp - price : 0;
    const discountPercent = rrp > 0 ? ((discount / rrp) * 100).toFixed(0) : 0;
    const inStock = !!(
      element.querySelector(".in-stock") ||
      element.querySelector(".pb-template__content--buy-button .in-stock")
    );

    const buyButton =
      element.querySelector(".buyButton") ||
      element.querySelector(".pb-template__content--buy-button .buyButton");
    const itemId = buyButton?.dataset.productCode || "";
    if (!itemId) return null;
    const itemCategory = buyButton?.dataset.productType || "";

    let genealogy = [];
    let categoryFields = {};
    const genealogyScript = element.querySelector(".genealogyTreeJson");
    const detailsEl = document.getElementById(
      "productGenealogyTreeFacetDetailsJson"
    );

    if (genealogyScript && detailsEl) {
      try {
        genealogy = JSON.parse(genealogyScript.textContent);
        const facetDetailsById = JSON.parse(detailsEl.textContent);
        const genealogyItem = { genealogy };
        categoryFields = getFirstGenealogyLine(
          genealogyItem,
          facetDetailsById,
          { format: "split" }
        );
      } catch (err) {
        console.warn("Error parsing genealogy data:", err);
      }
    }

    return {
      author,
      discount_percent: discountPercent,
      discount,
      in_stock: inStock,
      index,
      item_brand: author,
      item_id: itemId,
      item_name: title,
      on_offer: discount > 0,
      price,
      product_card: getProductTags(itemId),
      quantity: 1,
      rrp,
      ...categoryFields,
    };
  }

  // GA4 - View Item List Event
  function viewItemList(glide, element) {
    try {
      const config = StoreFrontFE.configurationOptions.carouselProductConfig;
      let perView = config.perView || 1;

      const width = window.innerWidth;
      if (config.breakpoints) {
        for (const bp of Object.keys(config.breakpoints)) {
          if (width <= parseInt(bp)) {
            perView = config.breakpoints[bp].perView;
            break;
          }
        }
      }

      const slides = Array.from(
        element.querySelectorAll(".glide__slide:not(.glide__slide--clone)")
      );
      const activeIndex = glide.index;

      const visibleSlides = slides.slice(activeIndex, activeIndex + perView);
      if (!visibleSlides.length) return;

      const section = element.closest("section");
      const listName =
        section?.querySelector(".title-block__sub h2")?.textContent.trim() ||
        "Carousel";
      const listId =
        section
          ?.querySelector(".title-block__main--link a")
          ?.getAttribute("href") || "";

      const items = visibleSlides
        .map((el, i) => extractProductItem(el, activeIndex + i))
        .filter(Boolean);

      if (items.length <= 1) return;

      const chunkSize = 20;
      for (let i = 0; i < items.length; i += chunkSize) {
        const chunk = items.slice(i, i + chunkSize);
        window.dataLayer.push({
          event: "view_item_list",
          ecommerce: {
            currency: "GBP",
            item_list_id: listId,
            item_list_name: listName,
            items: chunk,
          },
        });
      }
    } catch (err) {
      console.error("Error in viewItemList:", err);
    }
  }

  function setupSelectPromoTracking() {
    document.addEventListener("click", function (e) {
      const validClick = e.target.closest(".glide__slide[data-promodata]");
      if (!validClick) return;

      const promoBannerData = JSON.parse(
        validClick.getAttribute("data-promodata")
      );

      window.dataLayer.push({
        event: "select_promotion",
        ecommerce: {
          promotion_id: promoBannerData.pid || undefined,
          promotion_name: promoBannerData.promotion_name || undefined,
          creative_name: promoBannerData.cname || undefined,
          creative_slot: promoBannerData.cslot || undefined,
          location_id: promoBannerData.lid || undefined,
        },
      });
    });
  }

  // GA4 - Select Item
  function setupSelectItemTracking() {
    document.addEventListener("click", function (e) {
      const validClick = e.target.closest(
        ".product-item--img a, .product-list__content--title a, .pb-template__content--author"
      );
      if (!validClick) return;

      const productItem = validClick.closest(".product-item");
      if (!productItem) return;

      const carousel = productItem.closest(".glide");
      if (!carousel) return;

      const productData = extractProductItem(
        productItem,
        getItemIndex(productItem)
      );
      if (!productData) return;

      const section = carousel.closest("section");
      const listName =
        section?.querySelector(".title-block__sub h2")?.textContent.trim() ||
        "Carousel";
      const listId =
        section
          ?.querySelector(".title-block__main--link a")
          ?.getAttribute("href") || "";

      window.dataLayer.push({
        event: "select_item",
        ecommerce: {
          item_list_id: listId,
          item_list_name: listName,
          items: [productData],
        },
      });
    });
  }

  function getItemIndex(productItem) {
    const carousel = productItem.closest(".glide");
    if (!carousel) return 0;

    const slides = Array.from(
      carousel.querySelectorAll(".glide__slide:not(.glide__slide--clone")
    );
    return slides.indexOf(productItem);
  }

  // Generate a unique ID for a carousel
  function generateCarouselId(carouselEl) {
    let title = "";
    const titleEl = carouselEl
      .closest("section")
      ?.querySelector(".template-container .title-block__sub h2");

    if (titleEl) {
      title = titleEl.textContent
        .trim()
        // Replace spaces with dashes
        .replace(/\s+/g, "-")
        // Remove all non-alphanumeric and non-dash characters
        .replace(/[^a-zA-Z0-9\-]/g, "")
        .toLowerCase();
    }

    return title ? `carousel-${title}` : `carousel-${uniqueId()}`;
  }

  function setUp(carouselEl) {
    // Check if Glide is available and element has data-glide attribute
    if (!window.Glide) {
      console.warn("Glide.js is missing for", carouselEl);
      return;
    }

    try {
      // Parse the data-glide JSON configuration
      const config =
        carouselEl.id === "full-width-carousel"
          ? StoreFrontFE.configurationOptions.carouselHeroConfig
          : StoreFrontFE.configurationOptions.carouselProductConfig;

      // Initialize Glide carousel
      const carousel = new Glide(carouselEl, config);

      // Store slide count (custom property)
      carousel.slides_count =
        carouselEl.querySelectorAll(".glide__slide").length;

      if (!carouselEl.id || carouselEl.id === "product-carousel-") {
        carouselEl.id = generateCarouselId(carouselEl);
      }

      // Add navigation arrows if there are multiple slides and no arrows exist
      if (
        carousel.slides_count > 1 &&
        carouselEl.querySelectorAll(".glide__arrows").length === 0
      ) {
        carouselEl.insertAdjacentHTML(
          "beforeend",
          '<div class="glide__arrows" data-glide-el="controls">' +
            '<button class="glide__arrow glide__arrow--left" data-glide-dir="<"></button>' +
            '<button class="glide__arrow glide__arrow--right" data-glide-dir=">"></button>' +
            "</div>"
        );
      }

      // Attach resize event listener
      carousel.on("resize", () => {
        check_resize(carousel, carouselEl);
      });

      let lastIndex = null;

      // GA4 - Attach Move after event listener to slides
      carousel.on("move.after", () => {
        if (lastIndex === carousel.index) return;

        lastIndex = carousel.index;

        const slides = carouselEl.querySelectorAll(".glide__slide");
        const activeSlide = slides[carousel.index];

        if (activeSlide) {
          sendViewPromotionEvent(activeSlide, lastIndex);
        }
        viewItemList(carousel, carouselEl);
      });

      if (!window.selectItemTrackingInitialized) {
        setupSelectItemTracking();
        setupSelectPromoTracking();
        window.selectItemTrackingInitialized = true;
      }

      // Mount the carousel
      carousel.mount();

      // Initial resize check
      check_resize(carousel, carouselEl);
    } catch (error) {
      console.error("Failed to initialize Glide carousel:", error);
    }
  }

  function initialize(carouselsClassName = ".glide") {
    return function () {
      const sliders = document.querySelectorAll(carouselsClassName);
      if (sliders.length === 0) {
        console.warn(`No elements found for selector: ${carouselsClassName}`);
        return;
      }
      sliders.forEach((element) => {
        setUp(element);
      });
    };
  }

  function recommendations() {
    const PLACEMENT = "homepage";
    const recommendation_id = "683eb61f8477f3c8da282bea";
    let RCM_STATUS = "PENDING";

    function onRecommendationsLoaded(data) {
      if (RCM_STATUS !== "TIMED_OUT") {
        RCM_STATUS = "LOADED";

        const carouselsContainerId = "basket-recommendations-carousel";
        const loaderQuerySelector = ".product-carousel__loader";
        const staticQuerySelector = ".product-carousel--static";
        const dynamicQuerySelector = ".product-carousel--dynamic";
        const slidesContainerQuerySelector = ".glide__slides";

        const carouselsContainer =
          document.getElementById(carouselsContainerId);
        const carouselLoader =
          carouselsContainer?.querySelector(loaderQuerySelector);
        const staticCarousel =
          carouselsContainer?.querySelector(staticQuerySelector);
        const dynamicCarousel =
          carouselsContainer?.querySelector(dynamicQuerySelector);
        const dynamicSlides = dynamicCarousel?.querySelector(
          slidesContainerQuerySelector
        );

        if (data && data.length > 0 && dynamicSlides) {
          for (const item of data) {
            const isBook =
              item.renderingType?.toLowerCase() === "books" &&
              item?.contributor;
            const contentAuthor = isBook
              ? `<a href='/Search/Search?Author=${encodeURIComponent(
                  item.contributor
                )}' class="pb-template__content--author">${
                  item.contributor
                }</a>`
              : `<span class="pb-template__content--author"></span>`;

            const isPreviousPrice =
              item?.previous_price &&
              item?.price &&
              item.price < item.previous_price;
            const contentPrice = isPreviousPrice
              ? `<p class="product-list__content--price">RRP <span class="single-hero-product__content--rrp">£${item.previous_price}</span><span class="product-list__content--current">£${item.price}</span></p>`
              : `<p class="product-list__content--price"><span class="product-list__content--current">£${
                  item.price || "N/A"
                }</span></p>`;

            const stockStatus = item?.stock_status || "In Stock";
            const stockClass = stockStatus === "In Stock" ? "inStock" : "";

            const imageParams = "&height=260&padding=false";
            const fallBackImage =
              "/content/StoreFront/assets/images/NoImage/No-Image.jpg";
            const image = item.image
              ? `/imagecache/getimage?url=${item.image.replace(
                  "https:",
                  ""
                )}${imageParams}`
              : fallBackImage;

            const checkProductId = /^\d+$/;
            const productId = item?.url
              ? checkProductId.test(item.url.split("/").pop())
                ? item.url.split("/").pop()
                : null
              : null;

            const slide = `
              <div class='item glide__slide'>
                <div class='product-list__content'>
                  <div class='product-list__content--img'>
                    <a href='${item.url || "#"}'>
                      <img src='${image}' alt="${
              item.title || "Product"
            }" loading='lazy' onerror="this.src='${fallBackImage}'" />
                    </a>
                  </div>
                  <p class='product-list__content--title'>
                    <a href='${item.url || "#"}'>${item.title || "Untitled"}</a>
                  </p>
                  ${contentAuthor}
                  <span class="pb-template__content--format">${
                    item.renderingType || "Unknown"
                  }</span>
                  ${contentPrice}
                  <div class="template--availability">
                    <span class="${
                      stockStatus === "In Stock" ? "in-stock" : "out-of-stock"
                    }">${stockStatus}</span>
                  </div>
                  <div class="product-list__content--buy-button" 
                    data-title="${item.title || ""}" 
                    data-group="${item.renderingType || "Unknown"}" 
                    data-ean="${item.EAN?.toString() || ""}" 
                    data-type="${item.renderingType || "Unknown"}" 
                    data-price="${item.price || ""}" 
                    data-rrp="${item.previous_price || ""}" 
                    data-percent="${
                      isPreviousPrice
                        ? Math.round(
                            ((item.previous_price - item.price) /
                              item.previous_price) *
                              100
                          )
                        : ""
                    }" 
                    data-save="${
                      isPreviousPrice
                        ? (item.previous_price - item.price).toFixed(2)
                        : ""
                    }">
                    <a class="button btn ${stockClass} buyBook buyButton" 
                      data-net-price="${item.price || ""}" 
                      data-product-code="${productId}" 
                      data-product-id="${productId}" 
                      data-product-type="${item.renderingType || "Unknown"}" 
                      data-productid="${productId}" 
                      data-short-title="${item.title || ""}" 
                      rel="nofollow">Add to Basket</a>
                  </div>                  
                </div>
              </div>
            `;
            dynamicSlides.insertAdjacentHTML("beforeend", slide);
          }

          // Initialize dynamic carousel (ensure it has .glide class)
          initialize(dynamicQuerySelector)();
          attachEventListeners(dynamicSlides);
          toggleDisabled(dynamicCarousel, "remove");
          destroyStaticCarousel(staticCarousel);
        } else {
          toggleDisabled(staticCarousel, "remove");
        }

        if (carouselLoader) {
          carouselLoader.remove();
        }
      }
    }

    function attachEventListeners(slidesContainer) {
      const buyButtons = slidesContainer?.querySelectorAll(".buyButton");
      buyButtons?.forEach((button) => {
        button.addEventListener("click", (e) => {
          e.preventDefault();
          if (!button.getAttribute("adding")) {
            console.log(`Add to basket: ${button.dataset.productId}`);
            return storeFront.addToBasket(
              button.dataset.productId,
              e.currentTarget,
              ""
            );
          }
        });
      });
    }

    function toggleDisabled(el, action) {
      if (el) {
        if (action === "remove") {
          el.removeAttribute("aria-disabled");
        } else if (action === "add") {
          el.setAttribute("aria-disabled", "true");
        } else {
          console.warn("Need values of 'remove' or 'add' for action param");
        }
      } else {
        console.warn("el is undefined");
      }
    }

    function destroyStaticCarousel(staticCarousel) {
      if (staticCarousel && staticCarousel.querySelector(".glide")) {
        const glideInstance = new Glide(staticCarousel.querySelector(".glide"));
        glideInstance.destroy();
        console.log("Static carousel destroyed");
      }
    }

    function checkForExponea() {
      const maxWaitTime = 4000;
      const pollInterval = 100;
      let intervalId = null;

      const startTime = Date.now();
      intervalId = setInterval(() => {
        if (window.exponea) {
          clearInterval(intervalId);
          exponea.getRecommendation(options);
          setTimeout(() => {
            if (RCM_STATUS !== "LOADED") {
              RCM_STATUS = "TIMED_OUT";
              console.warn("Recommendation timed out");
            }
          }, 3000);
        } else if (Date.now() - startTime >= maxWaitTime) {
          clearInterval(intervalId);
          console.warn("exponea not loaded within " + maxWaitTime + "ms");
        }
      }, pollInterval);
    }

    const options = {
      recommendationId: recommendation_id,
      size: 12,
      callback: onRecommendationsLoaded,
      fillWithRandom: true,
      catalogFilter: [],
      catalogAttributesWhitelist: [],
    };

    return {
      init: checkForExponea,
    };
  }

  return {
    init: initialize(),
    recommendations,
  };
}
