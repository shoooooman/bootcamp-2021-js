import { refreshTodo } from "../view/index.js"

class TodoList {
  constructor() {
    this.todoList = [];
  }

  addTodo(todo) {
    this.todoList.push(todo);
  }

  render() {
    refreshTodo();
    this.todoList.forEach(todo => {
      todo.render();
    })
  }
}

export default TodoList;
