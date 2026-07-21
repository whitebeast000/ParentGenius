const ageSelect = document.getElementById("ageSelect");
const ageInput = document.getElementById("ageInput");

// Create ages 1-18
for (let i = 1; i <= 18; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    ageSelect.appendChild(option);
}

// Show first age by default
ageSelect.selectedIndex = 0;
ageInput.value = ageSelect.value;

// Whenever user selects another age
ageSelect.addEventListener("change", function () {
    ageInput.value = ageSelect.value;
});