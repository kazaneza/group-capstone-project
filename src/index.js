import './style.css';
import { showComments, commentPopup, closePopup } from './commentPopup.js';
import getMovies from './modules/api.js';
import renderShows from './modules/display';

const startApp = async () => {
  const shows = await getMovies();
  renderShows(shows);
};

startApp();
