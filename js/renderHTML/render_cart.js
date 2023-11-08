import { sanitizeHTML, sanitizeURL } from "../security/sanitize.js";

export function retrieveMovieIds(results) {
  const dataString = localStorage.getItem("data");

  if (!dataString) {
    return [];
  }

  const dataObject = JSON.parse(dataString);

  console.log(dataObject);

  const keysArray = Object.keys(dataObject);
  const movieIds = [];
  console.log(keysArray);
  for (let i = 0; i < keysArray.length; i++) {
    for (let j = 0; j < results.length; j++) {
      if (keysArray[i] === results[j].id) {
        movieIds.push(results[j]);
      }
    }
  }
  console.log(movieIds);
  return movieIds;
}

export function renderingCart(results) {
  const cartContainer = document.querySelector(".cart-container");
  const totalPriceDiv = document.querySelector(".total-price-cart");

  const fragment = document.createDocumentFragment();
  const parser = new DOMParser();

  for (let i = 0; i < results.length; i++) {
    const cartItems = `<div class="cart-item">
    <div class="image-text-cart">
      <img class="cart-img" src="${sanitizeURL(results[i].image)}" alt="" />
      <div class="cart-item-text">
        <h2>${sanitizeHTML(results[i].title)}</h2>
        <p>${sanitizeHTML(results[i].released)}</p>
      </div>
    </div>
    <div class="quantity-container">
      <i class="fa-solid fa-minus"></i>
      <div class="quantity">1</div>
      <i class="fa-solid fa-plus"></i>
    </div>
  
    <p>$${sanitizeHTML(results[i].discountedPrice)}</p>
  
    <p>$9.99</p>
  
    <button class="remove-button">Remove</button>
  </div>
    `;

    const productsDoc = parser.parseFromString(cartItems, "text/html");
    fragment.appendChild(productsDoc.body.firstChild);
  }

  cartContainer.insertBefore(fragment, totalPriceDiv);
}
