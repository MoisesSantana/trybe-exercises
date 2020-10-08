    
const assert = require('assert');

const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notas = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

function getAverage() {
  return notas.map((item) => item.reduce((result, currentGrade, index) => {
    if (index === item.length - 1) return (result + currentGrade) / item.length;
    return result + currentGrade;
  }));
}

function studentAverage() {
  const expectedGrade = getAverage();
  return alunos.reduce((result, students, index) => {
    result.push({name: students, average: expectedGrade[index]});
    return result;
  },[]);
}

// Criar um array como na const expected

// cada objeto terá o formato { name: 'nome do aluno', average: média };

// As notas dos alunos possuí o mesmo índice (alunos[0] possui notas[0]);

// Necessário .reduce e .map

// Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos, aqui além de reduce será necessário utilizar também a função map. Dica: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.

assert.deepEqual(studentAverage(), expected);