const fs = require('fs').promises;
const readline = require('readline');

const question = (message) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();

      resolve(answer);
    });
  });
}

const startScript = async () => {
  const fileName = await question("Type the file's path you want to read: ");

  try {
    const fileContent = await fs.readFile(fileName, 'utf-8');
    console.log(fileContent);
  } catch (err) {
    console.log('No such file or directory!');
  }
}

startScript();