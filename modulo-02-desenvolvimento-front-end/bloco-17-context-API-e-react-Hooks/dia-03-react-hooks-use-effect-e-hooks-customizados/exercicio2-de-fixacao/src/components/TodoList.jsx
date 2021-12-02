import PropTypes from 'prop-types';
import React from 'react';

function TodoList({ tasks, removeTodo }) {
  const readyToRender = tasks.length > 0;
  return (
    <ul>
      {readyToRender && tasks.map((todo, index) => {
        const id = Math.random().toString(16).substr(2, 9);
        return (
          <li
            key={id}
            id={index}
            onClick={(event) => removeTodo(event)}
            >
              {todo}
            </li>
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  removeTodo: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export default TodoList;
