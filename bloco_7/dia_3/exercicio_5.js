const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui

assert.ok(JSON.stringify(obj1) === JSON.stringify(obj2));
assert.ok(JSON.stringify(obj2) === JSON.stringify(obj3));
assert.ok(JSON.stringify(obj1) === JSON.stringify(obj3));

