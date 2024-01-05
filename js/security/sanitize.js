// function for sanitizing HTMLs
export function sanitizeHTML(input) {
  const string = String(input);

  return string
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// function for sanitizing URL's
export function sanitizeURL(input) {
  try {
    const parsedURL = new URL(input);

    const forbiddenProtocols = ["javascript:", "data:", "vbscript:", "blob:"];

    if (forbiddenProtocols.includes(parsedURL.protocol)) {
      throw new Error("Forbidden protocol detected");
    }
    return parsedURL.toString();
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
// get textContent from values with html tags
export function stripHTML(input) {
  let tempDiv = document.createElement("div");
  tempDiv.innerHTML = input;
  let strippedText = tempDiv.textContent;

  return sanitizeHTML(strippedText);
}
