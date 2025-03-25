// Oskari Järvinen

dayjs.extend(dayjs_plugin_duration);

let countdown;
let remainingTime;
var secret = new Audio("secret.mp3")

// Assigning document items to variables, for easier modifying
const daysDisplay = document.getElementById("daysDisplay");
const hoursDisplay = document.getElementById("hoursDisplay");
const minutesDisplay = document.getElementById("minutesDisplay");
const secondsDisplay = document.getElementById("secondsDisplay");
const yearInput = document.getElementById("yearInput");
const monthInput = document.getElementById("monthInput");
const dayInput = document.getElementById("dayInput");
const hourInput = document.getElementById("hourInput");
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");

// Populate year selector 10 years ahead
function populateYears() {
    const currentYear = dayjs().year();
    for (let i = currentYear; i <= currentYear + 10; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        yearInput.appendChild(option);
    }
}

// populate days dropdown when year and month is selected
function populateDays() {
    // Clear existing days
    dayInput.innerHTML = "<option value=\"\">Day</option>";

    // Get selected year and month
    const year = yearInput.value;
    const month = monthInput.value;

    // Only populate if both year and month are selected
    if (year && month !== "") {
        const daysInMonth = dayjs(new Date(year, parseInt(month) + 1, 0)).daysInMonth();
        for (let i = 1; i <= daysInMonth; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.textContent = i.toString().padStart(2, '0');
            dayInput.appendChild(option);
        }
    }
}

// I'm lazy and don't want to flood my html file with options xD
function populateHours() {
    // Clear existing hours
    hourInput.innerHTML = "<option value=\"\">Hour</option>";

    for (let i = 0; i < 24; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i.toString().padStart(2, '0');
        hourInput.appendChild(option);
    }
}

function startCountdown() {
    const year = yearInput.value;
    const month = monthInput.value;
    const day = dayInput.value;
    const hour = hourInput.value;

    // Check that all fields are filled
    if (!year || month === "" || !day || hour === "") {
        alert("Please fill all the fields!");
        return;
    }
    
    // Create target date
    const targetDate = dayjs(new Date(year, month, day, hour, 0, 0));
    console.log(targetDate);
    const now = dayjs();
    console.log(now);

    // Check that target date is in the future
    if (!targetDate.isAfter(now)) {
        alert("Please select future date and time");
        return;
    }
    
    clearInterval(countdown);

    countdown = setInterval(() => {
        const now = dayjs();
        const duration = dayjs.duration(targetDate.diff(now));

        // Check if the cointdown is complete
        if (duration.asSeconds() <= 0) {
            clearInterval(countdown);
            secret.play();
            alert("Countdown finished!! 🎉🎉🎉")
            resetTimer();
            return;
        }

        //Update displays every second
        daysDisplay.textContent = String(Math.floor(duration.asDays())).padStart(2, "0");
        hoursDisplay.textContent = String(duration.hours()).padStart(2, "0");
        minutesDisplay.textContent = String(duration.minutes()).padStart(2, "0");
        secondsDisplay.textContent = String(duration.seconds()).padStart(2, "0");
    }, 500);
}

function resetTimer() {
    clearInterval(countdown);

    yearInput.selectedIndex = 0;
    monthInput.selectedIndex = 0;
    dayInput.innerHTML = "<option value=\"\">Day</option>";
    hourInput.innerHTML = "<option value=\"\">Hour</option>";

    daysDisplay.textContent = "00";
    hoursDisplay.textContent = "00";
    minutesDisplay.textContent = "00";
    secondsDisplay.textContent = "00";

    populateHours();
} 

function initialize() {
    populateYears();
    populateHours();

    // Event listeners for dynamic population
    yearInput.addEventListener('change', populateDays);
    monthInput.addEventListener('change', populateDays);
    yearInput.addEventListener('change', populateHours);
    monthInput.addEventListener('change', populateHours);

    // Event listeners for buttons
    submitBtn.addEventListener('click', startCountdown);
    resetBtn.addEventListener('click', resetTimer);
}

// add listeners for DOM
document.addEventListener("DOMContentLoaded", initialize);