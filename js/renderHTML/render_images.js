const container = document.querySelector(".products");

export function renderImages(movie) {
  for (let i = 0; i < 3; i++) {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("product");

    const imageATag = document.createElement("a");
    imageATag.href = `product.html?id=${movie[i].id}`;
    imageContainer.appendChild(imageATag);

    const imageImage = document.createElement("img");
    imageImage.src = movie[i].image;
    imageImage.alt = `Movie cover for ${movie[i].title}`;
    imageATag.appendChild(imageImage);
    container.appendChild(imageContainer);
  }
}
