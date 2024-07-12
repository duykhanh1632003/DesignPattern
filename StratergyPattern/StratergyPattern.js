function dayPrice(originalPrice) {
  return originalPrice * 0.6;
}

function backFriday(originalPrice) {
  return originalPrice * 0.7;
}

const getPriceStrategies = {
  dayPrice,
  backFriday,
  default: dayPrice,
};

function getPrice(originalPrice, typPromotion) {
  return getPriceStrategies[typPromotion](originalPrice);
}
