// Get references to the modal and buttons
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

// Open the modal when the "Open Modal" button is clicked
openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close the modal when the "Close" button is clicked
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close the modal if the user clicks outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
