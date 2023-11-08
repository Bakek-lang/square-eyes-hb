const url = "https://api.noroff.dev/api/v1/square-eyes";

export async function makeApiCall() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Response not ok");
    }
    const results = await response.json();

    const data = results;

    return data;
  } catch (e) {
    console.error("API call failed: ", e);
    throw e;
  }
}
