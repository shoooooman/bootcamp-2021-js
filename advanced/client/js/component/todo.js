import { renderTodoItem } from "../view/index.js"

class Todo {
  constructor({id, name, done}) {
    this.id = id;
    this.name = name;
    this.done = done;
  }

  render() {
    renderTodoItem(this);
  }
}

export default Todo;
