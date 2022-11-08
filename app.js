const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const text = document.getElementById("text");

window.addEventListener("keypress", function (event) {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  if (event.key === " ") {
    document.body.style.backgroundColor = hexColor;
    text.textContent = hexColor;
  }
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
