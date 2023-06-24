const BASE_URL = 'https://api.thecatapi.com/v1/';
const ENDPOINT_BREEDS = 'breeds?';
const ENDPOINT_IMAGES = 'images';
const API_KEY =
  'api_key=live_4b3F3KdkldFuf312f1pWe7ecRdaWCE6akPaogVsbyngmugC9hQOoJKqCnRRpS8GE';

function fetchBreeds() {
  return fetch(`${BASE_URL}${ENDPOINT_BREEDS}${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
//api.thecatapi.com/v1/images/search?breed_ids=ідентифікатор_породи
function fetchCatByBreed(breedId) {
  return fetch(`${BASE_URL}${ENDPOINT_IMAGES}/${breedId}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
export { fetchBreeds, fetchCatByBreed };
