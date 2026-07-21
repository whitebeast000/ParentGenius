const totalDays = 30;
let currentDay = 0;

function updateChallengeProgress(day){

    currentDay = day;

    const percentage = (day / totalDays) * 100;

    document.getElementById("progressFill").style.width = percentage + "%";

    document.getElementById("dayText").textContent =
        `Day ${day} of ${totalDays}`;

    document.getElementById("percentText").textContent =
        `${Math.round(percentage)} % Complete`;
}

// Initial state
// updateChallengeProgress(0);

// Example:
// updateChallengeProgress(5);
updateChallengeProgress(18);
// updateChallengeProgress(30);



// Highlight clicked day

const days = document.querySelectorAll(".day");

days.forEach(day => {

    day.addEventListener("click", () => {

        // Remove previous selection
        document.querySelectorAll(".selected").forEach(date => {
            date.classList.remove("selected");
        });

        document.querySelectorAll(".dot").forEach(dot => {
            dot.remove();
        });

        // Current clicked date
        const currentDate = day.querySelector(".date");

        if(currentDate){

            currentDate.classList.add("selected");

            const dot = document.createElement("span");
            dot.className = "dot";

            day.appendChild(dot);
        }

    });

});
