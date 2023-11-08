import { results } from "./data/data.js";
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

function getDataForCurrentCategory() {
  const url = window.location.href;

  if (url.includes("action")) return getActionArray(results);
  if (url.includes("comedy")) return getComedyArray(results);
  if (url.includes("horror")) return getHorrorArray(results);
  if (url.includes("kids")) return getKidsArray(results);
  if (url.includes("sale")) return getSaleArray(results);
  if (url.includes("all_movies")) return results;
  if (
    url.includes("index") ||
    url.includes("categories") ||
    url.includes("about_us")
  ) {
    const favorites = getFavoritesArray(results);
    favorites.type = "favorites";
    return favorites;
  }
  if (url.includes("product")) {
    const movie = updateMovieProduct(results);
    movie.type = "movieProduct";
    return movie;
  }
  if (url.includes("cart")) {
    const cartMovie = retrieveMovieIds(results);
    cartMovie.type = "cartMovie";
    return cartMovie;
  }
  console.error("Unknown category");
  return null;
}

const dataToRender = getDataForCurrentCategory();

if (dataToRender) {
  if (dataToRender.type === "movieProduct") {
    console.log("u made it");
    renderProductHTML(dataToRender);
    changeTitle(dataToRender);
  } else if (dataToRender.type === "cartMovie") {
    console.log("cart works");
    renderingCart(dataToRender);
  } else if (dataToRender.type === "favorites") {
    renderImages(dataToRender);
  } else {
    renderingHTML(dataToRender);
  }
}

inTheCart();
