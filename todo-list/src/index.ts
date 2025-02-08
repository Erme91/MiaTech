import { Project, Todo, User } from "./types";

function createProject(id: number, name: string, users: User[], todos: Todo[]) : Project {
    return {
        id,
        name,
        users,
        todos
    };
}

const users: User[] = [{ id: 1, name: "Carolina" }];
const todos: Todo[] = [{ id: 1, title: "Terminare un dipinto", completed: true }];

const project = createProject(1, "Quadri", users, todos);
console.log(project);