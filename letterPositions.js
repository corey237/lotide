const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]) {
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i);
    }
  }
  return results;
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

const testCase = letterPositions("lighthouse in the house");
assertArraysEqual(testCase["g"], [2]);
assertArraysEqual(testCase["u"], [7, 20]);
assertArraysEqual(testCase["e"], [9, 16, 22]);
assertArraysEqual(testCase["n"], [12]);
assertArraysEqual(testCase["l"], [0]);
assertArraysEqual(testCase["s"], [8, 21]);
