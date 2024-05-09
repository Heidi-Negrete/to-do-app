/*export type Category = "work" | "personal"; */
export class ToDo {
    #isComplete: boolean;

    constructor(public content: string, public category: string /*Category*/) {
        this.#isComplete = false;
    }

    toggleComplete(): void {
        this.#isComplete = !this.#isComplete;
    }

    getComplete(): boolean {
        return this.#isComplete;
    }
}

export default class Todos {
    todos: ToDo[]; // refactor to map with first field ID and second field the todo object?
    // #toDoIndex: number; this is not the best way to generate ids.

    constructor() {

        this.todos = [];
        //this.#toDoIndex = 0;
    }

    getAll(): ToDo[] {
        return this.todos;
    }

    getCount(): number {
        return this.todos.length;
    }

    add(content: string, category: string/*Category*/): void {
        // const id = this.#toDoIndex
        this.todos.push(new ToDo(
            content,
            category,
        ))
       // this.#toDoIndex ++;
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
        return this.todos.filter( todo => todo.getComplete());
    }

    getCompleteCount(): number {
        return this.getComplete().length;
    }

    getIncomplete(): ToDo[] {
        return this.todos.filter( todo => !todo.getComplete());
    }

    getIncompleteCount(): number {
        return this.getIncomplete().length;
    }
}