var StoreFront = StoreFront || storeFront || {};

StoreFront.eventTarget = StoreFront.eventTarget || new EventTarget();

StoreFront.eventTarget.addEventListener("addtobasket", function (event) {
  event.preventDefault();
  var response = event.detail;

  if (response == "") {
    storeFront.alert("No Response from server");
    return;
  }

  if (storeFront.isMobileSite()) {
    location.href = ROOT + "basket";
    return;
  }

  var title = response.title;
  var total =
    "£" + response.total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  var message = response.message;

  if (title.length > 80) {
    title = title.substring(0, 80);
  }

  if (response.success) {
    $("#uxSmallBasketTotal").text(total);
    $("#uxSmallBasketQuantity .number").text(response.quantity);
  }

  if (message == "") {
    message = "Unrecognised response from server";
  }

  StoreFront.events.track("add_to_basket", response);

  // Freeow
  $("#freeow").freeow(
    message,
    title,
    { classes: ["smokey"] },
    response.imageUri,
    total,
    response.quantity,
    ROOT,
    response.basket
  );

  // GA4 - Add to Basket
  const item = response.basket.items.find(
    (item) => item.code === response.code
  );
  const discount = item.price > item.netPrice ? item.price - item.netPrice : 0;
  const discountPercent =
    discount > 0 ? Math.round((discount / item.price) * 100) : 0;

  const buyButton = document.querySelector(
    `.btn[data-product-code="${item.code}"]`
  );
  const inStock = !!buyButton.classList.contains("inStock");

  const genealogySplit = getFirstGenealogyLine(
    item,
    response.basket.facetDetailsById,
    {
      format: "split",
    }
  );

  const itemCategories = {
    item_category: item.type || "Unknown",
    ...Object.fromEntries(
      Object.entries(genealogySplit).filter(([key]) => key !== "item_category")
    ),
  };

  window.dataLayer.push({
    event: "add_to_cart",
    ecommerce: {
      currency: "GBP",
      value: response.total,
      items: [
        {
          author: item.contributor,
          discount_percentage: discountPercent,
          discount,
          in_stock: inStock,
          index: 0,
          item_brand: item.brand || item.publisher || "",
          item_id: item.code,
          item_name: item.title,
          on_offer: discount > 0,
          price: item.netPrice,
          quantity: 1,
          rrp: item.price,
          ...itemCategories,
        },
      ],
    },
  });
});
