function viewItemProductPage() {
  function getProductTags(itemId) {
    var tags = [];
    var numericId = parseInt(itemId, 10);

    if (StoreFront.tagsigned && StoreFront.tagsigned.indexOf(numericId) > -1) tags.push("signed");
    if (StoreFront.tagexclusive && StoreFront.tagexclusive.indexOf(numericId) > -1) tags.push("exclusive");
    if (StoreFront.tagbookclubpick && StoreFront.tagbookclubpick.indexOf(numericId) > -1) tags.push("bookclubpick");
    if (StoreFront.tagnew && StoreFront.tagnew.indexOf(numericId) > -1) tags.push("new");
    if (StoreFront.tagonlineoffer && StoreFront.tagonlineoffer.indexOf(numericId) > -1) tags.push("onlineoffer");
    if (StoreFront.tagsale && StoreFront.tagsale.indexOf(numericId) > -1) tags.push("sale");

    return tags;
  }

  var product = {};
  var itemAuthor = [];

  var authorInfo = document.querySelector(".titleAuthorContributor--authorContributor");
  if (authorInfo) {
    var authorSpans = authorInfo.querySelectorAll("h2 a span");
    for (var i = 0; i < authorSpans.length; i++) {
      itemAuthor.push(authorSpans[i].textContent);
    }
  }

  var brandEl = document.querySelector("li.brand span.info");
  var publisherEl = document.querySelector("li.publisher span.info");
  var itemBrand = brandEl ? brandEl.textContent.trim() : publisherEl ? publisherEl.textContent.trim() : "";

  var categoryMeta = document.querySelector('meta[property="og:type"]');
  var itemCategory = categoryMeta ? categoryMeta.content : "";

  var isbnEl = document.querySelector('[itemprop="isbn"]');
  var itemId = isbnEl ? isbnEl.textContent.trim() : "";

  var inStockEl = document.querySelector(".availability a");
  var itemInStock = inStockEl && inStockEl.querySelector(".inStock") ? true : false;

  var titleMeta = document.querySelector('meta[property="og:title"]');
  var itemName = titleMeta ? titleMeta.content : "";

  var itemProductCard = getProductTags(itemId);

  var rrpEl = document.querySelector(".rrp");
  var priceEl = document.querySelector('[itemprop="price"]');
  var itemRrp = rrpEl ? parseFloat(rrpEl.textContent.replace(/[^\d.]/g, "")) : 0;
  var itemPrice = priceEl ? parseFloat(priceEl.textContent.replace(/[^\d.]/g, "")) : 0;

  var itemDiscount = itemRrp > itemPrice ? itemRrp - itemPrice : 0;
  var itemDiscountPercent = itemRrp > 0 ? Math.round((itemDiscount / itemRrp) * 100) : 0;
  var itemOnOffer = itemDiscount > 0;

  product.author = itemAuthor;
  product.discount = itemDiscount;
  product.discount_percent = itemDiscountPercent;
  product.in_stock = itemInStock;
  product.index = 0;
  product.item_brand = itemBrand;
  product.item_category = itemCategory;
  product.item_id = itemId;
  product.item_list_name = "";
  product.item_name = itemName;
  product.on_offer = itemOnOffer;
  product.product_card = itemProductCard;
  product.price = itemPrice;
  product.quantity = 1;
  product.rrp = itemRrp;

  return(product);
}
