
import { addPiDays, subtractPi, addPi } from "./pibrary/index.js"; 

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


//Mostly to show what would happen at the root level for export
export {
    piDayEl, 
    addButton,
    subtractButton,
    numberChangerInput
}