//* Exercice 1
const plus = document.querySelector("#click-btn");
plus.addEventListener("click", function () {
  const counter = document.querySelector("#click-counter");
  console.log("%cButton bien appuyé", "color:green;");
  counter.textContent = parseInt(counter.textContent) + 1;
});

//* Exercice 2
const input = document.querySelector("#text-input");
input.addEventListener("input", function (event) {
  const counter = document.querySelector("#char-count");
  const valueLenght = event.target.value.length;
  counter.textContent = valueLenght;
  counter.style.color = "lime";
});

//* Exercice 3
const hue = document.querySelector("#hue");
const saturation = document.querySelector("#saturation");
const lightness = document.querySelector("#lightness");
const hueValue = document.querySelector("#hue-value");
const saturationValue = document.querySelector("#saturation-value");
const lightnessValue = document.querySelector("#lightness-value");
const square = document.querySelector(".color-display");

//? nombre hue
let hueLength = 180;
let saturationLength = 50;
let lightnessLength = 50;
//& recup la valeur du range et le met dans la premiere valeur de hsl
hue.addEventListener("input", function (event) {
  hueLength = event.target.value;
  hueValue.textContent = hueLength;
  square.style.background = `hsl(${hueLength}, ${saturationLength}%, ${lightnessLength}%)`;
});
//& recup la valeur du range et le met dans la deuxieme valeur de hsl
//? nombre saturation
saturation.addEventListener("input", function (event) {
  saturationLength = event.target.value;
  saturationValue.textContent = saturationLength + "%";
  square.style.background = `hsl(${hueLength}, ${saturationLength}%, ${lightnessLength}%)`;
});
//& recup la valeur du range et le met dans la troisieme valeur de hsl
//? nombre lightness
lightness.addEventListener("input", function (event) {
  lightnessLength = event.target.value;
  lightnessValue.textContent = lightnessLength + "%";
  square.style.background = `hsl(${hueLength}, ${saturationLength}%, ${lightnessLength}%)`;
});

//* Exercice 4
const width = document.querySelector("#window-width");
const height = document.querySelector("#window-height");
//? function qui affiche les dimensions de l'écran
function reportWindowSize() {
  height.textContent = window.innerHeight;
  width.textContent = window.innerWidth;
}
window.addEventListener("resize", reportWindowSize);

//* Exercice 5
const form = document.querySelector("form");
form.addEventListener("submit", () => {
  const age = document.querySelector("#age");
  const name = document.querySelector("#name");
  if (name.value === "" || name.value.length < 2 || age.value === "" || age.value < 18) {
    alert("Veuillez réessayer");
    console.error("Connexion impossible !");
  }
});

//* Exercice 6
const rond = document.querySelector("#square");

document.addEventListener("keydown", (event) => {
  const key = event.key;
  let rondTop = parseInt(rond.style.top) || 0;
  let rondLeft = parseInt(rond.style.left) || 0;

  if (key === "ArrowUp" && rondTop > 0) {
    rondTop -= 10;
  } else if (key === "ArrowDown" && rondTop < 390) {
    rondTop += 10;
  } else if (key === "ArrowLeft" && rondLeft > 0) {
    rondLeft -= 10;
  } else if (key === "ArrowRight" && rondLeft < 390) {
    rondLeft += 10;
  }

  rond.style.top = rondTop + "px";
  rond.style.left = rondLeft + "px";
});

//* Exercice 7

const drag = document.querySelector(".drag-element");
const drop = document.querySelector(".drop-zone");

drag.setAttribute("id", "draggableElement");
drag.draggable = "true";

drag.addEventListener("dragstart", function (event) {
  event.dataTransfer.setData("text", event.target.id);
  console.log(event.dataTransfer.getData("text"));
});

drop.addEventListener("dragover", function (event) {
  event.preventDefault();
});

drop.addEventListener("drop", function (event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  console.log(data);
  let draggableElement = document.getElementById(data);
  drop.appendChild(draggableElement);
}); //& -------------------------------------------------------------------------------------------------------------------------------
