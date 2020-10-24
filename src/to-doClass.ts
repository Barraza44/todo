import Project from "./project";
import { DOM } from "./dom";

class ToDo {
  public priority: string;
  public title: string;
  public description: string;
  public dueDate: string;
  public index: number;

  constructor(title: string, description: string, priority: string, dueDate: string) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.index = 0;
  }

  public editTodo(todo) {
    DOM.showEditContainer();
    const titleBox = document.querySelector("#todo-title-current");
    const description = document.querySelector("#todo-description-current");
    const priority = document.querySelector("#todo-priority-current");
    const dueDate = document.querySelector("#todo-date-current");

    description.textContent = todo.description;
    titleBox.setAttribute("placeholder", `${todo.title}`);

    const doneButton = document.querySelector("#done");
    doneButton.addEventListener("click", () => {
      // @ts-ignore
      todo.title = titleBox.value
      // @ts-ignore
      todo.description = description.value;
      // @ts-ignore
      todo.priority = priority.value;
      // @ts-ignore
      todo.dueDate = dueDate.value;
      DOM.hideEditContainer();
      DOM.removeTodo(todo.index);
      DOM.renderCard(todo);
    });
  }
}

export { ToDo }