const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let cont = 1;
  characters.forEach ((item, index) => {
    vowels.forEach (item2 => {
      if (item === item2) {
        characters[index] = cont;
        cont += 1;
      }
    });
  });
  return characters.join('');
};


const parameter = 'Dayane';
const result = 'D1y2n3';

assert.deepStrictEqual(removeVowels(parameter), result);