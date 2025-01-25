import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Details = () => {

    const { id } = useParams();
    const [todos, setTodos] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchTodos = async (id) => {
            try {
                if (!id) {
                    setError("ID non trovato");
                    setLoading(false);
                    return;
                }

                const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error(`Todo con questo ID ${id} non è stato trovato`);
                    }
                    throw new Error(`Errore recupero dati: Status ${response.status}`);
                }

                const data = await response.json();
                setTodos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTodos(12);
    }, [id]);

    if (loading) {
        return <p>Caricamento...</p>;
    }

    if (error) {
        return <p>Errore: {error}</p>;
    }

    if (!todos) {
        return <p>Nessun todos trovato!</p>
    }

    return (
        <div>
            <h1>Dettagli dei to-do</h1>
            <p>ID: {todos.id}</p>
            <p>Title: {todos.title}</p>
            <p>Completed: {todos.completed ? "Yes" : "No"}</p>
            { }
        </div>
    )
};

export default Details