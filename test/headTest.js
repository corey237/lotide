const head = require("../head.js");
const assertEqual = require("../assertEqual");

assertEqual(head([5, 6, 7]), 5); //Pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //Pass
assertEqual(head(["Testing", "This", "Function"]), "Function"); //Fail
