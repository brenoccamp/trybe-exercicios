// Exercise 5 - Implement the function descibred in exercise 4.
const fs = require('fs');

const writingInAFile = (file, content) => {
  try {
    fs.writeFileSync(file, content);
    return 'ok';
  } catch (err) {
    console.log(err);
  }
}

module.exports = writingInAFile;