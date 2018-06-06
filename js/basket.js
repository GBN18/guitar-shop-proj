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

function listBasket() {
  let basket = getBasket();
  for (let i = 0; i < basket.length; i++) {
    $("#basket").prepend(formatBasketItem(basket[i]));

  }
}

function formatBasketItem(guitarId) {
  let guitar = guitars[guitarId - 1];
  return `
  <li>
  <img src="image/guitar/${guitar.id}.jpg" alt="${guitar.name}">
  <h3>${guitar.name}</h3>
  </li>
  `;
}

function sendBasket() {
  let email = "gavriel@epoch.co.il";
  let subject = "Order from: " + getUserName();
  let body = "Here are the ordered items:\n";
  let basket = getBasket();
  for (let i = 0; i < basket.length; i++) {
    body = body + `\nGuitar ID: ${basket[i]}`;
  }
  body = encodeURI(body);
  location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  clearBasket();
}

function clearBasket() {
  localStorage.removeItem(basketKey);
  location.href = "index.html";
}

function enableBasketButtons() {
  if (getBasket().length > 0) {
    $('button').prop('disabled', false);
  }
}