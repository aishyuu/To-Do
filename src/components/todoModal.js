import { format } from 'date-fns';

function todoModal(element) {
    console.log(element)
    const body = document.querySelector("body")
    // Create Modal Backdrop
    const modalBackdrop = document.createElement("div");
    modalBackdrop.classList.add("modal-backdrop");
    
    // Create actual Modal
    const modalDiv = document.createElement("div");
    modalDiv.classList.add("modal-content-div")
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

    // Actual content div
    const modalContentDiv = document.createElement("div");
    modalContentDiv.classList.add("modal-info-div");

    // Modal Title
    const modalTitle = document.createElement("h1");
    modalTitle.classList.add("modal-title");
    modalTitle.textContent = element.title;
    modalContentDiv.appendChild(modalTitle)

    // Modal Desc
    const modalDesc = document.createElement("p");
    modalDesc.classList.add("modal-desc");
    modalDesc.textContent = element.desc;
    modalContentDiv.appendChild(modalDesc);

    // Modal Due Date
    const modalDate = document.createElement("p");
    modalDate.classList.add("modal-due");
    const datePieces = element.due.split("-")
    modalDate.textContent = `Due: ${format(new Date(parseInt(datePieces[0]), parseInt(datePieces[1]) - 1, parseInt(datePieces[2])), "MMM do, yyyy")}`
    modalContentDiv.appendChild(modalDate)

    // Modal Priority
    const modalPriority = document.createElement("p");
    modalPriority.classList.add("modal-priority");
    modalPriority.textContent = `Priority: ${element.priority}`
    modalContentDiv.appendChild(modalPriority)

    modalDiv.appendChild(modalContentDiv)
    body.appendChild(modalBackdrop)
}

export { todoModal }