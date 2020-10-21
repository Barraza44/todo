import { main } from "./index";
const body = document.querySelector("body");

class DOM {
  public static showProjectTab() {
    const projectTab = document.querySelector(".projects");
    projectTab.setAttribute("class", "projects-shown");
    body.classList.add("body-h");
  }
}


export {DOM};