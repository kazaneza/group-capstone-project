import './style.css';
import getData from "./modules/api.js";

const renderData = (data) => {
    const itemContainer = document.getElementById("item-container");
  
    data.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const image = document.createElement("img");
      image.src = item.imageUrl ? item.imageUrl : "https://via.placeholder.com/150";
      image.alt = item.title;
      card.appendChild(image);
  
      const title = document.createElement("h2");
      title.textContent = item.title;
      card.appendChild(title);
  
      const commentsButton = document.createElement("button");
      commentsButton.textContent = "Comments";
      card.appendChild(commentsButton);
  
      const reservationsButton = document.createElement("button");
      reservationsButton.textContent = "Reservations";
      card.appendChild(reservationsButton);
  
      itemContainer.appendChild(card);
    });
  };
  
  
getData()
  .then(data => {
    renderData(data);
  })
  .catch(error => {
    console.error(error);
  });

