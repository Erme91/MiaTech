import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        completeTodo: (state, action) => {
            const todo = state.todos.find(t => t.id === action.payload);
            if (todo) {
                todo.completed = true;
            }
        },
    },
});

export const { addTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;