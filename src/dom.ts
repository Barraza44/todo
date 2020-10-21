import {main} from "./index";

const body = document.querySelector("body");
const projectTab = document.querySelector(".projects");
const formContainer = document.querySelector(".form-container");


class DOM {
  public static showProjectTab() {
    projectTab.setAttribute("class", "projects-shown");
    body.classList.add("body-h");
  }

  public static hideProjectTab() {
    projectTab.setAttribute("class", "projects");
    body.classList.remove("body-h");
  }

  public static showFormContainer() {
    formContainer.setAttribute("class", "form-container-shown");
    body.classList.add("body-h");
  }

  public static hideFormContainer() {
    formContainer.setAttribute("class", "form-container");
    body.classList.remove("body-h");
  }
}


export {DOM};