// Make and export function that removes html characters from input fetched from api. security for XSS attacks

// Takes string as argument and replaces potentially harmful characters with their corresponding HTML entities. (semicolon part of standard notation for HTML entities)

// use this function when implementing DOMParse + string literals + DocumentFragment (maybe also use for titles, not sure yet)

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
    console.log("sanitizeURL works");
    return parsedURL.toString();
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
