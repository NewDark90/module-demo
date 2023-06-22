
import { addPiDays, addPi, subtractPi } from "./pibrary.js";

const piDayEl = document.getElementById("next-days-pi");
piDayEl.innerHTML = addPiDays(new Date()).toLocaleString();

setInterval(() => {
    piDayEl.innerHTML = addPiDays(new Date()).toLocaleString();
}, 1000);

const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const numberChangerInput = document.getElementById("number-changer");

addButton.addEventListener("click", () => {
    numberChangerInput.value = addPi(numberChangerInput.valueAsNumber);
});

subtractButton.addEventListener("click", () => {
    numberChangerInput.value = subtractPi(numberChangerInput.valueAsNumber);
});
