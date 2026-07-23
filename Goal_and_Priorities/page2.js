function saveChildren() {

    const count = document.getElementById("childrenCount").value;

    if (count == "" || count <= 0) {
        alert("Please enter number of children");
        return;
    }

    localStorage.setItem("childrenCount", count);

    window.location.href = "page3.html";
}