const commentPopupContainer = document.querySelector('.comment-popup-container');
const closeIcon = document.querySelector('.close-icon');
// const commentButton = document.querySelector('.btn-comment');

export const showComments = async (
  id, image, name, language, genres, rating, schedule, network, summary
  ) => {
    commentPopupContainer.innerHTML = '';

  commentPopupContainer.innerHTML = `
  <div class="show-${id}">
    <img src="${image.original}" class="show-image" alt="${name}">
    <div class="close-icon">X</div>
  </div>
  <h2 class="show-title">${name}</h2>
  <div class="show-specs">
    <h3>Language: ${language}</h3>
    <h3>Genres: ${genres.join(', ')}</h3>
    <h3>Rating: ${rating.average}</h3>
    <h3>Schedule: ${schedule.time}</h3>
    <h3>Network: ${network.name}</h3>
    <p>${summary}</p>
  </div>
  `;
};

export const commentPopup = () => {
  commentButton.forEach((item) => {
    item.addEventListener('click', () => {
      commentPopupContainer.classList.remove('hidden');
    })
  })
}

export const closeFunc = () => {
  closeIcon.addEventListener('click', () => {
    commentPopupContainer.classList.add('hidden');
  });
};

