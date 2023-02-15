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

// export const commentPopup = () => {
//   commentButton.forEach((item) => {
//     item.addEventListener('click', () => {
//       commentPopupContainer.classList.remove('hidden');
//     })
//   })
// }

export const closeFunc = () => {
  closeIcon.addEventListener('click', () => {
    commentPopupContainer.classList.add('hidden');
  });
};


//! ------------------------------------------------------------
// const popupContainer = document.querySelector('.popup-display');

// window.addEventListener('load', async () => {
//   const shows = await getMovieData();
//   renderHomePage(shows);
//   document.addEventListener('click', async (e) => {
//     const button = e.target.closest('.comments-btn');
//     const closeButton = e.target.closest('.close-icon');

//     if (button) {
//       const selectedShow = shows.filter(
//         (it) => it.id.toString() === button.id.toString(),
//       )[0];
//       const {
//         id, image, name, language, genres, rating, schedule,
//       } = selectedShow;
//       showContainer.style.display = 'none';
//       popupContainer.style.display = 'block';
//       renderPopup(id, image, name, language, genres, rating, schedule);
//     }

//     if (closeButton) {
//       popupContainer.style.display = 'none';
//       showContainer.style.display = 'grid';
//       renderHomePage(shows);
//     }
//   });

  // getLike();
//});

// const modal = document.querySelector('.popup-window');
// const overlay = document.querySelector('.overlay');
// const openModalBtn1 = document.querySelector('.project-button1');

// // Opening 1st Card //
// const openModal1 = function () {
//   overlay.classList.remove('hidden');
//   modal.style.display = 'flex';

//   // Populating cards with object items //
//   popupsProjectImage.src = projects[0].image;
//   popupsProjectTitle.innerHTML = projects[0].name;
//   popupsProjectDesktop.innerHTML = projects[0].content1;
//   popupsProjectMobile.innerHTML = projects[0].content2;
//   tagsUp.innerHTML = projects[0].tags1;
//   tagsDown.innerHTML = projects[0].tags2;
//   document.documentElement.scrollTop = 0;
// };

// openModalBtn1.addEventListener('click', openModal1);