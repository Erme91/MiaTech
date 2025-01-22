import { useEffect, useState, useMemo } from "react";

const useFilteredTodos = (todos, filter, word) => {
    const filteredTodos = useMemo(() => {
        if (!todos) return [];

        let result = todos;

        if (filter === "completed") {
            result = result.filter(todo => todo.completed);
        } else if (filter === "not_completed") {
            result = result.filter(todo => !todo.completed);
        }

    if (word) {
        result = result.filter(todo =>
            todo.title.toLowerCase().includes(word.toLowerCase())
        );
    }

    return result
}, [todos, word, filter]);

return filteredTodos
};

export default useFilteredTodos