import React, { useState } from 'react';
import useArray from '../hooks/useArray';
import TodoList from './TodoList';

function InputTodos() {
  const [typedText, setText] = useState('');
  const { addTodos, todos, removeTodo } = useArray();

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodos(typedText);
    setText('');
  }

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          placeholder="Escreva uma tarefa"
          value={ typedText }
          onChange={ ({ target }) => setText(target.value) }
        />
        <button
          type="submit"
        >
          Adicionar tarefa
        </button>
      </form>
      <TodoList tasks={ todos } removeTodo={ removeTodo } />
    </div>
  );
}

export default InputTodos;
