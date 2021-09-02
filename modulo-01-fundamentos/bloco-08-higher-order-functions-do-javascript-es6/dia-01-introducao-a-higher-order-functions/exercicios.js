// Agora a prática
// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada.Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id.A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.
//   Copiar
const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
const newEmployee = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return {fullName, email: `${email}@trybe.com`};
};

console.log(newEmployees(newEmployee));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio.Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado.O retorno da sua HOF deve ser uma string(Ex: "Tente novamente" ou "Parabéns você ganhou").
const checkResult = (myNumber2, aleatoryNumber2) => myNumber2 === aleatoryNumber2;
const drawResult = (myNumber, callback) => {
  const aleatoryNumber = Math.ceil(Math.random() * 5);
  return callback(myNumber, aleatoryNumber) ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(drawResult(1, checkResult));
// 3 - Crie uma HOF que receberá três parâmetros.O primeiro será um array de respostas corretas(Gabarito), o segundo será um array de respostas a serem verificadas(respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante.Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta("N.A") não altera - se a contagem.
//   Copiar
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const testGrade = (template, studentAnswer, func) => {
  let contador = 0;
  for (let i = 0; i < template.length; i += 1) {
    const compareAnswers = func(template[i], studentAnswer[i]);
    contador += compareAnswers;
  }
  return `Sua nota é: ${contador}`;
};

const func = (param1, param2) => {
  if (param1 === param2) {
    return 1;
  } if (param2 === 'N.A') {
    return 0;
  }
  return -0.5;
};

console.log(testGrade(RIGHT_ANSWERS, STUDENT_ANSWERS, func));
