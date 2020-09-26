const longestWord = (phrase) => {
  const arrayOfPhrase = phrase.split(' ');
  let bigger = arrayOfPhrase[0];
  for (let index = 1; index < arrayOfPhrase.length; index += 1) {
    if (bigger.length < arrayOfPhrase[index].length) {
      bigger = arrayOfPhrase[index];
    }
  }
  return bigger;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'))