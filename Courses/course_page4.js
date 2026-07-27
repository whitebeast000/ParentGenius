const popup = document.querySelector(".popup")
console.log(popup)

document.querySelector('#to_rate_page').addEventListener('click',
function ()
    {
        popup.style.display  = "block";
  
        document.querySelector(".brand").style.filter = "blur(5px)";
        document.querySelector(".container").style.filter = "blur(5px)";
        document.querySelector("footer").style.filter = "blur(5px)";

    }

);


document.querySelector('#end').addEventListener
('click', 
    function()
        {
            window.location.reload();
        }
);



const feedbackTxt = document.getElementById("feedback-txt");
const charCount = document.getElementById("char-count");

const maxChars = 250;

feedbackTxt.addEventListener("input", function () {
    const remaining = maxChars - this.value.length;

    charCount.textContent =
        `${remaining} ${remaining === 1 ? "Character" : "Characters"} Remaining`;
});