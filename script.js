function openCard() {
  const card = document.getElementById("card");
  card.style.display = "flex";
  setTimeout(() => {
    card.classList.add("open");
  }, 10); // Delay to allow transition
}

function closeCard(event) {
  event.stopPropagation();
  const card = document.getElementById("card");
  card.classList.remove("open");
  setTimeout(() => {
    card.style.display = "none";
  }, 300); // Match transition duration
}
