import React, { useEffect } from "react";
import { useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoList = () => {
    const { todos } = useContext(TodoContext);

    return (
        <div>
            <h1>Lista di To-Do</h1>
            <ul>
                {todos.length > 0 ? (
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <strong>{todo.completed ? "yes" : "no"} </strong>
                            {todo.title}
                        </li>
                    ))
                ) : (
                    <p>Nessun to-do disponibile.</p>
                )}
            </ul>
        </div>
    );
};

export default TodoList;