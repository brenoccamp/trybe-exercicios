const action1 = (nome, sobrenome) => ({
  type: "ACTION1",
  nome,
  sobrenome,
});

const action2 = (nome, sobrenome) => ({
  type: "ACTION2",
  nome,
  sobrenome,
});

const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case "ACTION1":
      return {
        ...state,
        nome: action.nome,
        sobrenome: action.sobrenome,
      }
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case "ACTION2":
      return {
        ...state,
        nome: action.nome,
        sobrenome: action.sobrenome,
      }
    default:
      return state;
  }
};

const combinedReducers = Redux.combineReducers({
  meuPrimeiroReducer,
  meuSegundoReducer,
})

const store = Redux.createStore(combinedReducers);

window.onload = () => {
  setTimeout(() => {
    store.dispatch(action1('Luan', 'Cordeiro de Lima'));
    store.dispatch(action2('Mayara', 'Fernandes de Barros'));
  }, 3000);
}

store.subscribe(() => {
  const { meuPrimeiroReducer, meuSegundoReducer } = store.getState();
  document.getElementById('nome-1').innerHTML = meuPrimeiroReducer.nome;
  document.getElementById('sobrenome-1').innerHTML = meuPrimeiroReducer.sobrenome;

  document.getElementById('nome-2').innerHTML = meuSegundoReducer.nome;
  document.getElementById('sobrenome-2').innerHTML = meuSegundoReducer.sobrenome;
})
