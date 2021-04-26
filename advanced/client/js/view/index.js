export const renderTodoItem = (todo) => {
  const todoListDom = document.getElementById("todoList");
  todoListDom.appendChild(render(todo));
}

const render = (todo) => {
  const itemDom = document.createElement("li");
  itemDom.classList.add("todo-item");
  // TODO: リテラルでなく関数でdomを作成する
  itemDom.innerHTML = `<label class="todo-toggle__container">
              <input
                data-todo-id="${todo.id}"
                type="checkbox"
                class="todo-toggle"
                value="checked"
              />
              <span class="todo-toggle__checkmark"></span>
            </label>
            <div class="todo-name">${todo.name}</div>
            <div data-todo-id="${todo.id}" class="todo-remove-button">x</div>
          `
  return itemDom;
}

export const refreshTodo = () => {
  const todoListDom = document.getElementById("todoList");
  todoListDom.innerHTML = "";
}
