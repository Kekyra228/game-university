const pathPoints = [
  { x: 340, y: 420 },
  { x: 270, y: 470 },
  { x: 180, y: 480 },
  { x: 100, y: 460 },
  { x: 110, y: 400 },
  { x: 123, y: 330 },
  { x: 190, y: 300 },
];

let currentPointIndex = 0;

function moveCharacter() {
  if (currentPointIndex < pathPoints.length) {
    const character = document.getElementById("character");

    const nextPoint = pathPoints[currentPointIndex];

    character.style.left = nextPoint.x + "px";
    character.style.top = nextPoint.y + "px";

    currentPointIndex++;
  }
}

document.getElementById("moveButton").addEventListener("click", moveCharacter);

let currentIndex = 0;
const itemsToShow = 5;
const sliderTrack = document.querySelector(".slider-track");
const sliderItems = document.querySelectorAll(".slider-item");

document.getElementById("leftButton").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});

document.getElementById("rightButton").addEventListener("click", () => {
  if (currentIndex < sliderItems.length - itemsToShow) {
    currentIndex++;
    updateSliderPosition();
  }
});

function updateSliderPosition() {
  const itemWidth = sliderItems[0].offsetWidth;
  const itemMargin = parseInt(
    window.getComputedStyle(sliderItems[0]).marginRight
  );
  const totalItemWidth = itemWidth + itemMargin;

  sliderTrack.style.transform = `translateX(-${
    currentIndex * totalItemWidth
  }px)`;
}

const ratingButton = document.getElementById("ratingButton");
const ratingModal = document.getElementById("ratingModal");
const closeRating = document.getElementById("closeRating");
const ratingTable = document.querySelector(".rating-list table");

function createRatingRow(place, player, score, isFriend) {
  const row = document.createElement("tr");

  const placeCell = document.createElement("td");
  const nameCell = document.createElement("td");
  const scoreCell = document.createElement("td");

  placeCell.textContent = place;
  nameCell.textContent = `${player.name} ${player.lastName}`;
  scoreCell.textContent = score;

  if (isFriend) {
    row.classList.add("friend");
  }

  row.appendChild(placeCell);
  row.appendChild(nameCell);
  row.appendChild(scoreCell);

  return row;
}

function populateRatingTable() {
  ratingTable.innerHTML =
    "<tr><th>Место</th><th>Имя Фамилия</th><th>Опыт</th></tr>";

  data.rating.forEach((player, index) => {
    const isFriend = data.friends.some((friend) => friend.id === player.id);

    const row = createRatingRow(index + 1, player, player.id, isFriend);
    ratingTable.appendChild(row);
  });
}

ratingButton.addEventListener("click", () => {
  populateRatingTable();
  ratingModal.classList.add("show");
});

closeRating.addEventListener("click", () => {
  ratingModal.classList.remove("show");
});
