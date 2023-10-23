const allMoviesContainer = document.querySelector(".all-movies-container");

const url = new URL("https://api.noroff.dev/api/v1/square-eyes");

let fragment = document.createDocumentFragment();

console.log(fragment);

async function makeApiCall() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    for (let i = 0; i < results.length; i++) {
      let movieContainer = document.createElement("div");
      movieContainer.className = "movie-container";

      let moviePrice = document.createElement("p");
      moviePrice.className = "pricetag";
      moviePrice.textContent = "$" + results[i].price;
      movieContainer.appendChild(moviePrice);

      if (results[i].onSale) {
        let movieDiscountPrice = document.createElement("span");
        movieDiscountPrice.className = "red-text-span";
        movieDiscountPrice.textContent = "$" + results[i].discountedPrice;
        moviePrice.appendChild(movieDiscountPrice);

        let redLineDiscount = document.createElement("div");
        redLineDiscount.className = "red-line";
        movieContainer.appendChild(redLineDiscount);
      }

      let movieImage = document.createElement("img");
      movieImage.className = "movie-image";
      movieImage.src = results[i].image;
      movieImage.alt = "Movie Poster";
      movieContainer.appendChild(movieImage);

      let movieTitle = document.createElement("p");
      movieTitle.className = "movie-title";
      movieTitle.textContent = results[i].title;
      movieContainer.appendChild(movieTitle);

      let movieCartButton = document.createElement("a");
      movieCartButton.className = "watch-button";
      movieCartButton.textContent = "Add to Cart";
      movieCartButton.setAttribute("data-movieid", `${results[i].id}`);
      movieContainer.appendChild(movieCartButton);

      let movieReadButton = document.createElement("a");
      movieReadButton.className = "read-button";
      movieReadButton.textContent = "Read more";
      movieReadButton.href = `product.html?id=${results[i].id}`;
      movieContainer.appendChild(movieReadButton);

      fragment.appendChild(movieContainer);
    }
    allMoviesContainer.appendChild(fragment);
  } catch (error) {
    console.log(error);
  }
}

makeApiCall();

// if (results[i].onSale === true) {
//   allMoviesContainer.innerHTML += `<div class="movie-container">
//   <p class="pricetag">$${results[i].price}<span class="red-text-span">$${results[i].discountedPrice}</span></p>
//   <div class="red-line"></div>
//   <img class="movie-image" src="${results[i].image}" alt="Movie Poster"/>
//   <p class="movie-title">${results[i].title}</p>
//   <a class="watch-button" data-movieid="${results[i].id}" >Add to Cart</a>
//   <a class="read-button" href="product.html?id=${results[i].id}">Read more</a>
//   </div>
//   `;
// } else {
//   allMoviesContainer.innerHTML += `<div class="movie-container">
//   <p class="pricetag">$${results[i].price}</p>
//   <img class="movie-image" src="${results[i].image}" alt="Movie Poster"/>
//   <p class="movie-title">${results[i].title}</p>
//   <a class="watch-button" data-movieid="${results[i].id}">Add to Cart</a>
//   <a class="read-button" href="product.html?id=${results[i].id}">Read more</a>
//   </div>
//   `;
// }
