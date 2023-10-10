const productContainer = document.querySelector(".product-flex-container");
let lastRandomNumber = -1;
let results;

function generateMovieHTML(movie) {
  return `<a class="back-button" onclick="history.go(-1)">&#8592; BACK</a>
  <div class="image-button-flex">
  <img src="${movie.image}" alt="blabla" />
  <a href="cart.html" class="watch-button">Add to Cart</a>
  </div>
  <h2 class="movie-title">${movie.title}</h2>
  <p class="text-productpage">
  ${movie.description}
  </p>
  <div class="first-text-flex">
  <p class="price">Price: $${movie.discountedPrice}</p>
  <p class="rating">Rating: ${movie.rating}</p>
  </div>
  <div class="second-text-flex">
  <p class="genre">Genre: ${movie.genre}</p>
  <p class="release-date">Release date: ${movie.released}</p>
  </div>

  <a class="cta surprise-button">Surprise me</a>
  `;
}

function updateQueryString(getID) {
  const currentUrl = new URL(window.location.href);
  const params = new URLSearchParams(currentUrl.search);
  params.set("id", getID);
  history.replaceState({}, "", `${currentUrl.pathname}?${params.toString()} `);
}

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

  productContainer.innerHTML = generateMovieHTML(movie);

  const newReadButton = document.querySelector(".surprise-button");
  newReadButton.addEventListener("click", surpriseMe);

  updateQueryString(randomNumber);
}

const url = new URL("https://api.noroff.dev/api/v1/square-eyes");

async function makeApiCalls() {
  try {
    const response = await fetch(url);

    results = await response.json();

    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");

    productContainer.innerHTML = generateMovieHTML(results[id]);

    const surpriseButton = document.querySelector(".surprise-button");
    surpriseButton.addEventListener("click", surpriseMe);
  } catch (error) {
    console.log(error);
  }
}

makeApiCalls();
