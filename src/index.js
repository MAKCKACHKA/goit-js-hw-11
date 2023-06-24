// import Notiflix from 'notiflix';
// import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
// import SlimSelect from 'slim-select';
// function newSelect() {
//   new SlimSelect({
//     select: document.querySelector('.breed-select'),
//   });
// }

// const select = document.querySelector('.breed-select');
// const loader = document.querySelector('.loader');
// const catInfo = document.querySelector('.cat-info');
// const error = document.querySelector('.error');
// loader.textContent = '';
// error.textContent = '';

// select.classList.add('visually-hidden');
// function showLoader() {
//   loader.classList.remove('visually-hidden');
//   catInfo.classList.add('visually-hidden');
// }
// function hideLoader() {
//   loader.classList.add('visually-hidden');
// }

// select.innerHTML = '<option value= Tap here >Tap here</option>';
// function createOptions(data) {
//   data.map(elem => {
//     select.innerHTML += `<option value="${elem.reference_image_id}">${elem.name}</option>`;
//   });
//   select.classList.remove('visually-hidden');
//   hideLoader();
// }
// function createCatInfo(data) {
//   catInfo.innerHTML = `<img class="image" src="${data.url}" ><div class = "text-holder"><h1>${data.breeds[0].name}</h1><p>${data.breeds[0].description}</p><b>Temperament: </b><span> ${data.breeds[0].temperament}</span></div>`;
//   catInfo.classList.remove('visually-hidden');
//   hideLoader();
//   console.log(data);
// }

// fetchBreeds().then(createOptions).then(newSelect).catch(fetchError);
// select.addEventListener('change', event => {
//   showLoader();
//   catInfo.classList.add('visually-hidden');
//   fetchCatByBreed(event.target.value).then(createCatInfo).catch(fetchError);
//   console.log(event.target.value);
// });

// function fetchError() {
//   if (select.value === 'Tap') {
//     Notiflix.Notify.failure('Please, choose a breed');
//   } else {
//     Notiflix.Notify.failure(
//       'Oops! Something went wrong! Try reloading the page!'
//     );
//   }
// }
