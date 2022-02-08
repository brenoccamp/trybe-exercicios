const fs = require('fs').promises;
const readline = require('readline');

function question(message) {
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

async function startScript() {
  const fileName = await question("Type the file's name you want to read: ");

  const originalContent = await fs.readFile(fileName, 'utf-8')
    .catch((err) => {
      console.log(err.message);
      return false;
    });
  
  if (!originalContent) return;

  console.log(originalContent);

  const oldWord = await question('Type the word to replace: ');
  const newWord = await question('Type the new word to insert: ');

  const newContent = originalContent.replace(new RegExp(oldWord, 'g'), newWord);
  console.log('Replacement result: ');
  console.log(newContent);

  const fileDestiny = await question("Type file's destiny name: ");
  await fs.writeFile(fileDestiny, JSON.stringify(newContent));
}

startScript();