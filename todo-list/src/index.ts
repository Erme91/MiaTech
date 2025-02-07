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

addTodo("List");

function assignTodoToUser(todoId: number, userId: number): void {
    const todo = todos.find(t => t.id === todoId)

    if(!todo) {
        console.log("Nessun todo trovato");
        return
    }
    
    todo.userId = userId
}

assignTodoToUser(1, 1)