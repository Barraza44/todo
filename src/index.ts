import "./style.css";
import { DOM } from "./dom";
import {ToDo} from "./to-doClass";

const body = document.body;
const main = document.querySelector("main");
const addIcon = document.querySelector(".add-proj");
const menuIcon = document.querySelector(".menu");
const cancelButton = document.querySelector("#cancel");
const addButton = document.querySelector("#add");

menuIcon.addEventListener("click", () => {
  DOM.showProjectTab();
});

main.addEventListener("click", () => {
  DOM.hideProjectTab();
  DOM.hideFormContainer();
});

addIcon.addEventListener("click", () => {
  DOM.showFormContainer();
});

cancelButton.addEventListener("click", () => {
  DOM.hideFormContainer();
});

let todoList = [];

function CreateTodo(){
  const title = document.querySelector("#todo-title");
  const description = document.querySelector("#todo-description");
  const priority = document.querySelector("#todo-priority");
  const dueDate = document.querySelector("#todo-date");

  // @ts-ignore
  let myTodo = new ToDo(title.value, description.value, priority.value, dueDate.value);
  todoList.push(myTodo);
  myTodo.index = todoList.indexOf(myTodo);
  DOM.renderCard(myTodo);
  DOM.hideFormContainer();
}

addButton.addEventListener("click", CreateTodo);

export { addIcon, menuIcon, main, body}