const assert = require('assert');

const greaterThanTen = (array) => {
  const results = [];
  array.forEach (item => {
    if (item > 10) results.push(item);
  });
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

assert.deepStrictEqual(greaterThanTen(parameter), result);
