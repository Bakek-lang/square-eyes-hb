document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded works");

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("watch-button")) {
      // if (!event.target.classList.contains("clicked")) {
      console.log("it works!");
      const cartBadge = document.querySelector(".cart-badge");
      let count = parseInt(cartBadge.textContent) || 0;
      count++;
      cartBadge.style.display = "block";
      cartBadge.textContent = count;

      // event.target.classList.add("clicked");

      // event.target.disabled = true;
    }
  });
});
