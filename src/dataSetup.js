import data from './data/dummyData.json'

function dataSetup() {
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

    // Putting data on the screen
    for (let index = 0; index < data.projects.length; index++) {
        const element = data.projects[index];
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project-name-div");

        const projectName = document.createElement("h1");
        projectName.classList.add("project-name")
        projectName.textContent = element.projectName
        projectDiv.appendChild(projectName)

        const projectNotesQuant = document.createElement("h2");
        projectNotesQuant.classList.add("project-quantity");
        projectNotesQuant.textContent = element.todoItemAmount
        projectDiv.appendChild(projectNotesQuant)

        projectsDiv.appendChild(projectDiv)
    }

    const firstProject = document.querySelector('.project-name')
    firstProject.classList.add("project-selected")

    for (let index = 0; index < data.projects[0].todoList.length; index++) {
        const element = data.projects[0].todoList[index];
        console.log(element)
    }
}

export { dataSetup };