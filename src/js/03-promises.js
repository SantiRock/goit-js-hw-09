import Notiflix from 'notiflix';

const delayInput = document.querySelector("input[name=delay]");
const stepInput = document.querySelector("input[name=step]");
const amountInput = document.querySelector("input[name=amount]");
const submit = document.querySelector("button");

function createPromise(position, delay) {
  let promise = new Promise ((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay); 
    })
  
  promise
  .then(value => {
    Notiflix.Notify.success(value);
  })
  .catch(error => {
    Notiflix.Notify.failure(error);
  });
}

submit.addEventListener("click", (event) => {
  event.preventDefault();
  const firstDelay = Number.parseInt(delayInput.value);
  const step = Number.parseInt(stepInput.value);
  const amount = Number.parseInt(amountInput.value);
  let stepp = 0;

  for ( let i = 1; i <= amount; i++ ) {
    let d = firstDelay + stepp; 
    createPromise(i, d);
    stepp += step;
    console.log(d);
    }
  } 
);

