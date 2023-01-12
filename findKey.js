const findKey = function (obj, callback) {
  for (const item in obj) {
    if (callback(obj[item])) {
      return item;
    }
  }
  return undefined;
};

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

const assertArraysEqual = function (arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (result) {
    console.log(`✔✔✔ Assertion Passed: ${arr1} is equal to ${arr2}`);
  } else {
    console.log(`❗❗❗ Assertion Failed: ${arr1} is not equal to ${arr2}`);
  }
};

const test1 = findKey(
  {
    canada: "Ottawa",
    unitedStates: "Washington D.C",
    mexico: "Mexico City",
    sweden: "Stockholm",
    china: "Beijing",
  },
  (x) => x === "Washington D.C"
);
const test2 = findKey({ q1: 365, q2: 500, q3: 96, q4: 102 }, (x) => x < 100);
const test3 = findKey(
  {
    mapleLeafs: "Auston Matthews",
    oilers: "Connor McDavid",
    jets: "Kyle Connor",
  },
  (x) => x === "Connor McDavid"
);
assertArraysEqual(test1, "unitedStates");
assertArraysEqual(test2, "q3");
assertArraysEqual(test3, "oilers");
