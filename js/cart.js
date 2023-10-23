document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded works");
  const localCount = localStorage.getItem("count") || 0;
  const cartBadge = document.querySelector(".cart-badge");
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

  // let itemCount = localStorage.getItem("data");

  // if (itemCount) {
  //   let itemCountParsed = JSON.parse(itemCount);
  //   let value = Object.values(itemCountParsed);
  //   console.log(value[1]);

  //   for (let i = 0; i < value.length; i++) {
  //     let quantity = document.querySelectorAll(".quantity");
  //     quantity.textContent = value[i];
  //   }
  // }

  const url = new URL("https://api.noroff.dev/api/v1/square-eyes");

  async function makeAPICall() {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("HTTP error! Status: " + response.status);
      }
      const allMovies = await response.json();

      let storedData = JSON.parse(localStorage.getItem("data")) || {};

      console.log(storedData);

      const storedIDs = Object.keys(storedData);

      let filteredMovies = allMovies.filter(function (movie) {
        return storedIDs.includes(movie.id);
      });

      console.log(filteredMovies);
    } catch (error) {
      console.log(error);
    }
  }
  makeAPICall();
});
