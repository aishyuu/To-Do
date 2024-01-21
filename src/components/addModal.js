import { addProject } from "./addProject";
import { addTodo } from "./addTodo";

function addModal() {
    const body = document.querySelector("body")
    // Create Modal Backdrop
    const modalBackdrop = document.createElement("div");
    modalBackdrop.classList.add("modal-backdrop");
    
    // Create actual Modal
    const modalDiv = document.createElement("div");
    modalDiv.classList.add("modal-content-div-add")
    modalBackdrop.appendChild(modalDiv)

    // X click to finish
    const modalCloseDiv = document.createElement("div");
    modalCloseDiv.classList.add("modal-close-div");

    const closeButton = document.createElement("p");
    closeButton.classList.add("modal-close-button")
    closeButton.innerText = "x"
    modalCloseDiv.appendChild(closeButton)
    modalDiv.appendChild(modalCloseDiv);

    closeButton.addEventListener('click', () => {
        const entireModal = document.querySelector(".modal-backdrop");
        entireModal.remove()
    })

    const modalMain = document.createElement("div");
    modalMain.classList.add("modal-content-add")

    const modalLeft = document.createElement("div");
    modalLeft.classList.add("modal-left-add")

    const modalRight = document.createElement("div");
    modalRight.classList.add("modal-right-add")
    modalMain.appendChild(modalRight)

    const addOptions = ["Project", "Todo"]
    for (let index = 0; index < addOptions.length; index++) {
        const element = addOptions[index];
        const modalSelect = document.createElement("p");
        modalSelect.classList.add("add-project-selector")
        modalSelect.textContent = element
        if(index === 0) {
            modalSelect.classList.add("add-option-selected")
        }
        modalSelect.addEventListener("click", () => {
            if(!modalSelect.classList.contains("add-option-selected")) {
                const currentSelected = document.querySelector(".add-option-selected");
                currentSelected.classList.remove("add-option-selected")
                modalSelect.classList.add("add-option-selected")
                modalRight.innerHTML = ""
                switch (element) {
                    case "Project":
                        addProject()
                        break;
                
                    case "Todo":
                        addTodo()
                        break;
                }
            }
        })
        modalLeft.appendChild(modalSelect)
    }

    modalMain.appendChild(modalLeft)

    modalDiv.appendChild(modalMain)
    body.appendChild(modalBackdrop)
    addProject();
}

export { addModal }