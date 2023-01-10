const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❗❗❗ Assertion Failed: ${actual} === ${expected}`);
  }
};

const eqArray = function (arr1, arr2) {
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
const tail = function (arr) {
  const tailArray = [];
  for (let i = 1; i < arr.length; i++) {
    tailArray.push(arr[i]);
  }
  return tailArray;
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(eqArray(result, ["Lighthouse", "Labs"]), true);
