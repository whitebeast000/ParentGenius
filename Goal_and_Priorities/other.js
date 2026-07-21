const otherCheckbox = document.getElementById("other");
const otherBox = document.getElementById("otherBox");
const otherText = document.getElementById("otherText");

// Show/Hide textarea when "Other" checkbox is checked
otherCheckbox.addEventListener("change", function () {

    if (this.checked) {
        otherBox.style.display = "block";
        otherText.focus();
    } else {
        otherBox.style.display = "none";
        otherText.value = "";
    }

});