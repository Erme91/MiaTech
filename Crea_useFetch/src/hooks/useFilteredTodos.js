import { useEffect, useState } from "react";

const useFilteredTodos = (todos, word) => {
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        if (word) {
            const filtered = todos.filter(todo =>
                todo.title.toLowerCase().includes(word.toLowerCase()));
            setFilteredTodos(filtered);
        } else {
            setFilteredTodos(todos)
        }
    }, [todos, word]);

    return filteredTodos
}

export default useFilteredTodos