import { useEffect } from "react";
import { createContext, useState, useContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                const data = await response.json();
                setTodos(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchTodos();
    }, []);

    const updateTodos = (newTodos) => {
        setTodos([...todos, newTodos]);
    }

    return (
        <TodoContext.Provider value={{ todos, updateTodos }}>
            {children}
        </TodoContext.Provider>
    );
};