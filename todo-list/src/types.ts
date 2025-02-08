export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    userId?: number;
    metadata: any
};

export interface User {
    id: number;
    name: string;
    email?: string;
};

interface TodoWithMetadata {
    metadata: any
}

type OtherTodo = TodoWithMetadata & Todo