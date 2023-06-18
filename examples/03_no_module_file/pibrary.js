

var pi = 3.141592653589793238462643383279502884197;

function getPi() {
    return pi;
}

function getPiStr(significantDigits) {
    return pi.toFixed(significantDigits);
}

function addPi(num) {
    return num + pi;
}
function subtractPi(num) {
    return num - pi;
}

function addPiDays(date) {
    date.setDate(date.getDate() + pi);
    return date;
}