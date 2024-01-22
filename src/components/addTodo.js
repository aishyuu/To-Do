import { refresh } from "../Utility/refresh";

function addTodo() {
  const rightSide = document.querySelector(".modal-right-add");
  // Actual content div
  const modalContentDiv = document.createElement("form");
  modalContentDiv.classList.add("modal-info-div");
  modalContentDiv.classList.add("modal-add-todo-div")

  // Submit Actions
  modalContentDiv.addEventListener("submit", (e) => {
    // Basic steps
    // Gather info
    e.preventDefault();
    let formData = Object.fromEntries(new FormData(e.target));

    const currentData = JSON.parse(localStorage.getItem("todoListData"))
    const allProjects = document.querySelectorAll(".project-name")

    let projectIndex

    for (let index = 0; index < allProjects.length; index++) {
        const element = allProjects[index];
        if(element.classList.contains("project-selected")){
            projectIndex = index
        }
    }

    const newTodo = {
        "title": formData.title,
        "desc": formData.desc,
        "due": formData.due,
        "priority": formData.priority,
        "check": false
    }

    currentData.projects[projectIndex].todoItemAmount += 1

    currentData.projects[projectIndex].todoList.push(newTodo)
    localStorage.setItem("todoListData", JSON.stringify(currentData))

    const entireModal = document.querySelector(".modal-backdrop");
    entireModal.remove()

    refresh(projectIndex)
  });

  // Title input
  const modalEditTitle = document.createElement("input");
  modalEditTitle.setAttribute("type", "text");
  modalEditTitle.setAttribute("name", "title");
  modalEditTitle.setAttribute("id", "title");
  modalEditTitle.required = true;
  modalContentDiv.appendChild(modalEditTitle);

  // Desc Input
  const modalEditDesc = document.createElement("textarea");
  modalEditDesc.setAttribute("placeholder", "Details:");
  modalEditDesc.setAttribute("rows", "4");
  modalEditDesc.setAttribute("cols", "50");
  modalEditDesc.setAttribute("name", "desc");
  modalEditDesc.setAttribute("id", "desc");
  modalEditDesc.required = true
  modalContentDiv.appendChild(modalEditDesc);

  // Date Input
  const modalEditDateLabel = document.createElement("label");
  modalEditDateLabel.setAttribute("for", "due");
  modalEditDateLabel.innerHTML = "Date";
  modalContentDiv.append(modalEditDateLabel);
  const modalEditDate = document.createElement("input");
  modalEditDate.setAttribute("type", "date");
  modalEditDate.setAttribute("name", "due");
  modalEditDate.setAttribute("id", "due");
  modalEditDate.required = true
  modalContentDiv.append(modalEditDate);

  // Priority Input
  const modalEditPriorityDiv = document.createElement("div");
  modalEditPriorityDiv.classList.add("modal-edit-priority");

  const priorities = ["Green", "Yellow", "Red"];
  for (let index = 0; index < priorities.length; index++) {
    const priority = priorities[index];
    const modalEditPriorityOption = document.createElement("input");
    modalEditPriorityOption.setAttribute("type", "radio");
    modalEditPriorityOption.setAttribute("name", "priority");
    modalEditPriorityOption.setAttribute("id", priority);
    modalEditPriorityOption.setAttribute("value", priority);
    modalEditPriorityOption.innerHTML = priority;
    modalEditPriorityDiv.appendChild(modalEditPriorityOption);

    const modalEditPriorityLabel = document.createElement("label");
    modalEditPriorityLabel.innerHTML = priority;
    modalEditPriorityDiv.setAttribute("for", priority);
    modalEditPriorityDiv.appendChild(modalEditPriorityLabel);
  }
  modalContentDiv.appendChild(modalEditPriorityDiv);

  const modalEditSubmit = document.createElement("input");
  modalEditSubmit.setAttribute("type", "submit");
  modalContentDiv.appendChild(modalEditSubmit);

  rightSide.appendChild(modalContentDiv);
}

export { addTodo };
