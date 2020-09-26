// const arraySkills = ['CSS', 'HTML', 'JS', 'Algoritmo', 'Empatia'];

const replaceInX = (phrase) => {
  const arrayOfPhrases = phrase.split(' ');
  for (let index = 0; index < arrayOfPhrases.length; index += 1) {
    if (arrayOfPhrases[index] === 'x') {
      arrayOfPhrases[index] = 'Moisés';
      return arrayOfPhrases.join(' ');
    }
  }
}

console.log(replaceInX('Tryber x aqui!'));