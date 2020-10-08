    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

function containsA() {
  return names.reduce((accumulator, item) => {
    upperCaseLetter = item.toUpperCase().split('');
    arrWithLetterA = upperCaseLetter.filter((letter) => letter === 'A');
    return accumulator + arrWithLetterA.length;
  } , 0);
}

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

assert.deepEqual(containsA(), 20);