import React from 'react';

function handleClick1() {
  console.log('Clicou no botão 1')
}

function handleClick2() {
  console.log('Clicou no botão 2')
}

function handleClick3() {
  console.log('Clicou no botão 3')
}

class App extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  render() {
    return (
      <div>
      <button onClick={handleClick1}>Botão1</button>
      <button onClick={handleClick2}>Botão2</button>
      <button onClick={handleClick3}>Botão3</button>
      </div>
    )
  }
}

export default App;
