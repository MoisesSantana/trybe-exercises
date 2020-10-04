const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

assert.deepStrictEqual(myFizzBuzz(15), 'fizzbuzz', 'Número não divisível por 3 e 5');
assert.deepStrictEqual(myFizzBuzz(9), 'fizz', 'Número não divisível por 3');
assert.deepStrictEqual(myFizzBuzz(10), 'buzz', 'Número não divisível por 5');
assert.deepStrictEqual(myFizzBuzz(4), 4, 'Número diferente do parâmetro');
assert.ok(!myFizzBuzz('abc'));