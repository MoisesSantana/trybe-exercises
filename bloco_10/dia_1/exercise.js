const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') throw new Error('parameters must be numbers');
  return a + b;
};

const myRemove = (arr, item) => arr.filter((element) => item !== element);

const myFizzBuzz = (num) => {
  if (typeof num !== 'number') throw new Error('parameters must be numbers');
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

const testObject = (object) => {
  if (object === 'object1') object = {
    title: 'My Title',
    description: 'My Description',
  };
  
  if (object === 'object2') object = {
    description: 'My Description',
    title: 'My Title',
  };
  
  if (object === 'object3') object = {
    title: 'My Different Title',
    description: 'My Description',
  };

  return object;
};

module.exports = { sum, myRemove, myFizzBuzz, testObject };
