import useFetch from "../hooks/useFetch";

const TodoList = () => {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");

    if (loading) {
        return <p>Caricamento...</p>
    }

    if (error) {
        return <p>Errore: ${error}</p>
    }

    return (<div>
        <h1>Lista di To-Do</h1>
        <ul>
            {data && data.map(todo => (
                <li key={todo.id}>
                    {todo.title}
                </li>
            ))}
        </ul>
    </div>
    );
}

export default TodoList