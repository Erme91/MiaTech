import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Details = () => {

    const { id } = useParams();
    const [todo, setTodo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchTodo = async (id) => {
            try {
                if (!id) {
                    setError("ID non trovato");
                    setLoading(false);
                    return;
                }

                const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
                if (!response.ok) {
                    if (response.status === 404) {
                        setError("Todo non trovato");
                    } else {
                        setError("Errore recupero dati");
                    }
                    setLoading(false);
                    return;
                }

                    const data = await response.json();
                    setTodo(data)
                    setLoading(false);
                } catch (err) {
                    setError("Errore");
                    setLoading(false);
                }
            };

            fetchTodo(id);
        }, [id]);

    if (loading) {
        return <p>Caricamento...</p>;
    }

    if (error) {
        return <p>Errore: {error}</p>;
    }

    if (!todo) {
        return <p>Nessun todos trovato!</p>
    }

    return (
        <div>
            <h1>Dettagli dei to-do</h1>
            {
                todo && (
                    <div>
                        <h3>{todo.title}</h3>
                        <p>{todo.id}</p>
                        <p>{todo.completed ? "Yes" : "No"}</p>
                    </div>
                )}
        </div>
    )
};

export default Details