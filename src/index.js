import './style.css';
import getMovies from './modules/api.js';
import renderShows from './modules/display';

const startApp = async () => {
  const shows = await getMovies();
  renderShows(shows);
};

startApp();