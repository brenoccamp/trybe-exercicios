function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
//   Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const ulDays = document.getElementById('days');

function createLiDay () {
    let ulDays = document.getElementById('days');
    for (let index = 0; index < dezDaysList.length; index += 1) {
    const daysLi = dezDaysList[index];
    const days = document.createElement('li');
    days.className = 'day';
    days.innerHTML = daysLi;
    ulDays.appendChild(days);
    if (daysLi === 24 || daysLi === 31) {
        days.classList.add('holiday');
    } else if (daysLi === 4 || daysLi === 11 || daysLi === 18) {
        days.classList.add('friday');
    } else if (daysLi === 25) {
      days.classList.add('holiday', 'friday');
    } 
  }
}
createLiDay ();

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function holidays (string) {
  let newButton = document.createElement('button');
  newButton.innerHTML = string;
  newButton.id = 'btn-holiday';
  let callDivButtons = document.querySelector('.buttons-container');
  callDivButtons.appendChild(newButton);
}
holidays ('Feriados');

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".
function styleBtnHoliday () {
  let callHolidayButton = document.querySelector('#btn-holiday');
  let getAllHolidays = document.querySelectorAll('.holiday');
  let newColor = 'white';
  let setPreviousColor = 'rgb(238,238,238)';

  callHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getAllHolidays.length; index += 1) {
      if (getAllHolidays[index].style.backgroundColor === newColor) {
        getAllHolidays[index].style.backgroundColor = setPreviousColor;
      } else {
        getAllHolidays[index].style.backgroundColor = newColor;
      }
    }
  });
}
styleBtnHoliday ();

