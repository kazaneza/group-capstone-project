import './style.css';
// import { showComments, commentPopup, closePopup } from './modules/commentPopup.js';
import { showComments } from './modules/commentPopup.js';
import getMovies from './modules/api.js';
import renderShows from './modules/display';

const startApp = async () => {
  const shows = await getMovies();
  renderShows(shows);
  showComments();
};

startApp();

const commentButton = document.querySelector('.btn-comment');

const commentPopup = () => {
  commentButton.forEach((item) => {
    item.addEventListener('click', () => {
      commentPopupContainer.classList.remove('hidden');
      showComments();
    })
  })
}