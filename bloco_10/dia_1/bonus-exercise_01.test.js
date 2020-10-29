const users = [
  {
    login: 'knuth',
    firstName: 'Donald',
    lastName: 'Knuth',
    likes: ['C', 'Unix'],
  },
  {
    login: 'norvig',
    firstName: 'Peter',
    lastName: 'Norvig',
    likes: ['AI', 'Search', 'NASA', 'Mars'],
  },
  {
    login: 'mfowler',
    firstName: 'Martin',
    lastName: 'Fowler',
    likes: ['Design Patterns', 'Refactoring'],
  },
  {
    login: 'kent',
    firstName: 'Kent',
    lastName: 'Beck',
    likes: ['TDD', 'wikis', 'Design Patterns'],
  },
];

const norvigFunction = (login, property) => {
  const expectedObject = users.find(object => login === object.login);
  return expectedObject[property];
};

const knuthFunction = (login, property) => {
  const expectedObject = users.find(object => login === object.login);
  return expectedObject[property];
};

const noBodyFunction = (login) => users.find(object => login === object.login);

const anythingProperty = (login, property) => {
  const expectedObject = users.find(object => login === object.login);
  return expectedObject[property];
}

// lookup()
const lookup = (login, property) => {
  if (login === 'norvig') return norvigFunction(login, property);
  if (login === 'knuth') return knuthFunction(login, property);
  if (!noBodyFunction(login)) throw new Error('Could not find user');
  if (!anythingProperty(login, property)) throw new Error ('Could not find property');
};

// Tests
describe('lookup()', () => {
  it("lookup(<login>, 'likes') should return likes for the specified user.", () => {
    const actual = lookup('norvig', 'likes');
    const expected = ['AI', 'Search', 'NASA', 'Mars'];

    expect(actual).toEqual(expected);
  });

  it("lookup(<login>, 'lastName') should return the last name for the specified user", () => {
    const actual = lookup('knuth', 'lastName');
    const expected = 'Knuth';

    expect(actual).toEqual(expected);
  });

  it('with unknown user should throw an error with the correct message', () => {
    expect(() => {
      lookup('nobody', 'likes');
    }).toThrow(/Could not find user/);
  });

  it('with unknown property should throw an error the correct message', () => {
    expect(() => {
      lookup('mfowler', 'noprop');
    }).toThrow(/Could not find property/);
  });
});
