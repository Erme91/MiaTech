import { Todo, TodoStatus } from "./types";

const todos: Todo[] = []

let newId = 1;

function addTodo(title: string): void {
    const newTodo: Todo = {
        id: newId++,
        title,
        completed: false,
        status: TodoStatus.Pending
    }

    todos.push(newTodo)
}

addTodo("Added new Todo");

function updateTodoStatus(todoId: number, status: TodoStatus) : void {
    const todo= todos.find(t => t.id === todoId)

    if(todo) {
        todo.status = status
    } else {
        console.log("Nessun todo trovato")
    }
}

updateTodoStatus(1, TodoStatus.Completed)