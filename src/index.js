import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
const lightbox = new SimpleLightbox('.image');
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createGalleryMarkup } from './js/markup';
import { getImages } from './js/api';

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const searchQuery = document.querySelector('.searchQuery');
let page = 1;
const perPage = 40;
let q = '';
let totalHits = 0;
loadMoreBtn.style.display = 'none';

searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  q = searchQuery.value;
  page = 1;
  totalHits = 0;
  gallery.innerHTML = '';
  searchQuery.value = '';
  loadMoreBtn.style.display = 'none';

  if (q === '') {
    Notiflix.Notify.warning('Please fill in the search field.');
    return;
  }

  try {
    const response = await getImages(q, page, perPage);
    const { data } = response;
    totalHits = data.totalHits;

    if (totalHits === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }

    gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(data.hits));
    loadMoreBtn.style.display = 'block';

    if (totalHits <= page * perPage) {
      loadMoreBtn.style.display = 'none';
    }

    Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
    lightbox.refresh();
  } catch (error) {
    console.log(error);
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;

  try {
    const response = await getImages(q, page, perPage);

    const { data } = response;

    gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(data.hits));

    if (page * perPage >= totalHits) {
      loadMoreBtn.style.display = 'none';
      Notiflix.Notify.info(
        "We're sorry, but you've reached the end of search results."
      );
    }

    lightbox.refresh();
  } catch (error) {
    console.log(error);
  }
});
