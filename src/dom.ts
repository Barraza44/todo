import {main, body} from "./index";
import {ToDo} from "./to-doClass";


const projectTab = document.querySelector(".projects");
const formContainer = document.querySelector(".form-container");
const calendar = document.querySelector(".calendar");
const remove = document.querySelector(".delete");


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

  public static renderCard(todo: ToDo) {
    const cardContainer = document.createElement("div");
    main.appendChild(cardContainer);
    cardContainer.setAttribute("class", "card");

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = todo.title;
    cardContainer.appendChild(cardTitle);

    const cardText = document.createElement("p")
    cardText.setAttribute("class", "card-text");
    cardText.textContent = todo.description;
    cardContainer.appendChild(cardText);

    const dateContainer = document.createElement("div");
    cardContainer.appendChild(dateContainer);
    const dateIcon = calendar.cloneNode(true);
    dateContainer.appendChild(dateIcon);
    const dateText = document.createElement("p");
    dateText.textContent = todo.dueDate;
    dateContainer.appendChild(dateText);

    const seeMoreBtn = document.createElement("button");
    seeMoreBtn.setAttribute("class", "see");
    cardContainer.appendChild(seeMoreBtn);

    const deleteBtn = remove.cloneNode(true);
    cardContainer.appendChild(deleteBtn);

  }
}


export {DOM};