// Create one API of datas from Simpsons characters and use the module fs to read/write in it
const fs = require('fs').promises;

function getSimpsons() {
  return fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
}

function setSimpsons(newFile) {
  fs.writeFile('./simpsons.json', JSON.stringify(newFile));
}

module.exports = { getSimpsons, setSimpsons };