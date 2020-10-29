const { uppercase } = require('./functions.js');

describe('Exercise 01', () => {
  it('Shold return the message passed in argument in uppercase', (done) => {
    uppercase('string test', (callback) => {
      expect(callback).toBe('STRING TEST');
      done();
    });
  });  
});