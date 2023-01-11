const findKeyByValue = function (obj, value) {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❗❗❗ Assertion Failed: ${actual} === ${expected}`);
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  history: "The History Show",
  sports: "NHL",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The History Show"), "history");
assertEqual(findKeyByValue(bestTVShowsByGenre, "NHL"), "sports");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Sopranos"), undefined);
