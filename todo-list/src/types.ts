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
    readonly todos: ReadonlyArray<Todo>;
};

interface TodoWithMetadata {
    metadata: any
}

type OtherTodo = TodoWithMetadata & Todo