import { projectDisplay } from "../components/projectName";
import { projectTodoIndiv } from "../components/projectTodoIndiv";

function refresh(projectIndex) {
    const data = JSON.parse(localStorage.getItem("todoListData"));

    const todoDiv = document.querySelector(".todo-section");
    const projectsDiv = document.querySelector(".projects-section")

    todoDiv.innerHTML = ""
    projectsDiv.innerHTML = ""

    for (let index = 0; index < data.projects.length; index++) {
        const element = data.projects[index];
        projectsDiv.appendChild(projectDisplay(element, index, projectIndex))
    }

    for (let index = 0; index < data.projects[0].todoList.length; index++) {
        projectTodoIndiv(todoDiv, index, projectIndex)
    }
}

export { refresh }