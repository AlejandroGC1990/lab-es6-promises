// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync

/*  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
*/


// Iteration 1 - using callbacks

let counter = 0;
function callback(step) {
  
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
  counter++;
  getInstruction ('mashedPotatoes', counter, callback, console.log);
  document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");

  if(counter >= 5) {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${'Mashed potatoes are ready!'}</li>`;
  } 
}

getInstruction ('mashedPotatoes', counter, callback);

// Iteration 2 - using promises

function stepFood (food, step) {
  document.querySelector(`#${food}`).innerHTML += `<li>${step}</li>`;
  document.querySelector(`#${food}Img`).removeAttribute("hidden");
}

obtainInstruction('steak', counter)
  .then(() => obtainInstruction('steak', 0).then((counter) => stepFood('steak', counter)))
  .then(() => obtainInstruction('steak', 1).then((counter) => stepFood('steak', counter)))
  .then(() => obtainInstruction('steak', 2).then((counter) => stepFood('steak', counter)))
  .then(() => obtainInstruction('steak', 3).then((counter) => stepFood('steak', counter)))
  .then(() => obtainInstruction('steak', 4).then((counter) => stepFood('steak', counter)))
  .then(() => obtainInstruction('steak', 5).then((counter) => stepFood('steak', counter)))
  .then(() => obtainInstruction('steak', 6).then((counter) => stepFood('steak', counter)))
  .then(() => obtainInstruction('steak', 7).then((counter) => stepFood('steak', counter)))
  .finally(() => document.querySelector("#steak").innerHTML += `<li>${"Stake is ready!"}</li>`)


  // Iteration 3 using async/await
async function cookbroccoli() {
 stepFood('broccoli', await obtainInstruction('broccoli', 0));
 stepFood('broccoli', await obtainInstruction('broccoli', 1));
 stepFood('broccoli', await obtainInstruction('broccoli', 2));
 stepFood('broccoli', await obtainInstruction('broccoli', 3));
 stepFood('broccoli', await obtainInstruction('broccoli', 4));
 stepFood('broccoli', await obtainInstruction('broccoli', 5));
 stepFood('broccoli', await obtainInstruction('broccoli', 6));
 stepFood('broccoli', "Broccoli is ready!");
}
 
cookbroccoli();

// Bonus 2 - Promise all
stepSproutsArray = [
  obtainInstruction('brusselsSprouts', 0),
  obtainInstruction('brusselsSprouts', 1),
  obtainInstruction('brusselsSprouts', 2),
  obtainInstruction('brusselsSprouts', 3),
  obtainInstruction('brusselsSprouts', 4),
  obtainInstruction('brusselsSprouts', 5),
  obtainInstruction('brusselsSprouts', 6),
  obtainInstruction('brusselsSprouts', 7),  
]

Promise.all([...stepSproutsArray])
  .then((step) => {step.forEach((step) => document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`)})
  .finally(() => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${"Brussels are ready!"}</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  });