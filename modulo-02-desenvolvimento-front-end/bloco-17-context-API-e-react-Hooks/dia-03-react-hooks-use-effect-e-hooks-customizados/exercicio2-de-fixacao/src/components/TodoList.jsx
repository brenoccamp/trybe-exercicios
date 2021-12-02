import React from 'react';

function TodoList({ tasks, removeTodo }) {
  const readyToRender = tasks.length > 0;
  return (
    <ul>
      {readyToRender && tasks.map((todo) => {
        const id = Math.random().toString(16).substr(2, 9);
        return (
          <li
            key={id}
            onClick={(event) => removeTodo(event)}
            value={todo}
            >
              {todo}
            </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
