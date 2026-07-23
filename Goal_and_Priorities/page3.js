// console.log(localStorage.getItem("childrenCount"));
// console.log(document.getElementById("childrenForm"));



// const ageSelect = document.getElementById("ageSelect");
// const ageInput = document.getElementById("ageInput");

// // Create ages 1-18
// for (let i = 1; i <= 18; i++) {
//     const option = document.createElement("option");
//     option.value = i;
//     option.textContent = i;
//     ageSelect.appendChild(option);
// }

// // // Show first age by default
// // ageSelect.selectedIndex = 0;
// // ageInput.value = ageSelect.value;

// // // Whenever user selects another age
// // ageSelect.addEventListener("change", function () {
// //     ageInput.value = ageSelect.value;
// // });



// const form = document.getElementById("childrenForm");

// const childrenCount = Number(localStorage.getItem("childrenCount"));

// for(let i = 1; i <= childrenCount; i++){

//     form.innerHTML += `
//         <fieldset>
//             <legend>Child ${i}</legend>
//             <input type="text" id="ageInput${i}" readonly>
//         </fieldset>
//     `;
// }


// =========================
// Get Elements
// =========================
const form = document.getElementById("childrenForm");
const ageSelect = document.getElementById("ageSelect");

// =========================
// Get Number of Children
// =========================
const childrenCount = Number(localStorage.getItem("childrenCount"));

// =========================
// Create Child Age Inputs
// =========================
for (let i = 1; i <= childrenCount; i++) {

    form.innerHTML += `
        <fieldset>
            <legend>Child ${i}</legend>
            <input
                type="text"
                id="ageInput${i}"
                class="ageInput"
                readonly
                placeholder="Select Age"
                onclick="selectChild(${i})"
            >
        </fieldset>
    `;
}

// =========================
// Create Age Wheel (1-18)
// =========================
for (let i = 1; i <= 18; i++) {

    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;

    ageSelect.appendChild(option);
}

// =========================
// Current Selected Child
// =========================
let currentChild = 1;

// =========================
// Function Called When Input Clicked
// =========================
function selectChild(childNo) {

    currentChild = childNo;
}

// Make function available to HTML
window.selectChild = selectChild;

// =========================
// Update Selected Child Age
// =========================
ageSelect.addEventListener("change", function () {

    document.getElementById("ageInput" + currentChild).value = ageSelect.value;

});