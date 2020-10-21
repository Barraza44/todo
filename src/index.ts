import "./style.css";
import { DOM } from "./dom";

const body = document.querySelector("body");
const main = document.querySelector("main");
const addIcon = document.querySelector(".add-proj");
const menuIcon = document.querySelector(".menu");
const cancelButton = document.querySelector("#cancel");

menuIcon.addEventListener("click", () => {
  DOM.showProjectTab();
});

main.addEventListener("click", () => {
  DOM.hideProjectTab();
});

addIcon.addEventListener("click", () => {
  DOM.showFormContainer();
});

cancelButton.addEventListener("click", () => {
  DOM.hideFormContainer();
});

export { addIcon, menuIcon, main }