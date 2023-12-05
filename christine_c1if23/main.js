let body = document.body;

function turnOnText() {
  body.classList.toggle("text");
  button.classList.toggle("buttonOn");
  
}

let button = document.querySelector(".button");
button.addEventListener("click", turnOnText);

