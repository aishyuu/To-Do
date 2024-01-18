import dummyData from './data/dummyData.json'
import { projectDisplay } from './components/projectName';
import { projectTodoIndiv } from './components/projectTodoIndiv';

function dataSetup() {
    if(!localStorage.getItem("todoListData")) {
        localStorage.setItem("todoListData", JSON.stringify(dummyData))
    }
    const data = JSON.parse(localStorage.getItem("todoListData"))
    console.log(data)
    // Get information div
    const informationDiv = document.querySelector('.information-section');

    // Creating Projects div
    const projectsDiv = document.createElement("div");
    projectsDiv.classList.add("projects-section");
    informationDiv.appendChild(projectsDiv);

    // Creating Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-section");
    informationDiv.appendChild(todoDiv);

    // Putting project names on left side of the screen
    for (let index = 0; index < data.projects.length; index++) {
        const element = data.projects[index];
        projectsDiv.appendChild(projectDisplay(element, index))
    }

    const firstProject = document.querySelector('.project-name')
    firstProject.classList.add("project-selected")

    for (let index = 0; index < data.projects[0].todoList.length; index++) {
        projectTodoIndiv(todoDiv, index, 0)
    }
}

export { dataSetup };