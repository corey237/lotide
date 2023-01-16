const eqArrays = require("../eqArrays.js");
const assert = require("chai").assert;


describe("#eqArrays", () => {
  it("Should return 'true' when arrays are ['Comparing', 'String', 'Arrays'], ['Comparing', 'String', 'Arrays']", () => {
    assert.strictEqual(eqArrays(['Comparing', 'String', 'Arrays'], ['Comparing', 'String', 'Arrays']), true);
  });
  it("Should return 'true' when arrays are ['1', '2', '3'], ['1', '2', '3']", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it("Should return 'false' when arrays are ['1', '2', 3], ['1', '2', '3']", () => {
    assert.strictEqual(eqArrays(["1", "2", 3], ["1", "2", "3"]), false);
  });
  it("Should return 'false' when arrays are [1, 2, 3, 4, 5], [1, 2, -3, 4, 5]", () => {
    assert.strictEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, -3, 4, 5]), false);
  })
 });