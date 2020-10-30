const functions = require('./functions.js');

describe ('Exercise 01', () => {
  it ('should return 10 and test if countZeroToHundred was called one time', () => {
    functions.countZeroToHundred = jest.fn()
    .mockReturnValue(10);

    expect(functions.countZeroToHundred()).toBe(10);
    expect(functions.countZeroToHundred).toHaveBeenCalled();
    expect(functions.countZeroToHundred).toHaveBeenCalledTimes(1);
  });
});

describe('Exercise 02', () => {

});
