import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

galleryRef.innerHTML = createGalleryMarkup(galleryItems);
galleryRef.addEventListener('click', onGalleryImgClick);

function createGalleryMarkup(arr) {
  return arr.map(item => 
    `<li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
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

  e.preventDefault();

  if (e.currentTarget === e.target) {
    return;
  }

  const image = e.target.dataset.source;

  const instance = basicLightbox.create(`<img src="${image}"></div>`);
  instance.show();

  galleryRef.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      instance.close();
    }
  });
};