import { sanitizeHTML } from "../safety/security.js";
import { results } from "../data/data.js";
// for surprise me function need to declare lastrandomnumber
let lastRandomNumber = -1;
const productContainer = document.querySelector(".product-flex-container");
// update query string -- use on surprise me button ( put inside renderproducthtml on bottom)
function updateQueryString(getID) {
  const currentUrl = new URL(window.location.href);
  const params = new URLSearchParams(currentUrl.search);
  params.set("id", getID);
  history.replaceState({}, "", `${currentUrl.pathname}?${params.toString()} `);
}

// surprise me button for product details page (put inside renderproduct.html on bottom)
function surpriseMe() {
  let randomNumber;
  while (true) {
    randomNumber = Math.floor(Math.random() * results.length);
    if (randomNumber !== lastRandomNumber) {
      break;
    }
  }

  lastRandomNumber = randomNumber;
  const movie = results[randomNumber];

  // update querystring, then use function updateMovieDisplay to get the current id and render movie based on that id
  updateQueryString(movie.id);
  function updateMovieDisplay() {
    const newMovie = updateMovieProduct();
    renderProductHTML(newMovie);
  }
  updateMovieDisplay();
}

// find matching movie and use inside dataToRender function in index.js
export function updateMovieProduct() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  const matchingMovie = results.find(function (object) {
    return object.id === id;
  });
  console.log(matchingMovie);
  return matchingMovie;
}

// render product details page
export function renderProductHTML(results) {
  productContainer.innerHTML = "";

  const products = `<a class="back-button" onclick="history.go(-1)">&#8592; BACK</a>
  <div class="image-button-flex">
    <img src="${results.image}" alt="blabla" />
    <a data-movieid="${sanitizeHTML(
      results.id
    )}" class="watch-button">Add to Cart</a>
  </div>
    <h2 class="movie-title">${sanitizeHTML(results.title)}</h2>
    <p class="text-productpage">
    ${sanitizeHTML(results.description)}
    </p>
    <div class="first-text-flex">
    <p class="price">Price: $${sanitizeHTML(results.discountedPrice)}</p>
    <p class="rating">Rating: ${sanitizeHTML(results.rating)}</p>
    </div>
    <div class="second-text-flex">
    <p class="genre">Genre: ${sanitizeHTML(results.genre)}</p>
    <p class="release-date">Release date: ${sanitizeHTML(results.released)}</p>
    </div>
    
    <a class="cta surprise-button">Surprise me</a>
    `;

  const parser = new DOMParser();
  const productsDoc = parser.parseFromString(products, "text/html");

  while (productsDoc.body.firstChild) {
    productContainer.appendChild(productsDoc.body.firstChild);
  }

  const surpriseButton = document.querySelector(".surprise-button");
  surpriseButton.addEventListener("click", surpriseMe);
}
