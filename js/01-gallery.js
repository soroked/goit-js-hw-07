import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

// створюю глобальну змінну для доступу до неї в колбеці onOpenImgEscClick
let instance;

galleryRef.innerHTML = createGalleryMarkup(galleryItems);
galleryRef.addEventListener('click', onGalleryImgClick);

function onOpenImgEscClick(e) {
  if (e.code === 'Escape') {
    instance.close();
    galleryRef.removeEventListener('keydown', onOpenImgEscClick);
  };
};

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

  instance = basicLightbox.create(`<img src="${image}"></div>`);
  instance.show();

  // в onOpenImgEscClick після натискання на Escape знімається слухач події
  galleryRef.addEventListener('keydown', onOpenImgEscClick);
};