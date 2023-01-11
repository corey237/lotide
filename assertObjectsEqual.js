const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function (obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (const key in obj1) {
    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `✔✔✔ Assertion Passed. ${inspect(actual)} is equal to ${inspect(
        expected
      )}`
    );
  } else {
    console.log(
      `❗❗❗ Assertion Failed. ${inspect(actual)} is not equal to ${inspect(
        expected
      )}`
    );
  }
};

const testObj1 = { name: "Corey", role: "Student", school: "Lighthouse Labs" };
const testObj2 = { school: "Lighthouse Labs", name: "Corey", role: "Student" };

const testObj3 = {
  team1: "Toronto Maple Leafs",
  team2: "Montreal Canadiens",
  team3: "Ottawa Senators",
};
const testObj4 = {
  team1: "Toronto Maple Leafs",
  team2: "Montreal Canadfiens",
  team3: "Ottawa Senators",
  team4: "Vancouver Canucks",
};
const testObj5 = {
  team3: "Ottawa Senators",
  team1: "Toronto Maple Leafs",
  team2: "Montreal Canadiens",
};
assertObjectsEqual(testObj1, testObj2);
assertObjectsEqual(testObj3, testObj4);
assertObjectsEqual(testObj1, testObj4);
assertObjectsEqual(testObj3, testObj5);
