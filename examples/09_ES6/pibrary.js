/* export */ const pi = 3.141592653589793238462643383279502884197;

//Export declarations
export function getPi() {
    return pi;
}

export function getPiStr(significantDigits) {
    return pi.toFixed(significantDigits);
}

export function addPi(num) {
    return num + pi;
}
export function subtractPi(num) {
    return num - pi;
}

export function addPiDays(date) {
    date.setDate(date.getDate() + pi);
    return date;
}

/*
//Alternative List Syntax

export {
    getPi as anotherNameIfYouWant,
    getPiStr,
    addPi,
    subtractPi,
    addPiDays
}

//You can also export a default, don't do this unless you need to for some reason.
//https://basarat.gitbook.io/typescript/main-1/defaultisbad

*/



