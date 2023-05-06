// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const imgGallary = galleryItems
  .map(
    img =>
      `
<li class="gallery__item">
   <a class="gallery__link" href=${img.original}>
      <img class="gallery__image" src=${img.preview} alt=${img.description} />
   </a>
</li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', imgGallary);

let lightbox = new SimpleLightbox('.gallery a', {
  /* options */ captionsData: 'alt',
  captionDelay: '250',
});

lightbox.on('show.simplelightbox');
