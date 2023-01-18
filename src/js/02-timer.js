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
let timer = null;
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
    text = value.toString();
    return text.padStart(2,"0");
}

const onClick = () => {
    start.disabled = true;

    timer = setInterval(() => {
        const today = new Date();
        const ms =  startDate.getTime() - today.getTime();
        const dateDiference = convertMs(ms);
        
        days.textContent = addLeadingZero(dateDiference.days);
        hours.textContent = addLeadingZero(dateDiference.hours);
        minutes.textContent = addLeadingZero(dateDiference.minutes);
        seconds.textContent = addLeadingZero(dateDiference.seconds);
    }, 1000);
};

start.addEventListener("click", onClick);
