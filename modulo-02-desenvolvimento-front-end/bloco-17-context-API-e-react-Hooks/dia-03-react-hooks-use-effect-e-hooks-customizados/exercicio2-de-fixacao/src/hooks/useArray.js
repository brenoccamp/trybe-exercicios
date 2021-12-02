import { useState } from 'react';

const useArray = () => {
  const [todos, setTodos] = useState([]);

  const addTodos = (userInput) => {
    setTodos(todos.concat(userInput));
  }

  const removeTodo = ({ target }) => {
    const newArray = todos.filter((todo) => todo !== target.innerText);
    setTodos(newArray);
  }

  return { todos, addTodos, removeTodo };
}

export default useArray;
