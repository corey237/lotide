const middle = function (arr) {
  const middleArray = [];
  if (arr.length <= 2) {
    return middleArray;
  }

  if (arr.length % 2 === 0) {
    middleArray.push(arr[Math.floor(arr.length / 2 - 1)]);
    middleArray.push(arr[Math.round(arr.length / 2)]);
  }

  if (arr.length % 2 !== 0) {
    middleArray.push(arr[Math.floor(arr.length / 2)]);
  }
  return middleArray;
};

module.exports = middle;

console.log(middle(['firstString', 'secondString', 'thirdString', 'fourthString', 'fifthString']))