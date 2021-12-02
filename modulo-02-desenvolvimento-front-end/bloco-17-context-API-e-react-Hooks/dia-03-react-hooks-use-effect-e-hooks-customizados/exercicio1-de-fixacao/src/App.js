import React from 'react';
import UserTimer from './hooks/userTimer';
import './App.css';


function App() {
  const { number, isMultiple, timer } = UserTimer();

  return (
    <div className="App">
      <h1>{`Número aleatório: ${number}`}</h1>
      <h2>{isMultiple && 'Acerto'}</h2>
      <h3>Tempo: { timer }</h3>
    </div>
  );
}

export default App;
