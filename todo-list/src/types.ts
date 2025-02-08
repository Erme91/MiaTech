export interface Todo {
    id: number;
    title: string;
    completed: boolean;
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