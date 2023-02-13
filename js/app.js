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
let hueLength = 0;
let saturationLength = 0;
let lightnessLength = 0;

hue.addEventListener("input", function (event) {
  hueLength = event.target.value;
  const number = hueValue;
  number.textContent = hueLength;
  console.log(`hsl(${hueLength}, ${saturationLength}%, ${lightnessLength}%)`);
  square.style.background = `hsl(${hueLength}, ${saturationLength}%, ${lightnessLength}%)`;
});

//? nombre saturation
saturation.addEventListener("input", function (event) {
  saturationLength = event.target.value;
  const number = saturationValue;
  number.textContent = saturationLength + "%";
  console.log(`hsl(${hueLength}, ${saturationLength}%, ${lightnessLength}%)`);
  square.style.background = `hsl(${hueLength}, ${saturationLength}%, ${lightnessLength}%)`;
});

//? nombre lightness
lightness.addEventListener("input", function (event) {
  lightnessLength = event.target.value;
  const number = lightnessValue;
  number.textContent = lightnessLength + "%";
  console.log(`hsl(${hueLength}, ${saturationLength}%, ${lightnessLength}%)`);
  square.style.background = `hsl(${hueLength}, ${saturationLength}%, ${lightnessLength}%)`;
});

// hsl(200, 20%, 50%)
