import { useCallback, useState, useRef, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import useFilteredTodos from "../hooks/useFilteredTodos";

const TodoList = () => {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");
    
    const [todos, setTodos] = useState([]);

    const [filter, setFilter] = useState("all");

    const [word, setWord] = useState("");

    const filteredTodos = useFilteredTodos(todos, filter, word);

    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus()
    }

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
            <input ref={inputRef} type="text" placeholder="Search some word..." value={word} onChange={handleSearch}/>
            <button onClick={handleFocus}>Click to focus</button>
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