class DOM {
  public static showProjectTab() {
    const projectTab = document.querySelector(".projects");
    projectTab.setAttribute("class", "projects-shown");
  }
}


export {DOM};