
// Dependencies defined in first parameter, injected into the function in order.
// Based on the name/path of the file
define(["pibrary-rq"], (pibrary) => {
    const piDayEl = document.getElementById("next-days-pi");
    piDayEl.innerHTML = pibrary.addPiDays(new Date()).toLocaleString();
    
    setInterval(() => {
        piDayEl.innerHTML = pibrary.addPiDays(new Date()).toLocaleString();
    }, 1000);
    
    const addButton = document.getElementById("add");
    const subtractButton = document.getElementById("subtract");
    const numberChangerInput = document.getElementById("number-changer");
    
    addButton.addEventListener("click", () => {
        numberChangerInput.value = pibrary.addPi(numberChangerInput.valueAsNumber);
    });
    subtractButton.addEventListener("click", () => {
        numberChangerInput.value = pibrary.subtractPi(numberChangerInput.valueAsNumber);
    });
});

