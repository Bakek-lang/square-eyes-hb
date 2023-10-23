// Make and export function that removes html characters from input fetched from api. security for XSS attacks

// Takes string as argument and replaces potentially harmful characters with their corresponding HTML entities. (semicolon part of standard notation for HTML entities)

// use this function when implementing DOMParse + string literals + DocumentFragment (maybe also use for titles, not sure yet)

export function sanitizeHTML(input) {
  const string = String(input);

  return string
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Comment for tomorrow: Remember to put in all code from below the function on product.js file, then make functions and add those functions into the renderProductHTML before const products start. Because right now results is an array, so it will cause errors with the sanitizeHTML function that expects a string. Fix it so results will be the strings, and not all movies by adding the functions in product.js. Also fix the rest of the code with DocumentFragment. Maybe make new js file that only updates the product page, so not everything is in index. think about it at least. You got this, lets go. Do cart and lvl 2 stuff after this is finished. Its better to get this right than to fall back to document.createElement as that is a bit confusing to read and this method is better performance ways and you dont want the sanitizeHTML function to go to waste, because its a genius tool and just fascinating work.
