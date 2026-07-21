const options = document.querySelectorAll(".payment-option");

options.forEach(option => {

    option.addEventListener("click", () => {

        options.forEach(item => {
            item.classList.remove("active");
        });

        option.classList.add("active");

        option.querySelector("input").checked = true;

    });

});




const popup= document.querySelector(".popup")
console.log(popup)

document.querySelector('#to_completion_page').addEventListener('click',
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
