export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    status: TodoStatus;
};

export interface User {
    id: number;
    name: string;
    email?: string;
};

export interface Project {
    id: number;
    name: string;
    users: User[];
    todos: Todo[];
}

export enum TodoStatus {
    Pending,
    InProgress,
    Completed,
}

export type PartialTodo = Partial<Todo>;