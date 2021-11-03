const generateRandomNumber = (mini, maxi) => {
  const min = Math.ceil(mini);
  const max = Math.floor(maxi);
  return Math.floor(Math.random() * (max - min) + min);
}

const toUpperCase = (string) => {
  return string.toUpperCase();
}

const returnFirstLetter = (string) => {
  return string.split('')[0];
}

const concatStrings = (string1, string2) => {
  return string1 + string2;
}

const dogAPI = () => {
  const URL = 'https://dog.ceo/api/breeds/image/random';

  return fetch(URL)
    .then((response) => response.json()
    .then(json => response.ok ? Promise.resolve(json) : Promise.reject(json)));
}


module.exports = { generateRandomNumber, toUpperCase, returnFirstLetter, concatStrings, dogAPI };