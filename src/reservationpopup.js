const reservationPopupContainer = document.querySelector(
  "reservation-popup-container"
);
const closeIcon = document.querySelector(".close-icon");
const reservationButton = document.querySelector(".comment-btn");

export const openReservation = async (
  id,
  image,
  name,
  language,
  genres,
  rating,
  schedule
) => {
  reservationPopupContainer.innerHTML = `
  <div class="show-${id}">
    <img src="${image.original}" class="show-image" alt="${name}">
    <div class="close-icon">X</div>
  </div>
  <h2 class="show-title">${name}</h2>
  <div class="show-specs">
    <h3>Language: ${language}</h3>
    <h3>Genres: ${genres.join(", ")}</h3>
    <h3>Rating: ${rating.average}</h3>
    <h3>Schedule: ${schedule.time}</h3>
    <h3>Network: ${network.name}</h3>
    <p>${summary}</p>
  </div>
  `;
};

export const reservationPopup = () => {
  reservationButton.forEach((item) => {
    item.addEventListener("click", () => {
      reservationPopupContainer.classList.remove("hidden");
    });
  });
};

export const closeFunc = () => {
  closeIcon.addEventListener("click", () => {
    reservationPopupContainer.classList.add("hidden");
  });
};
