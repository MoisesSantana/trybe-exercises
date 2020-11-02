const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};
  
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) return resolve(users[id]);

    return reject({ error: 'User with ' + id + ' not found.' });
  });
}
  
const getUserName = async (userID) => {
  try {
    let result = await findUserById(userID)
    result = await result.name;
    return result;
  } catch (error) {
    const result = await error;
    return result;
  }
}
describe('Exercise 02', () => {
  it('Shold find id user', async (done) => {
    expect.assertions(2);
    await expect(getUserName(4)).resolves.toBe('Mark');
    await expect(getUserName(5)).resolves.toBe('Paul');
    done();
  });

  it(`Shold don't find id user`, () => {
    return expect(getUserName(2)).resolves.toEqual({error: 'User with 2 not found.'});
  });
});
