import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const input = document.querySelector("#datetime-picker");
const start = document.querySelector("button[data-start]");
const days = document.querySelector("span[data-days]");
const hours = document.querySelector("span[data-hours]");
const minutes = document.querySelector("span[data-minutes]");
const seconds = document.querySelector("span[data-seconds]");
let startDate;
let timerId = null;
start.disabled = true; 

// Setting flatpickr -----------

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const today = new Date();
        const selectedDate = selectedDates[0];
        if ( today >= selectedDate ) {
            Notiflix.Notify.failure("Please choose a date in the future");
            start.disabled = true;
        } else {
            start.disabled = false;
        }
        startDate = selectedDate;
    },
  };

flatpickr(input, options);

// Setting start button --------------

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

function addLeadingZero(value) {
    let text = value.toString();
    return text.padStart(2,"0");
}

const onClick = () => {
    start.disabled = true;

    timerId = setInterval(() => {
        const today = new Date();
        const ms =  startDate - today;
        const dateDiference = convertMs(ms);
        console.log(dateDiference);
        
        days.textContent = addLeadingZero(dateDiference.days);
        hours.textContent = addLeadingZero(dateDiference.hours);
        minutes.textContent = addLeadingZero(dateDiference.minutes);
        seconds.textContent = addLeadingZero(dateDiference.seconds);

        if ( ms <= 0 ) {
            clearInterval(timerId);
            days.textContent = "00";
            hours.textContent = "00";
            minutes.textContent = "00";
            seconds.textContent = "00";
        }

    }, 1000);
};

start.addEventListener("click", onClick);


// Setting Style ------

const timer = document.querySelector(".timer");
timer.style.marginTop = "10px";
timer.style.display = "flex";
timer.style.fontFamily = " 'Courier new', Courier";

const fields = document.querySelectorAll(".field");
/*for (let field of fields) {
    field.style.marginRight = "15px";
    field.style.display = "flex";
    field.style.flexDirection = "column";
    field.style.textAlign = "center";
};*/
fields.forEach(field => {
    field.style.marginRight = "15px";
    field.style.display = "flex";
    field.style.flexDirection = "column";
    field.style.textAlign = "center";
});

const values = document.querySelectorAll(".value");
/*for (let value of values) {

};*/
values.forEach(value => {
    value.style.fontSize = "30px";
    value.style.height = "40px";
})


const labels = document.querySelectorAll(".label");
/*for (let label of labels) {
    label.style.fontSize = "12px";
    label.style.textTransform = "uppercase";
};*/
labels.forEach(label => {
    label.style.fontSize = "12px";
    label.style.textTransform = "uppercase";
})




