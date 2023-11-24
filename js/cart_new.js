export function inTheCart() {
  updateBadge();
  handleButtonsClicks();
  localStorage.removeItem("count");
}

function updateBadge() {
  const totalItemCount = calculateTotalItemCount();
  const cartBadge = document.querySelector(".cart-badge");
  cartBadge.textContent = totalItemCount;
}

function calculateTotalItemCount() {
  const dataString = localStorage.getItem("data");
  if (!dataString) {
    return 0;
  }

  const dataObject = JSON.parse(dataString);

  let totalCount = 0;

  for (let key in dataObject) {
    if (dataObject.hasOwnProperty(key)) {
      totalCount += dataObject[key];
    }
  }
  return totalCount;
}

function checkQuantity() {
  const dataString = localStorage.getItem("data");
  const dataObject = JSON.parse(dataString);
  const quantity =
    document.querySelectorAll(".quantity") ||
    document.querySelector(".quantity");
  for (let key in dataObject) {
    if (dataObject.hasOwnProperty(key)) {
      quantity.textContent = dataObject[key];
    }
  }
}

function handleButtonsClicks() {
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("watch-button")) {
      handleWatchButtonClick(event);
    }
    if (
      event.target.classList.contains("fa-plus") ||
      event.target.classList.contains("fa-minus")
    ) {
      handleQuantityButtonClick(event);
    }
    if (event.target.classList.contains("remove-button")) {
      handleRemoveButtonClick(event);
    }
  });
}

function handleRemoveButtonClick(event) {
  const cartItem = event.target.closest(".cart-item");
  if (cartItem) {
    const itemId = cartItem.getAttribute("data-id-cart");
    removeIdFromLocalStorage(itemId);
    cartItem.remove();
    updateBadge();
    updateTotalPrice();
    checkAndUpdateCartEmptyMessage();
  }
}

export function checkAndUpdateCartEmptyMessage() {
  const dataString = localStorage.getItem("data");
  let dataObject;
  if (dataString) {
    dataObject = JSON.parse(dataString);
  } else {
    dataObject = {};
  }

  const emptyCartMessage = document.querySelector(".empty-cart-message");
  const priceCartDiv = document.querySelector(".total-price-cart");

  const keys = Object.keys(dataObject);

  if (keys.length === 0) {
    emptyCartMessage.style.display = "flex";
    priceCartDiv.style.display = "none";
  } else {
    emptyCartMessage.style.display = "none";
  }
}

function removeIdFromLocalStorage(itemId) {
  const cartItemString = localStorage.getItem("data");
  const cartItems = JSON.parse(cartItemString);

  delete cartItems[itemId];

  localStorage.setItem("data", JSON.stringify(cartItems));
}

function handleWatchButtonClick(event) {
  const cartBadge = document.querySelector(".cart-badge");

  let count = parseInt(cartBadge.textContent) || 0;
  count++;
  cartBadge.textContent = count;
  localStorage.setItem("count", count);

  const movieId = event.target.getAttribute("data-movieid");
  if (movieId) {
    const existingData = JSON.parse(localStorage.getItem("data")) || {};

    existingData[movieId] = (existingData[movieId] || 0) + 1;

    localStorage.setItem("data", JSON.stringify(existingData));
  }
}

function handleQuantityButtonClick(event) {
  let container = event.target.closest(".quantity-container");
  let quantity = container.querySelector(".quantity");
  let quantityCount = Number(quantity.textContent);
  if (event.target.classList.contains("fa-plus")) {
    quantityCount++;
  } else if (event.target.classList.contains("fa-minus") && quantityCount > 1) {
    quantityCount--;
  }
  quantity.textContent = quantityCount;

  const cartItem = container.closest(".cart-item");
  const itemId = cartItem.getAttribute("data-id-cart");
  const dataObject = JSON.parse(localStorage.getItem("data") || "{}");
  dataObject[itemId] = quantityCount;
  localStorage.setItem("data", JSON.stringify(dataObject));

  // Total price on each movie
  let moviePriceText = cartItem.querySelector(".movie-price").textContent;
  let cleanedMoviePriceText = moviePriceText.replace(/[^0-9.]+/g, "");
  const moviePrice = Number(cleanedMoviePriceText);

  const totalMoviePriceText = cartItem.querySelector(".total-movie-price");
  totalMoviePriceText.textContent =
    "$" + (moviePrice * quantityCount).toFixed(2);

  // Total price on all movies
  updateTotalPrice();

  updateBadge();
}

export function updateTotalPrice() {
  const totalMoviePriceElements =
    document.querySelectorAll(".total-movie-price");
  let totalPrice = 0;

  totalMoviePriceElements.forEach((element) => {
    let priceText = element.textContent.replace(/[^0-9.]+/g, "");
    let price = Number(priceText);
    totalPrice += price;
  });

  const totalPriceAll = document.querySelector(".total-price-cart-text p");
  totalPriceAll.textContent = "$" + totalPrice.toFixed(2);
}
