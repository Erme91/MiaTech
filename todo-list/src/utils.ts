import { Todo, PartialTodo, TodoStatus, TodoRecord } from "./types";

let todos: Todo[] = [
    { id: 1, title: "Andare in biblioteca", completed: false, status: TodoStatus.Pending },
    { id: 2, title: "Acquistare una torta", completed: false, status: TodoStatus.InProgress },
    { id: 3, title: "Completare il progetto", completed: true, status: TodoStatus.Completed },
];

export function filterTodos<T>(todos: T[], filterFn: (todo: T) => boolean): T[] {
    return todos.filter(filterFn);
}

export function updatePartialTodo(todoId: number, updatedTodo: PartialTodo): void {
    const todo = todos.find(t => t.id === todoId);
    
    if (todo) {
        Object.assign(todo, updatedTodo);
    } else {
        console.log("Nessun todo presente");
    }
}

export function convertArrayToRecord(todos: Todo[]): TodoRecord {
    return todos.reduce((record, todo) => {
        record[todo.id] = todo;
        return record;
    }, {} as TodoRecord);
}