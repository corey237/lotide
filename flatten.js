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

const flatten = function (arr) {
  const flatArray = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      for (let i = 0; i < item.length; i++) {
        flatArray.push(item[i]);
      }
    } else {
      flatArray.push(item);
    }
  }
  return flatArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, 4, 6, [7, 9], 2, 14, [26, 28, 92, 42]]));
