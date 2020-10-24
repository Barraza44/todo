import { ToDo } from "./to-doClass";
import { DOM } from "./dom";
import {currentProject } from "./index";

class Project {
  public name: string;
  public todos: ToDo[];
  private binder: HTMLButtonElement;
  
  constructor(name: string, binder: HTMLButtonElement) {
    this.name = name;
    this.todos = [];
    this.binder = binder
    binder.onclick = this.switchProject.bind(this);
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
  
  public switchProject() {
    DOM.deRender();
    // @ts-ignore
    currentProject = this;
    DOM.hideProjectTab();
    for(const todo of this.todos) {
      DOM.renderCard(todo);
    }
  }
}


export default Project;