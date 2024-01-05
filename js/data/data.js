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
    if (movies[i].categories[0].name === "Comedy") {
      movieArray.push(movies[i]);
    }
  }
  return movieArray;
}

export function getActionArray(movies) {
  const movieArray = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].categories[0].name === "Action") {
      movieArray.push(movies[i]);
    }
  }
  return movieArray;
}

export function getKidsArray(movies) {
  const movieArray = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].categories[0].name === "Kids") {
      movieArray.push(movies[i]);
    }
  }
  console.log(movieArray);
  return movieArray;
}

export function getHorrorArray(movies) {
  const movieArray = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].categories[0].name === "Horror") {
      movieArray.push(movies[i]);
    }
  }
  return movieArray;
}

export function getSaleArray(movies) {
  const movieArray = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].on_sale) {
      movieArray.push(movies[i]);
    }
  }
  console.log(movieArray);
  return movieArray;
}

export function getFavoritesArray(movies) {
  const movieArray = [];
  for (let i = 0; i < 4; i++) {
    if (movies[i]) {
      movieArray.push(movies[i]);
    }
  }
  movieArray.shift();
  console.log(movieArray);
  return movieArray;
}
