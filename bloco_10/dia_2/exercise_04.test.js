const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

describe('exercise 04', () => {
  it(`Shold find repositories 'sd-01-week4-5-project-todo-list' and 'sd-01-week4-5-project-meme-generator'`, async (done) => {
    await expect(getRepos('https://api.github.com/users/tryber/repos')).resolves.toBe('sd-01-week4-5-project-todo-list');
    await expect(getRepos('https://api.github.com/users/tryber/repos')).resolves.toBe('sd-01-week4-5-project-meme-generator');
    done();
  });
});