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

const projectList: Array<object> = []

function createProject(name: string) {
  let myProject = new Project(name);
  projectList.push(myProject);
  currentProject = myProject;
}


export { addIcon, menuIcon, main, body, currentProject }