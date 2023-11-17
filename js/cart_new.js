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

    checkAndUpdateCartEmptyMessage();
  }
}

function checkAndUpdateCartEmptyMessage() {
  const dataString = localStorage.getItem("data");
  let dataObject;
  if (dataString) {
    dataObject = JSON.parse(dataString);
  } else {
    dataObject = {};
  }

  const emptyCartMessage = document.querySelector(".empty-cart-message");

  const keys = Object.keys(dataObject);

  if (keys.length === 0) {
    emptyCartMessage.style.display = "";
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
}
