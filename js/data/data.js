// import apicall function and export results
import { makeApiCall } from "./fetch.js";

export async function loadAndReturnResults() {
  try {
    const results = await makeApiCall();
    return results;
  } catch (error) {
    throw error;
  }
}

export function getComedyArray(movies) {
  const movieArray = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre === "Comedy") {
      movieArray.push(movies[i]);
    }
  }
  return movieArray;
}

export function getActionArray(movies) {
  const movieArray = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre === "Action") {
      movieArray.push(movies[i]);
    }
  }
  return movieArray;
}

export function getKidsArray(movies) {
  const movieArray = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre === "Kids") {
      movieArray.push(movies[i]);
    }
  }
  return movieArray;
}

export function getHorrorArray(movies) {
  const movieArray = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre === "Horror") {
      movieArray.push(movies[i]);
    }
  }
  return movieArray;
}

export function getSaleArray(movies) {
  const movieArray = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].onSale) {
      movieArray.push(movies[i]);
    }
  }
  return movieArray;
}

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
