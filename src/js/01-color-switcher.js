function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
stop.disabled = true;
let timerId = null;



start.addEventListener("click", () => {
    start.disabled = true;
    stop.disabled = false;
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
    timerId = setInterval(() => {
        const color = getRandomHexColor();
        document.body.style.backgroundColor = color;
        console.log(color);
    }, 1000)
  });

stop.addEventListener("click", () => {
    start.disabled = false;
    stop.disabled = true;
    clearInterval(timerId);
});

