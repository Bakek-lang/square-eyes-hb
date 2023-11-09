import { sanitizeHTML } from "../security/sanitize.js";
import { sanitizeURL } from "../security/sanitize.js";
import { results } from "../data/data.js";
// for surprise me function need to declare lastrandomnumber
let lastRandomNumber = -1;
// update query string
function updateQueryString(getID) {
  const currentUrl = new URL(window.location.href);
  const params = new URLSearchParams(currentUrl.search);
  params.set("id", getID);
  history.replaceState({}, "", `${currentUrl.pathname}?${params.toString()} `);
}

// find matching movie id from querystring and results array.
export function updateMovieProduct() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  const matchingMovie = results.find(function (object) {
    return object.id === id;
  });
  return matchingMovie;
}
// surprise me button for product details page
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

  updateQueryString(movie.id);
  function updateMovieDisplay() {
    const newMovie = updateMovieProduct();
    renderProductHTML(newMovie);
  }
  updateMovieDisplay();
}

// render product details page
export function renderProductHTML(results) {
  const productContainer = document.querySelector(".product-flex-container");
  productContainer.innerHTML = "";
  const products = `<a class="back-button" onclick="history.go(-1)">&#8592; BACK</a>
  <div class="image-button-flex">
    <img src="${sanitizeURL(results.image)}" alt="blabla" />
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

export function changeTitle(movie) {
  document.title = `${movie.title} | Square Eyes`;
}
