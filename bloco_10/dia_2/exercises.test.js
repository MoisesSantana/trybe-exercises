const { uppercase, getUserName } = require('./functions.js');

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
  it('Shold get resolve and reject if a function getUserName using try/catch', async (done) => {
    try {
      await expect(getUserName(4)).resolves.toBe('Mark');
      await expect(getUserName(5)).resolves.toBe('Paul');
      await expect(getUserName(3)).resolves.toBe('error');
    } catch {
      await expect(getUserName(3)).rejects.toEqual({"error": "User with 3 not found."});
    }
    done();
  });
});