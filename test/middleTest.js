const middle = require("../middle.js");
const assert = require("chai").assert;

describe("#middle", () => {
  it("Should return [3, 4] from [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("Should return [2] from [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("Should return [3] from [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("Should return [45, 67] from [12, 45, 32, 45, 67, 3, 456, 3045]", () => {
    assert.deepEqual(middle([12, 45, 32, 45, 67, 3, 456, 3045]), [45, 67]);
  })
  it("Should return ['thirdString'] from ['firstString', 'secondString', 'thirdString', 'fourthString', 'fifthString']", () => {
    assert.deepEqual(middle(['firstString', 'secondString', 'thirdString', 'fourthString', 'fifthString']), ['thirdString']);
  })
  it("Should return empty array '[]' from [1] (Empty array for 2 elements or less)", () => {
    assert.deepEqual(middle([1]), []);
  })
  it("Should return empty array '[]' from [1, 2] (Empty array for 2 elements or less)", () => {
    assert.deepEqual(middle([1, 2]), []);
  })

})
