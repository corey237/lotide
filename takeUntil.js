const takeUntil = function (array, callback) {
  const result = [];
  for (const item of array) {
    if (callback(item)) {
      return result;
    } else {
      result.push(item);
    }
  }
  return result;
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

const test1 = takeUntil(
  ["This is a", "test to confirm", "my", "function is working"],
  (x) => x.length < 3
);
const test2 = takeUntil([20, 10, 13, 6, 60, 5, 90, 42], (x) => x < 6);
const test3 = takeUntil([20, 10, 6, 30, 3, 50, 51], (x) => x % 2 !== 0);
assertArraysEqual(test1, ["This is a", "test to confirm"]);
assertArraysEqual(test2, [20, 10, 13, 6, 60]);
assertArraysEqual(test3, [20, 10, 6, 30]);
