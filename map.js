const map = function (array, callback) {
  const resultArray = [];
  for (const item of array) {
    resultArray.push(callback(item));
  }
  return resultArray;
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

const test1 = map([1, 2, 3, 4, 5], (x) => x * 2);
const test2 = map(["Adding", "Text", "To", "Each", "Element"], (x) => `${x}ay`);
const test3 = map(
  ["Dog", "Cat", "Cat", "Dog", "Cow", "Chicken"],
  (x) => (x = "Owl")
);

assertArraysEqual(test1, [2, 4, 6, 8, 10]);
assertArraysEqual(test2, ["Addingay", "Textay", "Toay", "Eachay", "Elementay"]);
assertArraysEqual(test3, ["Owl", "Owl", "Owl", "Owl", "Owl", "Owl"]);
