const arraySkills = ['CSS', 'HTML', 'JS', 'Algoritmo', 'Empatia'];

const replaceInX = (phrase) => {
  const arrayOfPhrases = phrase.split(' ');
  for (let index = 0; index < arrayOfPhrases.length; index += 1) {
    if (arrayOfPhrases[index] === 'x') {
      arrayOfPhrases[index] = 'Moisés';
      return arrayOfPhrases.join(' ');
    }
  }
}

const withoutX = replaceInX('Tryber x aqui');

const templateString = (firstFunction) => {
  let stringSkills = arraySkills.sort();
  stringSkills = arraySkills.join(' ');
  return `${firstFunction} ${stringSkills}`;
}

console.log(templateString(withoutX));
