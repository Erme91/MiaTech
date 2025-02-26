import { Todo, TodoStatus, TodoRecord } from "./types";
import { convertArrayToRecord } from "./utils";

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

const user1 = new User(1, "Renato", "renato@hotmail.com");
const user2 = new User(2, "Priscilla", "pri@gmail.com");
const user3 = new User(3, "Matteo", "matti@alice.it");

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

addTodoToUser(user1, "Andare in campagna");
addTodoToUser(user2, "Prenotare l'hotel");
addTodoToUser(user3, "Riparare l'auto");

function updateTodoStatus(todoId: number, status: TodoStatus): void {
    const todo = todos.find(t => t.id === todoId);

    if (todo) {
        todo.status = status;
    } else {
        console.log("Nessun todo trovato");
    }
}

const newTodos: Todo[] = [
    { id: 1, title: "Organizzare il viaggio", completed: false, status: TodoStatus.Pending },
    { id: 2, title: "Preparare la cena", completed: false, status: TodoStatus.InProgress },
    { id: 3, title: "Sistemare i DVD", completed: true, status: TodoStatus.Completed },
];

const todoRecord: TodoRecord = convertArrayToRecord(newTodos);

console.log(todoRecord);