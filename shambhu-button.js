const allBoxes = document.querySelectorAll('.test-box');
const loadMoreBtn = document.getElementById('loadMoreBtn');

let currentIndex = 0;
const boxesPerPage = 5;

// Sab hide karo pehle
allBoxes.forEach(box => box.classList.add('hidden'));

// Function to show next 5
function showNextBoxes() {
  let endIndex = currentIndex + boxesPerPage;

  for (let i = currentIndex; i < endIndex && i < allBoxes.length; i++) {
    allBoxes[i].classList.remove('hidden');
  }

  currentIndex += boxesPerPage;

  // Agar saare show ho gaye toh button hide karo
  if (currentIndex >= allBoxes.length) {
    loadMoreBtn.style.display = 'none';
  }
}

// Page load hone par pehle 5 dikhaye
showNextBoxes();

// Button click hone par next 5 dikhaye
loadMoreBtn.addEventListener('click', showNextBoxes);
