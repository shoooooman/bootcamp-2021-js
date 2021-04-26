import { getTodos, addTodo } from "./api.js"
import { renderTodoItem } from "./view/index.js"
import Todo from "./component/todo.js"

const main = async () => {
  const { todoList } = await getTodos();

  todoList.forEach(item => {
    const todo = new Todo(item);
    renderTodoItem(todo);
  });

  const addButton = document.getElementById("todoAddButton");
  addButton.addEventListener('click', async (event) => {
    event.preventDefault();

    const name = document.getElementById("todoName").value;
    const item = await addTodo(name);
    const todo = new Todo(item);
    renderTodoItem(todo);
  });
};

main();
