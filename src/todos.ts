export type Category = "work" | "personal";

export type ToDo = {
    content: string,
    category: Category,
    isComplete: boolean
}

export default class Todos {
    todos: ToDo[];

    constructor() {

        this.todos = [];
    }

    getAll(): ToDo[] {
        return this.todos;
    }

    getCount(): number {
        return this.todos.length;
    }

    add(content: string, category: Category, isComplete: boolean = false): void {
        this.todos.push({
            content,
            category,
            isComplete
        })
    }

    getWork(): ToDo[] {
        return this.todos.filter( todo => todo.category === "work");
    }

    getWorkCount(): number {
        return this.getWork().length;
    }

    getPersonal(): ToDo[] {
        return this.todos.filter( todo => todo.category === "personal");
    }

    getPersonalCount(): number {
        return this.getPersonal().length;
    }

    getComplete(): ToDo[] {
        return this.todos.filter( todo => todo.isComplete);
    }

    getIncomplete(): ToDo[] {
        return this.todos.filter( todo => !todo.isComplete);
    }
}