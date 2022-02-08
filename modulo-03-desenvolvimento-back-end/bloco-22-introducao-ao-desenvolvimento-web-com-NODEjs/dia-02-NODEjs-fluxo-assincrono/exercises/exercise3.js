const exercise1Func = require('./exercise1');

async function exercise3() {
  const aleatoryNumber = () => Math.floor(Math.random() * 100 + 1);

  const param1 = aleatoryNumber();
  const param2 = aleatoryNumber();
  const param3 = aleatoryNumber();

  try {
    const result = await exercise1Func(param1, param2, param3); // -> Subtituimos o .then pelo await
    console.log(result);
  } catch (err) { // -> Substituimos o tratamento de erro (.catch) pela estrutura try...catch
    console.error(err);
  }
}

exercise3();