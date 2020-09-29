const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const tarefa1 = (lesson2, turno, horario) => lesson2[turno] = horario;

console.log(tarefa1(lesson2, 'turno', 'manhã'));
console.log(lesson2);

const tarefa2 = (lesson1) => Object.keys(lesson1);

console.log(tarefa2(lesson1));

const tarefa3 = (lesson2) => Object.keys(lesson2).length;

console.log(tarefa3(lesson2));

const tarefa4 = (lesson3) => Object.values(lesson3);

console.log(tarefa4(lesson3));

//tarefa 5
let allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

const tarefa6 = (allLessons) => {
  let result = allLessons.lesson1['numeroEstudantes'];
  result += allLessons.lesson2['numeroEstudantes'];
  result += allLessons.lesson3['numeroEstudantes'];
  return result;
}

console.log(tarefa6(allLessons));

const tarefa7 = (lesson1, position) => {
  keysArray = Object.keys(lesson1);
  for (let index = 0; index < keysArray; index += 1) {
    if (index === position) {
      
    }
  }
}

console.log(tarefa7(lesson1, 0));
