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
}

export { dataSetup };