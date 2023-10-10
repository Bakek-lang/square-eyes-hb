const allMoviesContainer = document.querySelector(".all-movies-container");

const url = new URL("https://api.noroff.dev/api/v1/square-eyes");

async function makeApiCall() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    for (let i = 0; i < results.length; i++) {
      if (results[i].genre === "Kids") {
        if (results[i].onSale === true) {
          allMoviesContainer.innerHTML += `<div class="movie-container">
        <p class="pricetag">$${results[i].price}<span class="red-text-span">$${results[i].discountedPrice}</p>
        <div class="red-line"></div>
        <img class="movie-image" src="${results[i].image}" alt="Movie Poster"/>
        <p class="movie-title">${results[i].title}</p>
        <a class="watch-button" href="cart.html">Add to Cart</a>
        <a class="read-button" href="product.html?id=${i}">Read more</a>
        </div>
        `;
        } else {
          allMoviesContainer.innerHTML += `<div class="movie-container">
          <p class="pricetag">$${results[i].price}</p>
          <img class="movie-image" src="${results[i].image}" alt="blablabla"/>
          <p class="movie-title">${results[i].title}</p>
          <a class="watch-button" href="cart.html">Add to Cart</a>
          <a class="read-button" href="product.html?id=${i}">Read more</a>
          </div>
          `;
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
}

makeApiCall();
