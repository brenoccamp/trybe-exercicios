import { useState } from 'react';

const useArray = () => {
  const [todos, setTodos] = useState([]);

  const addTodos = (userInput) => {
    setTodos(todos.concat(userInput));
  }

  const removeTodo = ({ target }) => {
    const { id } = target;
    const newArray = todos.slice(0, id).concat(todos.slice(Number(id) + 1));
    setTodos(newArray);
  }

  return { todos, addTodos, removeTodo };
}

export default useArray;
