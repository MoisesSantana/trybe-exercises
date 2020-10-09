const assert = require('assert')

// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja

  // parametro como arr       arr do parametro no reduce      acumulando soma dos elemento
const sum = (...rest) => rest.reduce((result, currentNumber) => result + currentNumber, 0);

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)
