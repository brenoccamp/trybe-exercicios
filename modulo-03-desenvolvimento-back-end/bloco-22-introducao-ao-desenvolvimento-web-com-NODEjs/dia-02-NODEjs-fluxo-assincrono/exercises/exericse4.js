const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => JSON.parse(fileContent))
  .then((responseJSON) => responseJSON.map(({ id, name }) => `${id} - ${name}`))
  .then((responseArray) => responseArray.forEach((string) => console.log(string)));