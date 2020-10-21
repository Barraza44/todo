import "./style.css";
import { DOM } from "./dom";

const main = document.querySelector("main");
const addIcon = document.querySelector(".add-proj");
const menuIcon = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
  DOM.showProjectTab();
});

export { addIcon, menuIcon, main }