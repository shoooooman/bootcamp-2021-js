import { getTodos, addTodo } from "./api.js"
import Todo from "./component/todo.js"

const main = async () => {
  const { todoList } = await getTodos();

  const todoListDom = document.getElementById("todoList");
  todoList.forEach(item => {
    const todo = new Todo(item);
    todoListDom.appendChild(todo.render());
  });

  const addButton = document.getElementById("todoAddButton");
  addButton.addEventListener('click', async (event) => {
    event.preventDefault();

    const name = document.getElementById("todoName").value;
    const item = await addTodo(name);
    const todo = new Todo(item);
    todoListDom.appendChild(todo.render());
  });
};

main();
