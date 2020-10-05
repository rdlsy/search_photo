import config from './config.js';

const { API_ENDPOINT, KEY } = config;

let per_page = 20;
let tagmode = 'any';
let privacy_filter = 5;
let format = 'json';
let nojsoncallback = 1;

const request = async (url) => {
  try {
    const result = await fetch(url);
    return result.json();
  } catch (error) {
    alert(error.msg);
    return { data: null };
  }
}

const api = {
  fetchData: (keyword, page) => {
    return request(`${API_ENDPOINT}&api_key=${KEY}&per_page=${per_page}&tagmode=${tagmode}&privacy_filter=${privacy_filter}&format=${format}&nojsoncallback=${nojsoncallback}&tags=${keyword}&page=${page}`);
  }
}

export default api;