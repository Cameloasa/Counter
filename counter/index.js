//counter program

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

// Update the displayed count
function updateDisplay() {
    countLabel.textContent = count;
}

// Increase the count
increaseBtn.addEventListener("click", () => {
    count++;
    updateDisplay();
});

// Decrease the count
decreaseBtn.addEventListener("click", () => {
    count--;
    updateDisplay();
});

// Reset the count
resetBtn.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});

// Initialize the display
updateDisplay();
