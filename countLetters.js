const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❗❗❗ Assertion Failed: ${actual} === ${expected}`);
  }
};

const countLetters = function (sentence) {
  const results = {};
  for (const letter of sentence.toLowerCase()) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

const test = countLetters("lighthouse in the house");
assertEqual(test["t"], 2);
assertEqual(test["s"], 2);
assertEqual(test["n"], 1);
assertEqual(test["q"], undefined);
