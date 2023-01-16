const head = require("../head.js");
const assert = require("chai").assert;

describe("#head", () => {
  it("Returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  it("Returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("Returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it("Returns 'Testing' for ['Testing', 'This', 'Function']", () => {
    assert.strictEqual(head(["Testing", "This", "Function"]), "Testing");
  });
});
