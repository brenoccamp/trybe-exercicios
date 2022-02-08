// 5
const fs = require('fs').promises;
// 5.1 - Using Promise.all to manipulate many files at the same time
async function usingPromiseAll() {
  const arrayOfStrings = ['Finally', "I'm", 'using', 'Promise.all', '!!!'];
// 5.2
  const createFilePromises = arrayOfStrings.map((string, index) => {
    fs.writeFile(`./exercise5.2File${index + 1}.txt`, string);
  });
// 5.3
  await Promise.all(createFilePromises);

  const fileNames = [
    'exercise5.2File1.txt',
    'exercise5.2File2.txt',
    'exercise5.2File3.txt',
    'exercise5.2File4.txt',
    'exercise5.2File5.txt',
  ];

  const fileContents = await Promise.all(fileNames.map((fileName) => fs.readFile(fileName, 'utf-8')));
  const newFileContent = fileContents.join(' ');
  await fs.writeFile('exercise5.3FileAll.txt', JSON.stringify(newFileContent));
}

usingPromiseAll();