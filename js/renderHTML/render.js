// no imports, only rendering html functions

// number 2 way of rendering, put inside a function. (document.createElement + DocumentFragment)

export function renderingHTML(results) {
  const allMoviesContainer = document.querySelector(".all-movies-container");
  let fragment = document.createDocumentFragment();
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
  console.log(typeof results[0].title);
}

// DOMParse + string literals + DocumentFragments
