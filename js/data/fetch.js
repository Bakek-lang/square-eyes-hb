const url = "https://api.noroff.dev/api/v1/square-eyes";

export async function makeApiCall() {
  const response = await fetch(url);

  const results = await response.json();

  const data = results;

  return data;
}
