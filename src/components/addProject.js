import { refresh } from "../Utility/refresh";

function addProject() {
    const rightSide = document.querySelector(".modal-right-add")
    
    const addProjectForm = document.createElement("form");
    addProjectForm.classList.add("project-add-form");

    addProjectForm.addEventListener("submit", (e) => {
        e.preventDefault()
        let formData = new FormData(e.target)
        const objData = Object.fromEntries(formData)

        const date = new Date()
        let currentDate = ""
        if(date.getMonth()+1 < 10) {
            currentDate = `${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}`
        } else {
            currentDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
        }
        console.log(currentDate)

        const newProject = {
            "projectName": objData.title,
            "todoItemAmount": 1,
            "todoList": [
                {
                    "title": "New Todo",
                    "desc": "Edit this",
                    "due": currentDate,
                    "priority": "Yellow",
                    "check": false
                }
            ]
        }

        const currentStorage = JSON.parse(localStorage.getItem("todoListData"));
        currentStorage.projects.push(newProject)
        localStorage.setItem("todoListData", JSON.stringify(currentStorage))
        
        // Getting project index
        const allProjects = document.querySelectorAll(".project-name");
        for (let index = 0; index < allProjects.length; index++) {
            const element = allProjects[index];
            if(element.classList.contains("project-selected")){
                refresh(index)
            }
        }
        const entireModal = document.querySelector(".modal-backdrop");
        entireModal.remove()
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