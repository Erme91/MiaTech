import React, { useEffect } from "react";
import { useMemo } from "react";

const TodoList = () => {
    const filteredTodos = useMemo(() => {
        return todos.filter(todo => todo.status === filter);
    }, [todos, filter]);

    return (
        <ul>
            {filteredTodos.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;