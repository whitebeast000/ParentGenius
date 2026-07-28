
const popup = document.querySelector(".popup")
console.log(popup)

document.querySelector('#next').addEventListener('click',
function ()
    {
        popup.style.display  = "block";
         
        document.querySelector(".brand").style.filter = "blur(5px)";
        document.querySelector(".container").style.filter = "blur(5px)";
        document.querySelector("footer").style.filter = "blur(5px)";

    }

);

const popup2 = document.querySelector(".popup2")
console.log(popup2)

document.querySelector('#to_rate_page').addEventListener('click',
function ()
    {
        popup2.style.display  = "block";
        popup2.style.justifyContent = "center";
        popup.style.display  = "none";
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

