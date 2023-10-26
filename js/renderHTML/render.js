// no imports, only rendering html functions

// number 2 way of rendering, put inside a function. (document.createElement + DocumentFragment)

export function renderingHTML(results) {
  const allMoviesContainer = document.querySelector(".all-movies-container");
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < results.length; i++) {
    const movieContainer = document.createElement("div");
    movieContainer.className = "movie-container";

    const moviePrice = document.createElement("p");
    moviePrice.className = "pricetag";
    moviePrice.textContent = "$" + results[i].price;
    movieContainer.appendChild(moviePrice);

    if (results[i].onSale) {
      const movieDiscountPrice = document.createElement("span");
      movieDiscountPrice.className = "red-text-span";
      movieDiscountPrice.textContent = "$" + results[i].discountedPrice;
      moviePrice.appendChild(movieDiscountPrice);

      const redLineDiscount = document.createElement("div");
      redLineDiscount.className = "red-line";
      movieContainer.appendChild(redLineDiscount);
    }

    const movieImage = document.createElement("img");
    movieImage.className = "movie-image";
    movieImage.src = results[i].image;
    movieImage.alt = "Movie Poster";
    movieContainer.appendChild(movieImage);

    const movieTitle = document.createElement("p");
    movieTitle.className = "movie-title";
    movieTitle.textContent = results[i].title;
    movieContainer.appendChild(movieTitle);

    const movieCartButton = document.createElement("a");
    movieCartButton.className = "watch-button";
    movieCartButton.textContent = "Add to Cart";
    movieCartButton.setAttribute("data-movieid", `${results[i].id}`);
    movieContainer.appendChild(movieCartButton);

    const movieReadButton = document.createElement("a");
    movieReadButton.className = "read-button";
    movieReadButton.textContent = "Read more";
    movieReadButton.href = `product.html?id=${results[i].id}`;
    movieContainer.appendChild(movieReadButton);

    fragment.appendChild(movieContainer);
  }
  allMoviesContainer.appendChild(fragment);
  console.log(typeof results[0].title);
}

// DOMParse + string literals + DocumentFragments
