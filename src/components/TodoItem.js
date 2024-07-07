import React from 'react';

const TodoItem = ({ todo, index, deleteTodo }) => (
  <li className="todo">
    {todo.text}
    <button onClick={() => deleteTodo(index)}>Delete</button>
  </li>
);

export default TodoItem;
