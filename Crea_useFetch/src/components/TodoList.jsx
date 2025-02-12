import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { completeTodo } from "../store/slices/todoReducer";

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    console.log("Stato Redux:", todos);

    return (
        <div>
            <h2>To-Do List</h2>
            <ul>
                {Array.isArray(todos) && todos.map(todo => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                        <span>
                            {todo.title}
                        </span>
                        <button
                            onClick={() => dispatch(completeTodo(todo.id))}
                            disabled={todo.completed}
                        >
                            Completa
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;