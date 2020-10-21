import "./style.css";
import { DOM } from "./dom";
import {ToDo} from "./to-doClass";

const body = document.body;
const main = document.querySelector("main");
const addIcon = document.querySelector(".add-proj");
const menuIcon = document.querySelector(".menu");
const cancelButton = document.querySelector("#cancel");

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

export { addIcon, menuIcon, main, body}