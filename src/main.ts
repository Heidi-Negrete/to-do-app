import Todos, {type ToDo} from "./todos.ts";

// Setup ToDoList
const ToDoList = new Todos();
// Example Todos
ToDoList.add("Polish teeth", "personal");
ToDoList.add("Pet Cactus", "work");

const list = document.querySelector("#todos-list") as HTMLUListElement;
const form = document.querySelector("#todo-form") as HTMLFormElement;