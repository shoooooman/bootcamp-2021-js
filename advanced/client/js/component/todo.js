class Todo {
  constructor({id, name, done}) {
    this.id = id;
    this.name = name;
    this.done = done;
  }

  render() {
    const itemDom = document.createElement("li");
    itemDom.classList.add("todo-item");
    // TODO: リテラルでなく関数でdomを作成する
    itemDom.innerHTML = `<label class="todo-toggle__container">
              <input
                data-todo-id="${this.id}"
                type="checkbox"
                class="todo-toggle"
                value="checked"
              />
              <span class="todo-toggle__checkmark"></span>
            </label>
            <div class="todo-name">${this.name}</div>
            <div data-todo-id="${this.id}" class="todo-remove-button">x</div>
          `
    return itemDom;
  }
}

export default Todo;
