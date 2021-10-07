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
// class App extends React.Component {
//   constructor() {
//     super()
//     this.handleClick1 = this.handleClick1.bind(this);
//     this.handleClick2 = this.handleClick2.bind(this);
//     this.handleClick3 = this.handleClick3.bind(this);
//   }

//   handleClick1() {
//     console.log('clicou no botão1 e o this é: ', this);
//   }
  
//   handleClick2() {
//     console.log('clicou no botão2 e o this é: ', this)
//   }

//   handleClick3() {
//     console.log('clicou no botão3 e o this é: ', this)
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick1}>Botão1</button>
//         <button onClick={this.handleClick2}>Botão2</button>
//         <button onClick={this.handleClick3}>Botão3</button>
//       </div>
//     );

//   }

// }


// EXERCÍCIOS DE FIXAÇAO PARTE III
// class App extends React.Component {
//   constructor() {
//     super()
//     this.handleClick1 = this.handleClick1.bind(this);
//     this.handleClick2 = this.handleClick2.bind(this);
//     this.handleClick3 = this.handleClick3.bind(this);
//     this.state = {
//       numeroDeCliques1: 0,
//       numeroDeCliques2: 0,
//       numeroDeCliques3: 0,
//     }
//   }

//   handleClick1() {
//     this.setState((estadoAnterior1, _props) => ({
//       numeroDeCliques1: estadoAnterior1.numeroDeCliques1 + 1
//     }))
//   }
//   handleClick2() {
//     this.setState((estadoAnterior2, _props) => ({
//       numeroDeCliques2: estadoAnterior2.numeroDeCliques2 + 1
//     }))
//   }
//   handleClick3() {
//     this.setState((estadoAnterior3, _props) => ({
//       numeroDeCliques3: estadoAnterior3.numeroDeCliques3 + 1
//     }))
//   }

//   render() {
//     return (
//       <div>
//       <button onClick={this.handleClick1}>{this.state.numeroDeCliques1}</button>
//       <button onClick={this.handleClick2}>{this.state.numeroDeCliques2}</button>
//       <button onClick={this.handleClick3}>{this.state.numeroDeCliques3}</button>
//       </div>
//     )
//   }
// }

// EXERCÍCIOS DE FIXAÇAO PARTE IIII
class App extends React.Component {
  constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }
  }

  setButtonColor(numOfClicks) { // Essa função não precisa do bind pois ela é usada apenas dentro do render() que está no contexto do componente App
    return numOfClicks % 2 === 0 ? 'green' : 'white'
  }

  handleClick1() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
    }))
  }

  handleClick2() {
    this.setState(({ numeroDeCliques2 }) => ({
      numeroDeCliques2: numeroDeCliques2 + 1
    }))
  }

  handleClick3() {
    this.setState((estadoAnterior3, _props) => ({
      numeroDeCliques3: estadoAnterior3.numeroDeCliques3 + 1
    }))
  }

  render() {
    const { numeroDeCliques1, numeroDeCliques2, numeroDeCliques3 } = this.state;
    return (
      <div>
      <button onClick={this.handleClick1} style={{ backgroundColor: this.setButtonColor(numeroDeCliques1) }}>{numeroDeCliques1}</button>
      <button onClick={this.handleClick2} style={{ backgroundColor: this.setButtonColor(numeroDeCliques2)}}>{numeroDeCliques2}</button>
      <button onClick={this.handleClick3} style={{ backgroundColor: this.setButtonColor(numeroDeCliques3)}}>{numeroDeCliques3}</button>
      </div>
    )
  }
}

export default App;
