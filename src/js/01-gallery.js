// // Add imports above this line
import { galleryItems } from './gallery-items';
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// // Change code below this line

const listRef = document.querySelector('.gallery');
const markup = galleryItems.map(({description, original, preview}) => {
return `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
`
}).join('');

listRef.insertAdjacentHTML('beforeend', markup);

const lightBox = new SimpleLightbox('.gallery a', ({
    captionsData: `alt`,
    captionPosition: 'bottom',
    captionDelay: 250
    }));

    console.log(galleryItems);

   