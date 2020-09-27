import React, { useState, useEffect } from 'react';
import firebase from 'firebase';

import db from '../../database/config';

import './styles.scss';
import TodoItem from '../TodoItem';

const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = event => {
        event.preventDefault();

        db.collection('todos').add({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('');
    }

    const deleteTodo = (todo) => {
        db.collection('todos').doc(todo).delete();
    }

    useEffect(() => {
        db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })));
        })
    }, []);

    return (
        <main className='container'>
            <div className='content'>
                <h1>Let's plan</h1>
                <form className="form">
                    <div className="input-box">
                        <input type='text' placeholder='Insert a new task' value={input} onChange={event => setInput(event.target.value)} />
                        <button disabled={!input} type="submit" onClick={addTodo}>Add todo</button>
                    </div>
                </form>
                <ul>
                    {todos.map(todo => (
                        <TodoItem todo={todo.todo} id={todo.id} deleteTodo={deleteTodo} key={todo.id} />
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default TodoList;