import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '37857814-b0d9639b296a6cf0b457a26a6';

export const getImages = async (q, page, perPage) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    );

    return response;
  } catch (error) {
    throw new Error('Error fetching images from Pixabay API');
  }
};
// const response = await axios.get(
//   `${BASE_URL}?key=${API_KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
// );
