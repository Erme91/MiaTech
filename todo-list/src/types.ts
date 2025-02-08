export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    userId?: number;
};

export interface User {
    id: number;
    name: string;
    email?: string;
};

export interface TodoWithMetadata extends Todo {
    metadata: number;
};

const todo: TodoWithMetadata = {
    id: 2,
    title: "Prove",
    completed: true,
    metadata: 11,
}