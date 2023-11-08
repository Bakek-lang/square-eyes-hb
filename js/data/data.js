// import apicall function and export results
import { makeApiCall } from "./fetch.js";

export let results = await makeApiCall();

// Function for comedy file arrays of data from API
export function getComedyArray(movies) {
  const movieArray = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre === "Comedy") {
      movieArray.push(movies[i]);
    }
  }
  return movieArray;
}

// Function for action file arrays of data from API
export function getActionArray(movies) {
  const movieArray = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre === "Action") {
      movieArray.push(movies[i]);
    }
  }
  return movieArray;
}

// Function for kids file arrays of data from API
export function getKidsArray(movies) {
  const movieArray = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre === "Kids") {
      movieArray.push(movies[i]);
    }
  }
  return movieArray;
}

// Function for horror file arrays of data from API
export function getHorrorArray(movies) {
  const movieArray = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre === "Horror") {
      movieArray.push(movies[i]);
    }
  }
  return movieArray;
}

// Function for SALE file arrays
export function getSaleArray(movies) {
  const movieArray = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].onSale) {
      movieArray.push(movies[i]);
    }
  }
  return movieArray;
}

// Function for favorites for home page
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
