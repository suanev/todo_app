import React from 'react';
import { FaTrash } from 'react-icons/fa';

import './styles.scss';
import truncate from '../../utils/truncate';

const TodoItem = ({ todo, id, deleteTodo }) => (
    <li>
        <p>{truncate(todo, 100)}</p>
        <FaTrash icon='trash' onClick={() => deleteTodo(id)} />
    </li>
);

export default TodoItem;