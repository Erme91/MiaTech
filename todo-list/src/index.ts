import { Todo, TodoStatus } from "./types";

class User {
    id: number;
    name: string;
    email?: string;
    todos: Todo[];

    constructor(id: number, name: string, email?: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.todos = [];
    }

    addTodo(todo: Todo): void {
        this.todos.push(todo);
    }
}

const todos: Todo[] = [];
let newId = 1;

function addTodoToUser(user: User, title: string): void {
    const newTodo: Todo = {
        id: newId++,
        title,
        completed: false,
        status: TodoStatus.Pending
    };
    user.addTodo(newTodo);
}

function updateTodoStatus(todoId: number, status: TodoStatus): void {
    const todo = todos.find(t => t.id === todoId);

    if (todo) {
        todo.status = status;
    } else {
        console.log("Nessun todo trovato");
    }
}