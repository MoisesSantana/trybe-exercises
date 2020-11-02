const { it, expect } = require('@jest/globals');
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
  it ('Should change the countZeroToHundred function with mock and divide first argument with second argument', () => {
    functions.countZeroToHundred = jest.fn()
      .mockImplementation((number1, number2) => number1 / number2);

      expect(functions.countZeroToHundred(4, 2)).toBe(2);
      expect(functions.countZeroToHundred).toHaveBeenCalledTimes(1);
  });
});

describe('Exercise 03', () => {
  it ('Should change the countZeroToHundred function twice with mock first time get three arguments and multiply selfs, second time, double one argument', () => {
    functions.countZeroToHundred = jest.fn()
      .mockImplementation((number1, number2, number3) => number1 * number2 * number3);

    expect(functions.countZeroToHundred(2, 2, 2)).toBe(8);
    expect(functions.countZeroToHundred).toHaveBeenCalledTimes(1);

    functions.countZeroToHundred.mockReset();
    functions.countZeroToHundred = jest.fn()
      .mockImplementation((number) => number * 2);

    expect(functions.countZeroToHundred(3)).toBe(6);
    expect(functions.countZeroToHundred).toHaveBeenCalledTimes(1);
  });
});

describe ('Exercise 04', () => {
  it('Should change uppercase function to lowercase', () => {
    const upperCaseToLowerCase = jest
      .spyOn(functions, 'upperCase')
      .mockImplementation((text) => text.toLowerCase());

    expect(upperCaseToLowerCase('TEXT IN UPPERCASE')).toBe('text in uppercase');
  });

  it('Should change the find first letter function to find last letter', () => {
    functions.firstLetter = jest.fn()
      .mockImplementation((text) => text.charAt(text.length - 1));

    expect(functions.firstLetter('find last letter please')).toBe('e');
  });

  it('Should change the concatenate function to concatenate three strings', () => {
    functions.concat = jest.fn()
      .mockImplementation((text1, text2, text3) => `${text1} ${text2} ${text3}`);

    expect(functions.concat('three', 'strings', 'please')).toBe('three strings please');
  });
});

describe ('Exercise 5', () => {
  it('Should change uppercase function to lowercase then restore the uppercase function', () => {
    const changeUpperCaseFunction = jest
      .spyOn(functions, 'upperCase')
      .mockImplementation((text) => text.toLowerCase());

    expect(changeUpperCaseFunction('TEXT IN UPPERCASE')).toBe('text in uppercase');

    functions.upperCase.mockRestore();

    expect(functions.upperCase('text in lowercase')).toBe('TEXT IN LOWERCASE');
  });
});

describe ('Exercise 6', () => {
  functions.getFetchResult = jest.fn();

  it('Should fixed value of resolve in fetch promise', async () => {
    functions.getFetchResult.mockResolvedValue('request sucess');

    await expect(functions.getFetchResult()).resolves.toBe('request sucess');
  });

  it('Sould fixed value of reject in fetch promise', async () => {
    functions.getFetchResult.mockRejectedValue( new Error('request failed'));

    await expect(functions.getFetchResult()).rejects.toThrow(/request failed/);
  });
});
