const head = require("./head.js");
const tail = require("./tail.js");
const middle = require("./tail.js");
const without = require("./without.js")
const takeUntil = require("./takeUntil.js");
const map = require("./map.js");
const letterPositions = require("./letterPositions.js");
const flatten = require("./flatten.js");
const findKeyByValue = require("./findKeyByValue.js");
const findKey = require("./findKey.js");
const eqObjects = require("./eqObjects.js");
const eqArrays = require("./eqArrays")
const countOnly = require("./countOnly.js");
const countLetters = require("./countLetters.js");
const assertObjectsEqual = require("./assertObjectsEqual");
const assertEqual = require("./assertEqual");
const assertArraysEqual = require("./assertArraysEqual");


module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  without: without,
  takeUntil: takeUntil,
  map: map,
  letterPositions: letterPositions,
  flatten: flatten,
  findKeyByValue: findKeyByValue,
  findKey: findKey,
  eqObjects: eqObjects,
  eqArrays: eqArrays,
  countOnly: countOnly,
  countLetters: countLetters,
  assertObjectsEqual: assertObjectsEqual,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual

}