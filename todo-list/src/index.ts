import { Todo } from "./types";

const todos: Todo[] = [];

let newId = 1;

function addTodo(title: string, metadata?: any): void {
    const newTodo: Todo = {
        id: newId++,
        title: title,
        completed: false,
        metadata: metadata
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

assignTodoToUser(1, 1);

function getUserTodos(userId: number): Todo[] {
    return todos.filter(todo => todo.userId === userId)
}

addTodo("Andare al supermercato");
assignTodoToUser(1, 5);

addTodo("Fare una ricerca sull'Enciclopedia");
assignTodoToUser(2, 5);

getUserTodos(5);

function error(message: string): never {
    throw new Error (message)
}

error("Attenzione, qualcosa è andato storto!");

function parseInput(input: unknown) {
    if(typeof input === "string") {
        return `Il tipo di dato ${input} è una stringa`
    } else if (typeof input === "number") {
        return `Il tipo di dato è un numero, il ${input}` 
    } else {
        throw new Error (`Questo tipo di dato non è supportato (${typeof input})`)
    }
};

(parseInput("Messaggio"))