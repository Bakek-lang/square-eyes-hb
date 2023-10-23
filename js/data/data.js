// import apicall function and export results
import { makeApiCall } from "./fetch.js";

export let results = await makeApiCall();

console.log(results);

// Make function for index file arrays of data from API
// results

// Make function for comedy file arrays of data from API
export function getComedyArray(movies) {
  const movieArray = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre === "Comedy" || movies[i].genre === "Drama") {
      movieArray.push(movies[i]);
    }
  }
  return movieArray;
}

// Make function for action file arrays of data from API
export function getActionArray(movies) {
  const movieArray = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre === "Action") {
      movieArray.push(movies[i]);
    }
  }
  return movieArray;
}

// Make function for kids file arrays of data from API
export function getKidsArray(movies) {
  const movieArray = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre === "Kids") {
      movieArray.push(movies[i]);
    }
  }
  return movieArray;
}

// Make function for horror file arrays of data from API
export function getHorrorArray(movies) {
  const movieArray = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre === "Horror" || movies[i].genre === "Drama") {
      movieArray.push(movies[i]);
    }
  }
  return movieArray;
}

// Make function for SALE file arrays
export function getSaleArray(movies) {
  const movieArray = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].onSale) {
      movieArray.push(movies[i]);
    }
  }
  return movieArray;
}

// Make function for favorites for home page
export function getFavoritesArray(movies) {
  const movieArray = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].favorite) {
      movieArray.push(movies[i]);
    }
  }
  movieArray.shift();
  return movieArray;
}

// console.log(getActionArray(results));
// console.log(getComedyArray(results));
// console.log(getFavoritesArray(results));
// console.log(getHorrorArray(results));
// console.log(getKidsArray(results));
// console.log(getSaleArray(results));
