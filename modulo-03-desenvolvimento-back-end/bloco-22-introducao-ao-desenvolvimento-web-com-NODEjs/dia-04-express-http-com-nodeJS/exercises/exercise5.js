// Create one API of datas from Simpsons characters and use the module fs to read/write in it
const fs = require('fs').promises;

async function getSimpsons() {
  return await fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
}

async function setSimpsons(newFile) {
  await fs.writeFile('./simpsons.json', JSON.stringify(newFile));
}

module.exports = { getSimpsons, setSimpsons };