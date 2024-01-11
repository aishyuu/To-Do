function projectDisplay(element) {
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

    return projectDiv
}

export {projectDisplay}