import { projectTodoIndiv } from "./projectTodoIndiv";
import data from '../data/dummyData.json'

function projectDisplay(element, index) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-name-div");

    const projectName = document.createElement("h1");
    projectName.classList.add("project-name");
    projectName.textContent = element.projectName;
    projectDiv.appendChild(projectName);

    projectName.addEventListener('click', () => {
        if(!projectName.classList.contains('project-selected')) {
            const currentSelected = document.querySelector('.project-selected');
            currentSelected.classList.remove('project-selected')
            projectName.classList.add("project-selected")
            const todoDiv = document.querySelector(".todo-section");
            todoDiv.innerHTML = "";
            const projectIndex = data.projects.findIndex(x => x.projectName === element.projectName)
            for (let index = 0; index < data.projects[projectIndex].todoList.length; index++) {
                projectTodoIndiv(todoDiv, index, projectIndex)
            }
        }
    })

    const projectNotesQuant = document.createElement("h2");
    projectNotesQuant.classList.add("project-quantity");
    projectNotesQuant.textContent = element.todoItemAmount;
    projectDiv.appendChild(projectNotesQuant);

    return projectDiv
}

export {projectDisplay}