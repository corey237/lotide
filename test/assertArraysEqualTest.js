const assertArraysEqual = require("../assertArraysEqual.js");
assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]); //Both arrays are equal, should pass
assertArraysEqual(["1", "2", "3", "4", "5"], ["1", "2", "3", "4", "5"]); //Both arrays are equal, should pass
assertArraysEqual([1, 2, "3", 4, 5], [1, 2, 3, 4, 5]); //Both arrays are NOT equal, should fail
