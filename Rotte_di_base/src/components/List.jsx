import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const List = () => {
    const [todos, setTodos] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
                if (!response.ok) {
                    throw new Error("Errore nel caricamento dei dati");
                }
                const data = await response.json();
                setTodos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false); 
            }
        };

        fetchTodos();
    }, []); 


    if (loading) {
        return <p>Caricamento...</p>;
    }

    if (error) {
        return <p>Errore: {error}</p>;
    }

    return (
        <div>
            <h1>Lista di To-Do</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <Link to={`/todos/${todo.id}`}>
                        <strong>{todo.completed ? "yes" : "not"} </strong>
                        {todo.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List