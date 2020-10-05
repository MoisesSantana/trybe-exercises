const assert = require('assert');

const greetPeople = (people) => {
  const greeting = 'Hello ';

  people.forEach ((item, index) => {
    people[index] = `${greeting}${item}`;
  });
  return people;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);
