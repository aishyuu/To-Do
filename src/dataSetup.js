import data from './data/dummyData.json'
import { projectDisplay } from './components/projectName';
import { format } from 'date-fns';
import EditIcon from './assets/icons/edit_FILL0_wght400_GRAD0_opsz24.svg'
import DeleteIcon from './assets/icons/delete_FILL0_wght400_GRAD0_opsz24.svg'

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
        projectsDiv.appendChild(projectDisplay(element))
    }

    const firstProject = document.querySelector('.project-name')
    firstProject.classList.add("project-selected")

    for (let index = 0; index < data.projects[0].todoList.length; index++) {
        const element = data.projects[0].todoList[index];
        console.log(element);
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-indiv");

        switch (element.priority) {
            case "Red":
                todoItem.classList.add("priority-red");
                break;
            case "Yellow":
                todoItem.classList.add("priority-yellow");
                break;
            case "Green":
                todoItem.classList.add("priority-green");
            break;
        
            default:
                break;
        }

        // Todo Left Side
        const todoLeft = document.createElement("div");
        todoLeft.classList.add("todo-left");

        // Todo Title
        const todoTitle = document.createElement("h1");
        todoTitle.classList.add("todo-title");
        todoTitle.textContent = element.title;

        todoLeft.appendChild(todoTitle)

        // Todo Right Side
        const todoRight = document.createElement("div");
        todoRight.classList.add("todo-right");

        // Todo Detail Button
        const todoDesc = document.createElement("button");
        todoDesc.classList.add("todo-detail-btn");
        todoDesc.textContent = "DETAILS"

        todoRight.appendChild(todoDesc)

        // Todo Date
        const datePieces = element.due.split("/")
        const todoDate = document.createElement("p");
        todoDate.classList.add("todo-date");
        todoDate.textContent = format(new Date(parseInt(datePieces[0]), parseInt(datePieces[1]) - 1, parseInt(datePieces[2])), "MMM do")
        
        todoRight.appendChild(todoDate);
        
        // Todo Edit Button
        const todoEditButton = document.createElement("img");
        todoEditButton.src = EditIcon;
        todoEditButton.classList.add("todo-edit-btn");
        todoRight.appendChild(todoEditButton);

        // Todo Delete Button
        const todoDeleteButton = document.createElement("img");
        todoDeleteButton.src = DeleteIcon;
        todoDeleteButton.classList.add("todo-delete-btn");
        todoRight.appendChild(todoDeleteButton);

        todoItem.append(todoLeft)
        todoItem.append(todoRight)

        todoDiv.appendChild(todoItem)
    }
}

export { dataSetup };