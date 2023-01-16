const tail = require("../tail.js");
const eqArrays = require("../eqArrays.js");
const assertEqual = require("../assertEqual.js");
const test1 = tail([1, 2, 3, 4, 5, 6]);
const test2 = tail(["Testing", "The", "Tail", "Function"]);
const test3 = tail(["Should", "Return", "False"]);

assertEqual(test1[2], 4); //Pass
assertEqual(test1.length, 5); //Pass
assertEqual(test2[0], "The"); //Pass
assertEqual(test2.length, 3); //Pass
assertEqual(test3[1], "False"); //Fail
assertEqual(test3.length, 2); //Fail
