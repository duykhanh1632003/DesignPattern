function getPrice(originanlPrice, typPromotion = "default") {
  if (typPromotion == "preOrder") {
    return originanlPrice * 0.8;
  }
  if (typPromotion == "promotion") {
    return originanlPrice <= 200 ? originanlPrice * 0.9 : originanlPrice - 30;
  }
  if (typPromotion == "default") {
    return originanlPrice;
  }
}

getPrice(200, "preOrder");
