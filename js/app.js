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

hue.addEventListener("input", function (event) {
  hueLength = event.target.value;
  hueValue.textContent = hueLength;
  square.style.background = `hsl(${hueLength}, ${saturationLength}%, ${lightnessLength}%)`;
});

//? nombre saturation
saturation.addEventListener("input", function (event) {
  saturationLength = event.target.value;
  saturationValue.textContent = saturationLength + "%";
  square.style.background = `hsl(${hueLength}, ${saturationLength}%, ${lightnessLength}%)`;
});

//? nombre lightness
lightness.addEventListener("input", function (event) {
  lightnessLength = event.target.value;
  lightnessValue.textContent = lightnessLength + "%";
  square.style.background = `hsl(${hueLength}, ${saturationLength}%, ${lightnessLength}%)`;
});

//* Exercice 4
const width = document.querySelector("#window-width");
const height = document.querySelector("#window-height");
function reportWindowSize() {
  height.textContent = window.innerHeight;
  width.textContent = window.innerWidth;
}
window.addEventListener("resize", reportWindowSize);

//* Exercice 5
