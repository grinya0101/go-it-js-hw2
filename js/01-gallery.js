import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const container = document.querySelector(".gallery");
createGelaryCard(galleryItems);

container.addEventListener("click", onConteinerClick);

function onConteinerClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
`);

  instance.show();
}

function createGelaryCard(imgs) {
  const marcup = imgs
    .map(({ original, preview }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="Image description"
          />
        </a>
      </div> `;
    })
    .join("");

  container.insertAdjacentHTML("beforeend", marcup);
}
