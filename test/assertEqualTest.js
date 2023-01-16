const assertEqual = require("../assertEqual.js");

assertEqual("Lighthouse Labs", "Bootcamp"); //Fail
assertEqual(1, 1); //Pass
assertEqual(1, 23); //Fail
assertEqual("Test String", "Test String"); //Pass
