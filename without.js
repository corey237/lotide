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
    console.log(`✔✔✔ Assertion Passed: The original has not been modified`);
  } else {
    console.log(
      `❗❗❗ Assertion Failed: The original array has been modified`
    );
  }
};

const without = function (source, itemsToRemove) {
  const alteredArray = [...source];
  for (let i = 0; i < alteredArray.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (alteredArray[i] === itemsToRemove[j]) {
        alteredArray.splice(i, 1);
      }
    }
  }
  return alteredArray;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
