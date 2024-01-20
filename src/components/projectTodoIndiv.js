import { format } from 'date-fns';
import EditIcon from '../assets/icons/edit_FILL0_wght400_GRAD0_opsz24.svg'
import DeleteIcon from '../assets/icons/delete_FILL0_wght400_GRAD0_opsz24.svg'
import { todoModal } from './todoModal';
import { editModal } from './editModal';
import { refresh } from '../Utility/refresh';

function projectTodoIndiv(todoDiv, index, projectIndex) {
    const data = JSON.parse(localStorage.getItem("todoListData"))
    const element = data.projects[projectIndex].todoList[index];
    console.log(element)
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

    todoDesc.addEventListener('click', () => {
        todoModal(element);
    })

    todoRight.appendChild(todoDesc)

    // Todo Date
    const datePieces = element.due.split("-")
    const todoDate = document.createElement("p");
    todoDate.classList.add("todo-date");
    todoDate.textContent = format(new Date(parseInt(datePieces[0]), parseInt(datePieces[1]) - 1, parseInt(datePieces[2])), "MMM do")
    
    todoRight.appendChild(todoDate);
    
    // Todo Edit Button
    const todoEditButton = document.createElement("img");
    todoEditButton.src = EditIcon;
    todoEditButton.classList.add("todo-edit-btn");
    todoRight.appendChild(todoEditButton);

    todoEditButton.addEventListener('click', () => {
        editModal(element, index, projectIndex)
    })

    // Todo Delete Button
    const todoDeleteButton = document.createElement("img");
    todoDeleteButton.src = DeleteIcon;
    todoDeleteButton.classList.add("todo-delete-btn");
    todoRight.appendChild(todoDeleteButton);

    todoDeleteButton.addEventListener('click', () => {
        data.projects[projectIndex].todoItemAmount -= 1;
        const newInfo = data.projects[projectIndex].todoList.splice(index, 1)
        console.log(newInfo)
    })

    todoItem.append(todoLeft)
    todoItem.append(todoRight)

    todoDiv.appendChild(todoItem)
}

export { projectTodoIndiv }