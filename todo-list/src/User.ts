class Todo {
    title: string;
    completed: boolean;

    constructor(title: string, completed: boolean = false) {
        this.title = title;
        this.completed = completed;
    }
}

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