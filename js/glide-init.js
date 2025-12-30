// GlideCarousel.js
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

  function setUp(carouselEl) {
    // Check if Glide is available and element has data-glide attribute
    if (!window.Glide || !("glide" in carouselEl.dataset)) {
      console.warn(
        "Glide.js or data-glide attribute is missing for",
        carouselEl
      );
      return;
    }

    try {
      // Parse the data-glide JSON configuration
      const config = JSON.parse(carouselEl.dataset.glide);

      // Initialize Glide carousel
      const carousel = new Glide(carouselEl, config);

      // Store slide count (custom property)
      carousel.slides_count =
        carouselEl.querySelectorAll(".glide__slide").length;

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
    const recommendation_id = "677e532544d7d2fa59a60b62";
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
      size: 10,
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

// Usage
document.addEventListener("DOMContentLoaded", () => {
  if (typeof GlideCarousel === "function") {
    const tpCarousels = GlideCarousel();
    tpCarousels.init();
    if (window.location.pathname.toLowerCase().includes("/basket")) {
      tpCarousels.recommendations().init();
    }
  } else {
    console.warn(
      "GlideCarousel module is not defined. Check if GlideCarousel.js is loaded."
    );
  }
});
