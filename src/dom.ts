import {main} from "./index";

const body = document.querySelector("body");

class DOM {
  public static showProjectTab() {
    const projectTab = document.querySelector(".projects");
    projectTab.setAttribute("class", "projects-shown");
    body.classList.add("body-h");
  }

  public static hideProjectTab() {
    const projectTab = document.querySelector(".projects-shown");
    projectTab.setAttribute("class", "projects");
    body.classList.remove("body-h");
  }

  public static showFormContainer() {
    const formContainer = document.querySelector(".form-container");
    formContainer.setAttribute("class", "form-container-shown");
    body.classList.add("body-h");
  }
}


export {DOM};