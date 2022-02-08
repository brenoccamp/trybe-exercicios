// 4.1
const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => JSON.parse(fileContent))
  .then((responseJSON) => responseJSON.map(({ id, name }) => `${id} - ${name}`))
  // .then((responseArray) => responseArray.forEach((string) => console.log(string)));

// 4.2
async function getSimpsonById(simpsonId) {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

  const chosenSimpson = simpsons.find((simpson) => simpsonId === Number(simpson.id));

  if(!chosenSimpson) throw new Error(`Sorry, ID: ${simpsonId}, not found!`);

  console.log(chosenSimpson);
  return chosenSimpson;
}

// getSimpsonById(11);

//4.3
async function filterSimpsons() {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

  const filteredSimpsons = simpsons.filter(({id}) => id !== '10' && id !== '6');

  await fs.writeFile('./simpsons.json', JSON.stringify(filteredSimpsons));
}


// 4.4
async function newSimpsonsFile() {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

  const idsToRetrieve = ['1', '2', '3', '4'];

  const only4firstIDs = simpsons.filter(({ id }) => idsToRetrieve.includes(id));

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(only4firstIDs));
}
