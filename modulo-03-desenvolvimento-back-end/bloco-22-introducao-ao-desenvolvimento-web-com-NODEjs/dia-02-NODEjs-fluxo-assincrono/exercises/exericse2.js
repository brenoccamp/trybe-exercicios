const exercise1Func = require('./exercise1');

const aleatoryNumber = () => Math.floor(Math.random() * 100 + 1);

const param1 = aleatoryNumber();
const param2 = aleatoryNumber();
const param3 = aleatoryNumber();

exercise1Func(param1, param2, param3).then((res) => console.log(res)).catch((err) => console.log(err.message));