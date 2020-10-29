const { sum, myRemove, myFizzBuzz, testObject } = require('./exercise');

describe('exercise_01', () => {
  it ('Sum 4 + 5 and expected 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it ('Sum 0 + 0 and expected 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it ('Expected error message', () => {
    expect(() => sum(4, '5')).toThrowError(Error);
  })
});

describe ('exercise_02', () => {
  it ('Return a array [1, 2, 3, 4] without 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it ('Array [1, 2, 3, 4] without 3 is diferent then [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
});

describe ('exercise_03', () => {
  it ('Pass 15 and expected "fizzbuzz" because 15 is diviseble for 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it ('Pass 9 and expected "fizz" because 9 is diviseble for 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it ('Pass 10 and expected "buzz" bacause 10 is diviseble for 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  it ('Pass 4 and expected 4 because 4 is not diviseble for 5 or 3', () => {
    expect(myFizzBuzz(4)).toBe(4);
  });

  it ('Pass a string and expected error message because is not a number', () => {
    expect(() => myFizzBuzz('test')).toThrowError(Error);
  });

  it ('Pass a boolean and expected error message because is not a number', () => {
    expect(() => myFizzBuzz(false)).toThrowError(Error);
  });
});

describe ('exercise_04', () => {
  it ('Object1 is equal object2', () => {
    expect(testObject('object1')).toEqual(testObject('object2'));
  });

  it ('Object2 is not equal object3', () => {
    expect(testObject('object2')).not.toEqual(testObject('object3'));
  });

  it ('Object1 is not equal object3', () => {
    expect(testObject('object1')).not.toEqual(testObject('object3'));
  });

  it ('Object1 to string is not equal object2 to string', () => {
    expect(JSON.stringify(testObject('object1'))).not.toBe(JSON.stringify(testObject('object2')));
  });
});
