import React from 'react';

// EXERCÍCIOS DE FIXAÇÃO PARTE I

// function handleClick1() {
//   console.log('Clicou no botão 1')
// }

// function handleClick2() {
//   console.log('Clicou no botão 2')
// }

// function handleClick3() {
//   console.log('Clicou no botão 3')
// }

// class App extends React.Component {
//   /* Repare que, diferentemente do HTML, no
//   JSX você associa uma função a um evento
//   passando a própria função entre chaves `{}` */
//   render() {
//     return (
//       <div>
//       <button onClick={handleClick1}>Botão1</button>
//       <button onClick={handleClick2}>Botão2</button>
//       <button onClick={handleClick3}>Botão3</button>
//       </div>
//     )
//   }
// }


// EXERCÍCIOS DE FIXAÇAO PARTE II

class App extends React.Component {
  constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick1() {
    console.log('clicou no botão1 e o this é: ', this);
  }
  
  handleClick2() {
    console.log('clicou no botão2 e o this é: ', this)
  }

  handleClick3() {
    console.log('clicou no botão3 e o this é: ', this)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick1}>Botão1</button>
        <button onClick={this.handleClick2}>Botão2</button>
        <button onClick={this.handleClick3}>Botão3</button>
      </div>
    );

  }

}

export default App;
