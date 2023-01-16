const tail = require("../tail.js");
const assert = require("chai").assert;

describe("#tail", () => {
  it("Should return [2, 3, 4, 5, 6] from [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6]), [2, 3, 4, 5, 6]);
  });
  it("Should return ['The', 'Tail', 'Function'] from ['Testing', 'The', 'Tail', 'Function']", () => {
    assert.deepEqual(tail(["Testing", "The", "Tail", "Function"]), ["The", "Tail", "Function"]);
  });
  it("Should return [1, 2, 3, 'Apples'] from ['Bananas', 1, 2, 3, 'Apples']", () => {
    assert.deepEqual(tail(["Bananas", 1, 2, 3, "Apples"]), [1, 2, 3, "Apples"]);
  });
});
