import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "./slices/todoReducer";

export default configureStore ({
    reducer: {
        todos: todoReducer,
    }
})