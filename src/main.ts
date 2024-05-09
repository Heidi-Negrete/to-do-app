import Todos, {ToDo} from "./todos.ts";

// Setup ToDoList
const ToDoList = new Todos();

// Example Todos
ToDoList.add("Polish teeth", "personal");
ToDoList.add("Pet Cactus", "personal");
ToDoList.add("Enter new to-do", "work");


const list = document.querySelector("#todos-list") as HTMLUListElement;
const form = document.querySelector("#todo-form") as HTMLFormElement;
const category = document.querySelector("#todo-category") as HTMLSelectElement;
const content = document.querySelector("#todo-title") as HTMLInputElement;
const todoCount = document.querySelector("#todo-count") as HTMLParagraphElement;
const filter = document.querySelector("#filter-category") as HTMLSelectElement;

const checkFilter = () => {
    if (filter.value === "complete") {
        return {
            items: ToDoList.getComplete(),
            count: ToDoList.getCompleteCount()
        }
    }
    else if (filter.value === "incomplete") {
        return {
            items: ToDoList.getIncomplete(),
            count: ToDoList.getIncompleteCount()
        }
    }
    else if (filter.value === "personal") {
        return {
            items: ToDoList.getPersonal(),
            count: ToDoList.getPersonalCount()
        }
    }
    else if (filter.value === "work") {
        return {
            items: ToDoList.getWork(),
            count: ToDoList.getWorkCount()
        }
    }
    else {
    // filter = all
        return {
            items: ToDoList.getAll(),
            count: ToDoList.getCount()
        }
    }
}

const render = () => {
    // Get appropriate items and item count based on active filter
    const { items, count } = checkFilter();

    todoCount.textContent = `(${count})`

    list.innerHTML = items.map( todo => {
        return `<li class="todo ${todo.getComplete() ? "complete": ""}"><span class="content">${todo.content}</span></li>`
    }).join("");

    // Each todo rendered responds to click events (marking complete/incomplete)
    const todos = document.querySelectorAll(".todo"); // What would be Type here?
    if (todos) {
        todos.forEach( todo => {
        todo.addEventListener("click", () => {
            // need to toggle ToDo item complete state
            todo.classList.toggle("complete");
            // save()
        })
    })
    }
}

try {
    render();
}
catch (error) {
    console.error(error);
}

form.addEventListener("submit", event => {
    event.preventDefault();
    if (content.value) {
    try {
        ToDoList.add(content.value, category.value); // how to narrow?
        // save()
        render();
    }
    catch (error) {
        list.innerHTML = "<p>An error occurred. Sorry. &#128546;</p>"
        console.error(error);
    }
    finally {
        content.value = "";
    }
    }
    
})

filter.addEventListener("change", () => {
    try {
        render()
    }
    catch (error) {
        console.error(error);
    }
})