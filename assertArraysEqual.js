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

console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]));
