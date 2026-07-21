


const popup= document.querySelector(".popup")
console.log(popup)

document.querySelector('#main-section-btn').addEventListener('click',
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
