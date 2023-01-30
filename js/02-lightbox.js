import { galleryItems } from "./gallery-items.js";


const container = document.querySelector(".gallery");
createGelaryCard(galleryItems);

container.addEventListener("click", onConteinerClick);

function onConteinerClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
}

function createGelaryCard(imgs) {
  const marcup = imgs
    .map(({ original, preview, description }) => {
      return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");

  container.insertAdjacentHTML("beforeend", marcup);
  new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
}


