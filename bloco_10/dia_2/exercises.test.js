const { it, expect } = require('@jest/globals');
const { uppercase, getUserName, fetchResult, getListAnimals, getAnimalByName, getAnimalByAge } = require('./functions.js');

describe('Exercise 01', () => {
  it('Shold return the message passed in argument in uppercase', (done) => {
    uppercase('string test', (callback) => {
      expect(callback).toBe('STRING TEST');
      done();
    });
  });  
});

describe ('Exercise 02', () => {
  it('Shold get resolve and reject if a function getUserName', async (done) => {
    await expect(getUserName(4)).resolves.toBe('Mark');
    await expect(getUserName(5)).resolves.toBe('Paul');
    await expect(getUserName(3)).rejects.toEqual({"error": "User with 3 not found."});
    done();
  });
});

describe ('Exercise 03', () => {
  it('Shold resolve or reject the function getUserName using try/catch', async (done) => {
    try {
      await expect(getUserName(4)).resolves.toBe('Mark');
      await expect(getUserName(5)).resolves.toBe('Paul');
      await expect(getUserName(3)).resolves.toBe('error');
    } catch {
      await expect(getUserName(3)).rejects.toEqual({ error: 'User with 3 not found.' });
    }
    done();
  });
});

describe ('Exercise 04', () => {
  it('Shold be two repositories in API', async (done) => {
    // const functionResult = await fetchResult();

    await expect(fetchResult()).resolves.toContain('challenge-bug-hunting-youtrybe-squad-1');
    await expect(fetchResult()).resolves.toContain('challenge-bug-hunting-youtrybe-squad-2');
    await expect(fetchResult()).resolves.toContain('challenge-bug-hunting-youtrybe-squad-3');
    await expect(fetchResult()).resolves.toContain('challenge-bug-hunting-youtrybe-squad-4');
    await expect(fetchResult()).resolves.toContain('challenge-bug-hunting-youtrybe-squad-5');
    await expect(fetchResult()).resolves.toContain('challenge-bug-hunting-youtrybe-squad-6');
    done();
  });
});

// Exercise 5;

// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));

// test('', () => console.log('1 - test'));

// describe('Scoped / Nested block', () => {
//   beforeEach(() => console.log('2 - beforeEach'));
//   afterEach(() => console.log('2 - afterEach'));

//   test('', () => console.log('2 - test'));
// });

// End exercise 5;

describe ('Exercise 6', () => {
  it('Should a animals array', async (done) => {
    await expect(getListAnimals('Dog')).resolves.toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' }]);
    
    await expect(getListAnimals('Cat')).resolves.toEqual([{ name: 'Preguiça', age: 5, type: 'Cat' }]);

    await expect(getListAnimals('Tiger')).rejects.toEqual({ error: 'Não possui esse tipo de animal.' });
    
    done();
  });

  it('Should a animals array by name', async (done) => {
    await expect(getAnimalByName('Dorminhoco')).resolves.toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }]);
    await expect(getAnimalByName('error')).rejects.toEqual({ error: 'Não possui esse tipo de animal.' });
    done();
  });

  it('Should a animals array by age', async (done) => {
    await expect(getAnimalByAge(5)).resolves.toEqual([{ name: 'Preguiça', age: 5, type: 'Cat' }]);
    await expect(getAnimalByAge('error')).rejects.toEqual({ error: 'Não possui esse tipo de animal.' });
    done();
  });
});
