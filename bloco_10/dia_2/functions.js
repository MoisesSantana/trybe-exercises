const uppercase = (str, callback) => callback(str.toUpperCase());

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = (id) => new Promise((resolve, reject) => {
  if (users[id]) return resolve(users[id]);
  return reject({ error: 'User with ' + id + ' not found.' });
});
  
const getUserName = (userID) => findUserById(userID).then(user => user.name);

const fetch = require('node-fetch');

const getFetch = (url) => fetch(url);

const fetchResult = async () => {
  const jsonObject = await getFetch('https://api.github.com/users/tryber/repos');
  const object = await jsonObject.json();
  const repositores = object.map(repositore => repositore.name);
  // Uncomment the line below to know which repositories to use in the test, if outdated;
  // console.log(repositores);
  return repositores;
};

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimals = (type, how) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const arrayAnimals = Animals.filter((animal) => animal[how] === type);
    if (arrayAnimals.length !== 0) return resolve(arrayAnimals);

    return reject({ error: 'Não possui esse tipo de animal.' });
  }, 100);
});

const getListAnimals = (type) => findAnimals(type, 'type').then(list => list);

const getAnimalByName = (name) => findAnimals(name, 'name').then(list => list);

const getAnimalByAge = (age) => findAnimals(age, 'age').then(list => list);

module.exports = { uppercase, getUserName, fetchResult, getListAnimals, getAnimalByName, getAnimalByAge };
