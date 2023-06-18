
var piDayEl = document.getElementById("next-days-pi");
piDayEl.innerHTML = addPiDays(new Date()).toLocaleString();

setInterval(() => {
    piDayEl.innerHTML = addPiDays(new Date()).toLocaleString();
}, 1000);

var addButton = document.getElementById("add");
var subtractButton = document.getElementById("subtract");
var numberChangerInput = document.getElementById("number-changer");

addButton.addEventListener("click", () => {
    numberChangerInput.value = addPi(numberChangerInput.valueAsNumber);
});
subtractButton.addEventListener("click", () => {
    numberChangerInput.value = subtractPi(numberChangerInput.valueAsNumber);
});