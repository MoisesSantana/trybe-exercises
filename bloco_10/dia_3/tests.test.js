const functions = require('./functions.js');

describe ('Exercise 01', () => {
  it ('Should return 10 and test if countZeroToHundred was called one time', () => {
    functions.countZeroToHundred = jest.fn()
    .mockReturnValue(10);

    expect(functions.countZeroToHundred()).toBe(10);
    expect(functions.countZeroToHundred).toHaveBeenCalled();
    expect(functions.countZeroToHundred).toHaveBeenCalledTimes(1);
  });
});

describe('Exercise 02', () => {
  it ('Shold change the countZeroToHundred function with mock and divide first argument with second argument', () => {
    functions.countZeroToHundred = jest.fn()
      .mockImplementation((number1, number2) => number1 / number2);

      expect(functions.countZeroToHundred(4, 2)).toBe(2);
      expect(functions.countZeroToHundred).toHaveBeenCalledTimes(1);
  });
});

describe('Exercise 03', () => {
  it ('Shold change the countZeroToHundred function twice with mock first time get three arguments and multiply selfs, second time, double one argument', () => {
    functions.countZeroToHundred = jest.fn()
      .mockImplementation((number1, number2, number3) => number1 * number2 * number3);

    expect(functions.countZeroToHundred(2, 2, 2)).toBe(8);
    expect(functions.countZeroToHundred).toHaveBeenCalledTimes(1);

    functions.countZeroToHundred.mockReset();
    functions.countZeroToHundred =jest.fn()
      .mockImplementation((number) => number * 2);

    expect(functions.countZeroToHundred(3)).toBe(6);
    expect(functions.countZeroToHundred).toHaveBeenCalledTimes(1);
  });
});
