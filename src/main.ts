import Todos, {type ToDo} from "./todos.ts";

const ToDoList = new Todos();

// Example Todos
ToDoList.add("Polish teeth", "personal");
ToDoList.add("Pet Cactus", "work");

console.log(ToDoList.getAll());
console.log(ToDoList.getComplete());