const allBoxes = document.querySelectorAll('.test-box');
const loadMoreBtn = document.getElementById('loadMoreBtn');

let visibleCount = 25; // Pehle 25 dikhane hain

function showInitialBoxes() {
  allBoxes.forEach((box, index) => {
    if (index < visibleCount) {
      box.style.display = 'block'; // First 25 visible
    }
  });
}

function loadMoreBoxes() {
  let newVisibleCount = visibleCount + 25;
  allBoxes.forEach((box, index) => {
    if (index < newVisibleCount) {
      box.style.display = 'block';
    }
  });
  visibleCount = newVisibleCount;

  if (visibleCount >= allBoxes.length) {
    loadMoreBtn.style.display = 'none';
  }
}

showInitialBoxes();
loadMoreBtn.addEventListener('click', loadMoreBoxes);
