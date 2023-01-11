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

const middle = function (arr) {
  const middleArray = [];
  if (arr.length <= 2) {
    return middleArray;
  }

  if (arr.length % 2 === 0) {
    middleArray.push(arr[Math.floor(arr.length / 2 - 1)]);
    middleArray.push(arr[Math.round(arr.length / 2)]);
  }

  if (arr.length % 2 !== 0) {
    middleArray.push(Math.round(arr.length / 2));
  }
  return middleArray;
};
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([12, 45, 32, 45, 67, 3, 456, 3045]), [45, 67]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
