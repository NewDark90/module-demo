//Importing a node_module
const leftPad = require("left-pad");

//Importing our library
const pibrary = require("./pibrary.js");

//Importing a base node function 
const fs = require('fs');

const dateResult = pibrary.addPiDays(new Date());
const stringResult = leftPad(dateResult.toLocaleString(), 30, "*");

console.log(stringResult);

//fs.appendFileSync("date-ran.txt", stringResult);