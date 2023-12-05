// If you use a <button> tag you can query the button directly. 
//Otherwise, you can use a CSS class on the element you click, and querySelector that class.
let button1 = document.querySelector(".button1");
let wrapper1 = document.querySelector(".wrapper1");

button1.addEventListener("click", function(event) {
  console.log(event, event.target);
  let newItem = document.createElement("div");
  newItem.classList.add("new-content");
  newItem.innerHTML = "I'm genuinely interested, please elaborate.";
  wrapper1.appendChild(newItem);
});

let button2 = document.querySelector(".button2");
let wrapper2 = document.querySelector(".wrapper2");

button2.addEventListener("click", function(event) {
  console.log(event, event.target);
  let newItem = document.createElement("div");
  newItem.classList.add("new-content");
  newItem.innerHTML = "Take your time";
  wrapper2.appendChild(newItem);
});

let button3 = document.querySelector(".button3");
let wrapper3 = document.querySelector(".wrapper3");

button3.addEventListener("click", function(event) {
  console.log(event, event.target);
  let newItem = document.createElement("div");
  newItem.classList.add("new-content");
  newItem.innerHTML = "Let’s hear it, keep the conversation going.";
  wrapper3.appendChild(newItem);
});

let button4 = document.querySelector(".button4");
let wrapper4 = document.querySelector(".wrapper4");

button4.addEventListener("click", function(event) {
  console.log(event, event.target);
  let newItem = document.createElement("div");
  newItem.classList.add("new-content");
  newItem.innerHTML = "I value your perspective, tell me more.";
  wrapper4.appendChild(newItem);
});
