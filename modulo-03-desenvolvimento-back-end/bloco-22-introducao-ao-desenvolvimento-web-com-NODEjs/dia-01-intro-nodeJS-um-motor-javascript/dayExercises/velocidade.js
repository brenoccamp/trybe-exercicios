const readline = require('readline-sync');

const range = readline.questionInt('Tell me the distance covered in meters:');
const time = readline.questionInt('Tell me the time in seconds:');

const calcAverageSpeed = () => {
  console.log(`The average speed is: ${range/time}m/s`);
}

calcAverageSpeed();