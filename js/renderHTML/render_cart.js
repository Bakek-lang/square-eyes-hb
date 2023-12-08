import { sanitizeHTML, sanitizeURL } from "../security/sanitize.js";

export function retrieveMovieIds(results) {
  const dataString = localStorage.getItem("data");

  if (!dataString) {
    return [];
  }

  const dataObject = JSON.parse(dataString);

  const keysArray = Object.keys(dataObject);
  const movieIds = [];
  for (let i = 0; i < keysArray.length; i++) {
    for (let j = 0; j < results.length; j++) {
      if (keysArray[i] === results[j].id) {
        movieIds.push(results[j]);
      }
    }
  }
  return movieIds;
}

export function renderingCart(results) {
  const cartContainer = document.querySelector(".cart-container");
  const totalPriceDiv = document.querySelector(".total-price-cart");
  const emptyCartMessage = document.querySelector(".empty-cart-message");

  if (results.length === 0) {
    emptyCartMessage.style.display = "flex";
  } else {
    emptyCartMessage.style.display = "none";
  }

  const fragment = document.createDocumentFragment();
  const parser = new DOMParser();

  const dataObject = JSON.parse(localStorage.getItem("data") || "{}");

  for (let i = 0; i < results.length; i++) {
    const quantity = dataObject[results[i].id];
    const cartItems = `<div class="cart-item" data-id-cart="${sanitizeHTML(
      results[i].id
    )}">
    <div class="mobile-cart-header">
      <p class="mobile-product-header">PRODUCT DETAILS</p>
      <p class="mobile-quantity-header">QUANTITY</p>
      <p class="mobile-price-header">PRICE</p>
    </div>
      <div class="image-text-cart">
      <img class="cart-img" src="${sanitizeURL(results[i].image)}" alt="" />
      <div class="cart-item-text">
        <h2>${sanitizeHTML(results[i].title)}</h2>
        <p>${sanitizeHTML(results[i].released)}</p>
      </div>
    </div>
    <div class="quantity-container">
      <i class="fa-solid fa-minus"></i>
      <div class="quantity">${quantity}</div>
      <i class="fa-solid fa-plus"></i>
    </div>
  
    <p class="movie-price">$${sanitizeHTML(results[i].discountedPrice)}</p>
  
    <p class="total-movie-price">$${(
      Number(sanitizeHTML(results[i].discountedPrice)) * quantity
    ).toFixed(2)}</p>
  
    <button class="remove-button">Remove</button>
  </div>
    `;

    const productsDoc = parser.parseFromString(cartItems, "text/html");
    fragment.appendChild(productsDoc.body.firstChild);
  }

  cartContainer.insertBefore(fragment, totalPriceDiv);
}
