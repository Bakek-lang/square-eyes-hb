export function inTheCart() {
  updateBadge();
  handleButtonsClicks();
}

function updateBadge() {
  let localCount = localStorage.getItem("count") || 0;
  const cartBadge = document.querySelector(".cart-badge");
  cartBadge.textContent = localCount;
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
  });
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
