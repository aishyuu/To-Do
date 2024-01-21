function addProject() {
    const rightSide = document.querySelector(".modal-right-add")
    
    const addProjectForm = document.createElement("form");
    addProjectForm.classList.add("project-add-form");

    addProjectForm.addEventListener("submit", (e) => {
        e.preventDefault()
        let formData = new FormData(e.target)
        console.log(Object.fromEntries(formData))
    })

    const addProjectName = document.createElement("input");
    addProjectName.setAttribute("type", "text")
    addProjectName.setAttribute("placeholder", "Title Here")
    addProjectName.setAttribute("name", "title")
    addProjectName.setAttribute("id", "title")

    addProjectForm.appendChild(addProjectName)

    const addProjectSubmit = document.createElement("input");
    addProjectSubmit.setAttribute("type", "submit");
    addProjectForm.appendChild(addProjectSubmit);

    rightSide.appendChild(addProjectForm);
}

export { addProject }