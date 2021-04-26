import { getTodos, addTodo } from "./api.js"
import Todo from "./component/todo.js"
import TodoList from "./component/todolist.js"

const main = async () => {
  const { todoList } = await getTodos();
  const list = new TodoList();
  todoList.forEach(item => {
    const todo = new Todo(item);
    list.addTodo(todo);
  })

  list.render();

  const addButton = document.getElementById("todoAddButton");
  addButton.addEventListener('click', async (event) => {
    event.preventDefault();

    const name = document.getElementById("todoName").value;
    const item = await addTodo(name);
    const todo = new Todo(item);
    list.addTodo(todo);
    list.render();
  });
};

main();
