const url = "https://api.noroff.dev/api/v1/square-eyes";

export async function makeApiCall() {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Could not fetch API");
  }
  const results = await response.json();

  const data = results;

  return data;
}
