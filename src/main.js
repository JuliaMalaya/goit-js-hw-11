import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.querySelector('.search-form');
const galleryList = document.querySelector('.gallery-list');
const loader = document.querySelector('#loader')
searchForm.addEventListener('submit', searchImages);

let imageViewer;

function searchImages(event) {
    event.preventDefault();
  galleryList.innerHTML = '';
  loader.style.display = 'block';
  const searchInput = document.querySelector('.search-input');
  const searchValue = searchInput.value.trim();
     if (searchValue === '') {
            iziToast.error({
            title: '',
            message: 'Please enter a search query!',
            position: 'topRight'
        });
        loader.style.display = 'none';
        return; 
    }
  fetchImages(searchValue)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: '',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight'
        });
      }
      galleryList.innerHTML = createMarkup(data.hits);
      imageViewer = new SimpleLightbox('.gallery-link', {
        captionDelay: 250,
        captionsData: 'alt',
      });
      imageViewer.refresh();
    })
    .catch(error => {
      iziToast.error({
        title: '',
        message: error.message,
        position: 'topRight'
      });
    })
    .finally(() => {
      searchForm.reset();
      loader.style.display = 'none';
    });
};

function fetchImages(query) {
    const API_KEY = '42343385-eb6c059581ee4f8bb4ee68ac0';
    const BASE_URL = 'https://pixabay.com/api/';

    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: 'horizontal',
        safesearch: true,
    });

    return fetch(`${BASE_URL}?${params}`)
        .then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
            }
            return response.json();
    })
};
function createMarkup(arr) {
  return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
  <li class="gallery-item">
  <a href="${largeImageURL}" class="gallery-link">
      <img src="${webformatURL}" 
           alt="${tags}" 
           class="gallery-image"
           loading="lazy" 
           width="250"
           height="250">
      <div>
        <div class="image-item">Likes <span class="image-elem">${likes}</span></div>
        <div class="image-item">Views <span class="image-elem">${views}</span></div>
        <div class="image-item">Comments <span class="image-elem">${comments}</span></div>
        <div class="image-item">Downloads <span class="image-elem">${downloads}</span></div>
  </div>
</a>
</li>
`).join('');
};