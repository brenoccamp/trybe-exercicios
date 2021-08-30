const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// const lessonMat = 'dia';
// lesson3[lessonMat] = 'noite'
// console.log(lesson3)

// 1 - Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const newShift = (obj, key, value) => {
  obj[key] = value;
  // console.log(obj)
}
newShift(lesson2, 'turno', 'noite');

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeys = (obj) => Object.keys(obj);
// console.log(listKeys(lesson3))

// 3 - Crie uma função para mostrar o tamanho de um objeto.
const objLength = obj => Object.keys(obj).length;
// console.log(objLength(lesson1));

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const objValues = obj => Object.values(obj);
// console.log(objValues(lesson2));

// 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte: 
/*
console.log(allLessons);
{
lesson1:
  { materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã' },
lesson2:
  { materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'noite' },
lesson3:
  { materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite' }
};
*/
const newObj = Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(newObj);

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const totalStudents = obj => {
  let countStudents = 0;
  const arrayObjects = Object.keys(obj);
  for (let index in arrayObjects) {
    countStudents += obj[arrayObjects[index]].numeroEstudantes;
  }
  return countStudents;
}
// console.log(totalStudents(newObj));

// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'
const getValueOfKey = (obj, key) => Object.values(obj)[key];
// console.log(getValueOfKey(lesson2, 3))

// 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
// console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
const verifyKeyAndValue = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
}
// console.log(verifyKeyAndValue(lesson2, 'materia', 'História'));

// ------BÔNUS------
// 1 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
const countViwersOfClass = obj => {
  let totalViwers = 0;
  const keysOfObj = Object.keys(obj);
  for (let index in keysOfObj) {
    if (obj[keysOfObj[index]].materia === 'Matemática') totalViwers += obj[keysOfObj[index]].numeroEstudantes;
  }
  return totalViwers
}
// console.log(countViwersOfClass(newObj));

// 2 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
/*
console.log(createReport(allLessons, 'Maria Clara'))
{
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */
const getInfo = (obj, teacher) => {
  const allLessons = [];
  let allStudent = 0;
  const arrayOfValues = Object.values(obj);
  for (let index in arrayOfValues) {
    if (arrayOfValues[index].professor === teacher) {
      allLessons.push(arrayOfValues[index].materia);
      allStudent += arrayOfValues[index].numeroEstudantes;
    }
  }
  return {materia: allLessons, estudantes: allStudent};
}

const createReport = (newObj, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(newObj, name));
  return report;
}
// console.log(createReport(newObj, 'Carlos'));