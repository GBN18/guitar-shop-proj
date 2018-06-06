// Wait for DOM to load
$(function () {
  updateBasketCount();
});

const basketKey = 'basket';

function addToBasket(guitarId) {
  let basket = getBasket();
  basket.push(guitarId);
  saveBasket(basket);
}

function saveBasket(basket) {
  localStorage.setItem(basketKey, JSON.stringify(basket));
  updateBasketCount();
}

function getBasket() {
  let basket = JSON.parse(localStorage.getItem(basketKey));
  if (Array.isArray(basket)) {
    return basket;
  }
  return [];
}

function updateBasketCount() {
  $("#items-in-basket").html(getBasket().length);
}