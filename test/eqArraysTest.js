const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays.js");

const test1 = eqArrays(["1", "2", "3"], ["1", "2", "3"]);
const test2 = eqArrays(
  ["Comparing", "String", "Arrays"],
  ["Comparing", "String", "Arrays"]
);
const test3 = eqArrays(["1", "2", "3"], ["1", "2", 3]);

assertEqual(test1, true); //Arrays match, should return true
assertEqual(test2, true); //Arrays match, should return false
assertEqual(test3, false); //Arrays do not match, should return false
