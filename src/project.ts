import { ToDo } from "./to-doClass";
import { DOM } from "./dom";

class Project {
  public name: string;
  public todos: object[];
  constructor(name: string) {
    this.name = name;
    this.todos = [];
  }
  public createTodo() {
    const title = document.querySelector("#todo-title");
    const description = document.querySelector("#todo-description");
    const priority = document.querySelector("#todo-priority");
    const dueDate = document.querySelector("#todo-date");

    // @ts-ignore
    let myTodo = new ToDo(title.value, description.value, priority.value, dueDate.value);
    this.todos.push(myTodo);
    myTodo.index = this.todos.indexOf(myTodo);
    DOM.renderCard(myTodo);
    DOM.hideFormContainer();
  }

  public removeTodo(todo: ToDo) {
    let index = todo.index;
    this.todos.splice(index, 1);
    DOM.removeTodo(index);
  }
}


export default Project;