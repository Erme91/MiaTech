import { Todo } from "./types";

const todos: Todo[] = [];

let newId = 1;

function addTodo(title: string): void {
    const newTodo: Todo = {
        id: newId++,
        title: title,
        completed: false
    }
    todos.push(newTodo)
}

addTodo("List")