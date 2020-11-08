const fetch = require('node-fetch');

const countZeroToHundred = () => Math.floor(Math.random() * 101);

const upperCase = (text) => text.toUpperCase();

const firstLetter = (text) => text.charAt(0);

const concat = (text1, text2) => `${text1} ${text2}`;

const getFetch = (url) => fetch(url); 

const getFetchResult = async () => {
  const jsonObject = await getFetch('https://dog.ceo/api/breeds/image/random');
  const object = await jsonObject.json();
  return object;
};

module.exports = { countZeroToHundred, upperCase, firstLetter, concat, getFetchResult };
