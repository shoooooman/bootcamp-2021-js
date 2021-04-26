import { getTodos, addTodo } from "./api.js"

const main = async () => {
  const { todoList } = await getTodos();

  const todoListDom = document.getElementById("todoList");
  todoList.forEach(item => {
    todoListDom.appendChild(renderTodoItem(item));
  });

  const addButton = document.getElementById("todoAddButton");
  addButton.addEventListener('click', async (event) => {
    event.preventDefault();

    const name = document.getElementById("todoName").value;
    const item = await addTodo(name);
    todoListDom.appendChild(renderTodoItem(item));
  });
};

const renderTodoItem = (item) => {
  const itemDom = document.createElement("li");
  itemDom.classList.add("todo-item");
  // TODO: リテラルでなく関数でdomを作成する
  itemDom.innerHTML = `<label class="todo-toggle__container">
              <input
                data-todo-id="${item.id}"
                type="checkbox"
                class="todo-toggle"
                value="checked"
              />
              <span class="todo-toggle__checkmark"></span>
            </label>
            <div class="todo-name">${item.name}</div>
            <div data-todo-id="${item.id}" class="todo-remove-button">x</div>
          `
  return itemDom;
}

main();
