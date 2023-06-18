

//IIFE - Immediately-invoked function expression, base
(function(){

})();

var pibrary = (() => {
    //private, hidden in the function scope.
    const pi = 3.141592653589793238462643383279502884197;

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

    let exportedStuff = {};
    exportedStuff.getPi = getPi;
    exportedStuff.getPiStr = getPiStr;
    exportedStuff.addPi = addPi;
    exportedStuff.subtractPi = subtractPi;
    exportedStuff.addPiDays = addPiDays;
    return exportedStuff;
})();

