// import results that is from the fetch.js originally and import renderHTML function from render.js
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
// make a function that checks the url site and then uses that to retrieve correct dataset. Use correct data array as an argument to the renderingHTML function.

function getDataForCurrentCategory() {
  const url = window.location.href;

  if (url.includes("action")) return getActionArray(results);
  if (url.includes("comedy")) return getComedyArray(results);
  if (url.includes("index")) return getFavoritesArray(results);
  if (url.includes("horror")) return getHorrorArray(results);
  if (url.includes("kids")) return getKidsArray(results);
  if (url.includes("sale")) return getSaleArray(results);
  if (url.includes("all_movies")) return results;
  if (url.includes("product")) {
    const movie = updateMovieProduct(results);
    movie.type = "movieProduct";
    return movie;
  }
  console.error("Unknown category");
  return null;
}

const dataToRender = getDataForCurrentCategory();

if (dataToRender) {
  if (dataToRender.type === "movieProduct") {
    console.log("u made it");
    renderProductHTML(dataToRender);
  } else {
    renderingHTML(dataToRender);
  }
}

// renderingHTML(results);
