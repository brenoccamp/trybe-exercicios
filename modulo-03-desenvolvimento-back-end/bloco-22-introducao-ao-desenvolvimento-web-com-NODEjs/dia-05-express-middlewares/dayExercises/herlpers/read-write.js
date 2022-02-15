const fs = require('fs').promises;

const readFile = async (filename) => {
  try {
    const fileContent = await fs.readFile(filename, 'utf-8');
    return JSON.parse(fileContent);
  } catch (e) {
    console.error(e.message);
  }
}

const writeFile = async (filename, newfile) => {
  try {
    await fs.writeFile(filename, JSON.stringify(newfile, null, '\t'));
  } catch (e) {
    console.error(e.message)
  }
}

module.exports = {
  readFile,
  writeFile
}