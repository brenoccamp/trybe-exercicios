const getInputData = document.getElementById('input-data');
const getButton = document.querySelector('#submit');
const estado = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RR', 'RO', 'RJ', 'RN', 'RS', 'SC', 'SP', 'SE', 'TO',];

function generateOption() {
  for (let index = 0; index < estado.length; index += 1) {
    let getEachState = estado[index];
    const newOption = document.createElement('option');
    newOption.innerText = getEachState;
    const getSelectState = document.querySelector('#select-estado');
    getSelectState.appendChild(newOption);
  }
}
generateOption();

function checkData(event) {
  event.preventDefault();
  let dataValue = getInputData.value;
  const day = parseInt(dataValue.substring(0, 2)) || '';
  const month = parseInt(dataValue.substring(3, 5)) || '';
  const year = parseInt(dataValue.substring(6, 10)) || '';
  if (typeof(day) !== 'number' || typeof(month) !== 'number' || typeof(year) !== 'number') {
    alert('ERRO: A DATA precisa ter o seguinte formato: "dd/mm/aaaa" e conter somente NUMEROS entre as barras.');
  }
  if (day < 0 || day > 31) {
    alert('ERRO: O dia da Data precisa estar entre 1 e 31.');
  } else if (month < 0 || month > 12) {
    alert('ERRO: O mês da Data precisa estar entre 1 e 12');
  } else if (year < 0) {
    alert('ERRO: O ano da Data precisa ser positivo');
  }
}
// Verifica se os dados dos <input> foram preenchidos.
function verifyPersonDice() {
  const getAllInput = document.querySelectorAll('input');
  for (let index = 0; index < getAllInput.length; index += 1) {
    console.log(getAllInput[index]);
    if (getAllInput[index].value === '') {
      alert(`O campo '${getAllInput[index].name}' precisa ser preenchido.`)
    }
  }
}

// Verifica se os dados dos <textarea> foram preenchidos.
function verifyCurriculumDice() {
  const getAllTextarea = document.querySelectorAll('textarea');
  for (let index = 0; index < getAllTextarea.length; index += 1) {
    if (getAllTextarea[index].value === '') {
      alert(`O campo '${getAllTextarea[index].name}' precisa ser preenchido.`)
    }
  }
}

getButton.addEventListener('click', checkData);
getButton.addEventListener('click', verifyPersonDice)
getButton.addEventListener('click', verifyCurriculumDice)

document.getElementById('input-data').DatePickerX.init();
window.DatePickerX.setDefaults(format)
