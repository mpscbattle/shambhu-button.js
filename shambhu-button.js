const loadMoreBtn = document.getElementById('loadMoreBtn');
const hiddenBoxes = document.querySelectorAll('.test-box.hidden-box');
let currentlyShown = 0;
const boxesPerClick = 5;

function loadBoxes() {
  // Loop chalakar agle 5 hidden boxes ko show karein
  for (let i = 0; i < boxesPerClick; i++) {
    // Check karein ki hidden boxes bache hain ya nahi
    if (currentlyShown < hiddenBoxes.length) {
      // hidden-box class hatayen
      hiddenBoxes[currentlyShown].classList.remove('hidden-box');
      currentlyShown++;
    }
  }

  // Jab sabhi boxes load ho jayein, toh button ko hide kar dein
  if (currentlyShown >= hiddenBoxes.length) {
    loadMoreBtn.style.display = 'none';
  }
}

// Button click hone par loadBoxes function chalayen
loadMoreBtn.addEventListener('click', loadBoxes);
