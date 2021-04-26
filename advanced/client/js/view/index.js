export const renderTodoItem = (todo) => {
  const todoListDom = document.getElementById("todoList");
  todoListDom.appendChild(todo.render());
}
