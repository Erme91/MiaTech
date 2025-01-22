import { useCallback, useState } from "react";
import useFetch from "../hooks/useFetch";
import useFilteredTodos from "../hooks/useFilteredTodos";

const TodoList = () => {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");
    
    const [word, setWord] = useState("");

    const filteredTodos = useFilteredTodos(data,word);

    const handleSearch = useCallback((event) => {
        setWord(event.target.value)
    }, [])

    if (loading) {
        return <p>Caricamento...</p>
    }

    if (error) {
        return <p>Errore: ${error}</p>
    }

    return (
        <div>
            <h1>Lista di To-Do</h1>
            <input type="text" placeholder="Search some word..." value={word} onChange={handleSearch}/>
            <ul>
            {filteredTodos.length > 0 ? (
                    filteredTodos.map(todo => (
                        <li key={todo.id}>
                            {todo.title}
                        </li>
                    ))
                ) : (
                    <p>Nessuna corrispondenza trovata!</p>
                )}
            </ul>
        </div>
    );
}

export default TodoList