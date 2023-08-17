import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

let ID = 0;

const galleryRef = document.querySelector('.gallery');

galleryRef.innerHTML = createGalleryMarkup(galleryItems);

galleryRef.addEventListener('click', onGalleryImgClick);

function createGalleryMarkup(arr) {
  return arr.map(item => 
    `<li class="gallery__item">
      <a class="gallery__link">
        <img
          class="gallery__image"
          src="${item.preview}" 
          data-source="${item.original}"
          alt="${item.description}">
      </a>
    </li>`
  ).join('');
};

function onGalleryImgClick(e) {

  if (e.currentTarget === e.target) {
    return;
  }

  const image = e.target.dataset.source;

  const instance = basicLightbox.create(
    `<div class="modal"><img width="100%" src="${image}"></div>`, {
      onShow: (newInst) => {
        newInst.element().addEventListener('click', () => instance.close());
      },
    }
  );
  
  instance.show();
}