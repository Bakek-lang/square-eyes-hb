document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded works");
  const localCount = localStorage.getItem("count") || 0;
  const cartBadge = document.querySelector(".cart-badge");
  cartBadge.style.display = "block";
  cartBadge.textContent = localCount;
  console.log(localCount);

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("watch-button")) {
      // if (!event.target.classList.contains("clicked")) {
      console.log("it works!");
      let count = parseInt(cartBadge.textContent) || 0;
      count++;
      cartBadge.textContent = count;
      localStorage.setItem("count", count);
      // event.target.classList.add("clicked");

      // event.target.disabled = true;

      const movieId = event.target.getAttribute("data-movieid");

      if (movieId) {
        const existingData = JSON.parse(localStorage.getItem("data")) || {};

        existingData[movieId] = (existingData[movieId] || 0) + 1;

        console.log(existingData[movieId]);

        localStorage.setItem("data", JSON.stringify(existingData));
      }
      console.log(movieId);
    }
  });

  document.addEventListener("click", function (event) {
    if (
      event.target.classList.contains("fa-plus") ||
      event.target.classList.contains("fa-minus")
    ) {
      let container = event.target.closest(".quantity-container");
      let quantity = container.querySelector(".quantity");
      let quantityCount = Number(quantity.textContent);

      if (event.target.classList.contains("fa-plus")) {
        quantityCount++;

        console.log("it works, but...");
      } else if (
        event.target.classList.contains("fa-minus") &&
        quantityCount > 1
      ) {
        quantityCount--;
      }
      quantity.textContent = quantityCount;
    }
  });

  let itemCount = localStorage.getItem("data");
  let itemCountParsed = JSON.parse(itemCount);
  let value = Object.values(itemCountParsed);
  console.log(value[1]);
});
