// import { makeApiCall } from "./data/fetch.js";
import { loadAndReturnResults } from "./data/data.js";
import { renderingHTML } from "./renderHTML/render.js";
import {
  getActionArray,
  getComedyArray,
  getFavoritesArray,
  getHorrorArray,
  getKidsArray,
  getSaleArray,
} from "./data/data.js";
import { renderProductHTML } from "./renderHTML/render_product.js";
import { updateMovieProduct } from "./renderHTML/render_product.js";
import { retrieveMovieIds } from "./renderHTML/render_cart.js";
import { renderingCart } from "./renderHTML/render_cart.js";
import { renderImages } from "./renderHTML/render_images.js";
import { changeTitle } from "./renderHTML/render_product.js";
import { inTheCart } from "./cart_new.js";
import { displayError } from "./components/display_error.js";
import { checkAndUpdateCartEmptyMessage } from "./cart_new.js";
import { updateTotalPrice } from "./cart_new.js";

function getDataForCurrentCategory(results) {
  const url = window.location.href;

  if (url.includes("action")) return getActionArray(results);
  if (url.includes("comedy")) return getComedyArray(results);
  if (url.includes("horror")) return getHorrorArray(results);
  if (url.includes("kids")) return getKidsArray(results);
  if (url.includes("sale")) return getSaleArray(results);
  if (url.includes("all_movies")) return results;
  if (url.includes("product")) {
    const movie = updateMovieProduct(results);
    movie.type = "movieProduct";
    return movie;
  }
  if (url.includes("cart")) {
    checkAndUpdateCartEmptyMessage();
    const cartMovie = retrieveMovieIds(results);
    cartMovie.type = "cartMovie";
    return cartMovie;
  }
  if (
    url.includes("index") ||
    url.includes("categories") ||
    url.includes("about_us") ||
    url.includes("")
  ) {
    const favorites = getFavoritesArray(results);
    favorites.type = "favorites";
    return favorites;
  }
  return null;
}

async function main() {
  try {
    const data = await loadAndReturnResults();
    localStorage.setItem("allMovies", JSON.stringify(data));
    const dataToRender = getDataForCurrentCategory(data);

    if (!dataToRender) {
      throw new Error("No data available to render for the current category.");
    }

    if (dataToRender.type === "movieProduct") {
      renderProductHTML(dataToRender, data);
      changeTitle(dataToRender);
    } else if (dataToRender.type === "cartMovie") {
      renderingCart(dataToRender);
      updateTotalPrice();
    } else if (dataToRender.type === "favorites") {
      renderImages(dataToRender);
    } else {
      renderingHTML(dataToRender);
    }
  } catch (error) {
    const productContainer = document.querySelector(".product-flex-container");
    const cartContainer = document.querySelector(".cart-container");
    const imagesContainer = document.querySelector(".products-homepage");
    const allMoviesContainer = document.querySelector(".all-movies-container");

    if (productContainer) {
      productContainer.innerHTML = displayError(error.message);
    } else if (cartContainer) {
      cartContainer.innerHTML = displayError(error.message);
    } else if (imagesContainer) {
      imagesContainer.innerHTML = displayError(error.message);
    } else if (allMoviesContainer) {
      allMoviesContainer.innerHTML = displayError(error.message);
    } else {
      console.error("Error. Container not found");
    }
  }
}

inTheCart();
main();
