// const url = "https://api.noroff.dev/api/v1/square-eyes";
const url =
  "https://square-eyes.henrikbakke.no/wp-json/wc/store/products?per_page=20";

export async function makeApiCall() {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Could not fetch API");
  }
  const results = await response.json();

  const data = results;
  console.log(data);

  return data;
}
