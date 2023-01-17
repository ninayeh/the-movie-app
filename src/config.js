// To se the latest configuration fetch it from https://api.themoviedb.org/3/configuration?api_key=019e8f375549e0bbd4a4191862ebc88f
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.REACT_APP_API_KEY;

// Images
const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/';

// Images Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280'

export {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE
}