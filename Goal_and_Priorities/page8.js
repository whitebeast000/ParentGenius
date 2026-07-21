const thumb = document.getElementById("thumb");
const filled = document.querySelector(".filled");
const text = document.getElementById("scaleText");

let value = 4;

thumb.addEventListener("click",()=>{

    if(value<5){

        value++;

        const percent=value*20;

        thumb.style.left=percent+"%";

        filled.style.width=percent+"%";

        text.innerHTML="Scale "+value;
    }

});


