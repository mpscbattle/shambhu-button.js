const allBoxes = document.querySelectorAll('.test-box');
const loadMoreBtn = document.getElementById('loadMoreBtn');

let visibleCount = 5; // Pehle 5 dikhane hain

function showInitialBoxes() {
  allBoxes.forEach((box, index) => {
    if (index < visibleCount) {
      box.style.display = 'block'; // First 5 visible
    }
  });
}

function loadMoreBoxes() {
  let newVisibleCount = visibleCount + 5;
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
