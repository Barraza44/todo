import "./style.css";
import { DOM } from "./dom";
import {ToDo} from "./to-doClass";
import Project from "./project";

const body = document.body;
const main = document.querySelector("main");
const addIcon = document.querySelector(".add-proj");
const menuIcon = document.querySelector(".menu");
const cancelButton = document.querySelector("#cancel");
const addButton = document.querySelector("#add");
const addProjectButton = document.querySelector(".add-project");
const projectTab = document.querySelector(".projects");

let currentProject:Project = undefined;

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

addProjectButton.addEventListener("click", () => {
  let projectName = prompt("Enter a name for your project");
  let projectButton: HTMLButtonElement = document.createElement("button");
  projectButton.textContent = projectName;
  projectTab.appendChild(projectButton);
  createProject(projectName, projectButton);
})

const projectList: Array<object> = []

function createProject(name: string, binder: HTMLButtonElement) {
  let myProject = new Project(name, binder);
  projectList.push(myProject);
  currentProject = myProject;
}


addButton.addEventListener("click", () =>{
  currentProject.createTodo()
})

export { addIcon, menuIcon, main, body, currentProject }