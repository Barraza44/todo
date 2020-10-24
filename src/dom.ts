import {main, body, currentProject} from "./index";
import {ToDo} from "./to-doClass";


const projectTab = document.querySelector(".projects");
const formContainer = document.querySelector(".form-container");
const calendar = document.querySelector(".calendar");
const remove = document.querySelector(".delete");
const editContainer = document.querySelector(".form-container-edit");

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

  public static showEditContainer() {
    editContainer.setAttribute("class", "form-container-edit-shown");
    body.classList.add("body-h");
  }

  public static hideEditContainer() {
    editContainer.setAttribute("class", "form-container-edit");
    body.classList.remove("body-h");
  }

  public static renderCard(todo: ToDo) {
    const cardContainer = document.createElement("div");
    main.appendChild(cardContainer);
    cardContainer.setAttribute("class", "card");
    cardContainer.setAttribute("id", `index-${todo.index}`);

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = todo.title;
    cardContainer.appendChild(cardTitle);

    const cardText = document.createElement("p")
    cardText.setAttribute("class", "card-text");
    cardText.textContent = todo.description;
    cardContainer.appendChild(cardText);

    const dateContainer = document.createElement("div");
    cardContainer.appendChild(dateContainer);
    dateContainer.setAttribute("class", "card-date");
    const dateIcon = calendar.cloneNode(true);
    dateContainer.appendChild(dateIcon);
    const dateText = document.createElement("p");
    dateText.textContent = todo.dueDate;
    dateContainer.appendChild(dateText);

    const seeMoreBtn = document.createElement("button");
    seeMoreBtn.textContent = "See more";
    cardContainer.appendChild(seeMoreBtn);
    seeMoreBtn.addEventListener("click", () => {
      todo.editTodo(todo);
    })

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    cardContainer.appendChild(deleteBtn);
    deleteBtn.dataset.todoIndex = `${todo.index}`;
    deleteBtn.addEventListener("click", ()=>{
      currentProject.removeTodo(todo);
    });

    switch (todo.priority) {
      case "Low":
        cardTitle.style.color = "#1FC3DA";
        break;
      case "Medium":
        cardTitle.style.color = "#FFCC81";
        break;
      case "High":
        cardTitle.style.color = "#DD5E11";
        break;
    }
  }

  public static removeTodo(index: number) {
    let removed = document.querySelector(`#index-${index}`);
    removed.parentElement.removeChild(removed);
  }

  public static deRender() {
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => card.remove());
  }
}


export {DOM};