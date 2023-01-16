const assertEqual = require("../assertEqual.js");

assertEqual("Lighthouse Labs", "Bootcamp"); //Should return "Assertion Failed" message
assertEqual(1, 1); //Should return "Assertion Passed" message
assertEqual(1, 23); //Should return "Assertion Failed" message
assertEqual("Test String", "Test String"); //Should return "Assertion Passed" message
