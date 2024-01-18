function editModal(element, index, projectIndex) {
    const body = document.querySelector("body")
    console.log(element)
    // Create Modal Backdrop
    const modalBackdrop = document.createElement("div");
    modalBackdrop.classList.add("modal-backdrop");
    
    // Create actual Modal
    const modalDiv = document.createElement("div");
    modalDiv.classList.add("modal-content-div-edit");
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
    const modalContentDiv = document.createElement("form");
    modalContentDiv.classList.add("modal-info-div");
    modalContentDiv.addEventListener("submit", (e) => {
        // Basic steps
        // Gather info
        e.preventDefault()
        let formData = new FormData(e.target);
        console.log(Object.fromEntries(formData))
    })
    
    // Title input
    const modalEditTitle = document.createElement("input");
    modalEditTitle.setAttribute("type", "text");
    modalEditTitle.setAttribute("value", element.title)
    modalEditTitle.setAttribute("name", "title")
    modalEditTitle.setAttribute("id", "title")
    modalContentDiv.appendChild(modalEditTitle)

    // Desc Input
    const modalEditDesc = document.createElement("textarea");
    modalEditDesc.setAttribute("placeholder", "Details:")
    modalEditDesc.setAttribute("rows", "4")
    modalEditDesc.setAttribute("cols", "50")
    modalEditDesc.innerHTML = element.desc
    modalContentDiv.appendChild(modalEditDesc)

    // Date Input
    const modalEditDateLabel = document.createElement("label");
    modalEditDateLabel.setAttribute("for", "date")
    modalEditDateLabel.innerHTML = "Date"
    modalContentDiv.append(modalEditDateLabel)
    const modalEditDate = document.createElement("input");
    modalEditDate.setAttribute("type", "date");
    const splitDate = element.due.split("/")
    console.log(`${splitDate[0]}-${splitDate[1]}-${splitDate[2]}`)
    modalContentDiv.append(modalEditDate);

    // Priority Input
    const modalEditPriorityDiv = document.createElement("div");
    modalEditPriorityDiv.classList.add("modal-edit-priority");
    
    const priorities = ['Green', 'Yellow', 'Red']
    for (let index = 0; index < priorities.length; index++) {
        const priority = priorities[index];
        const modalEditPriorityOption = document.createElement("input");
        modalEditPriorityOption.setAttribute("type", "radio")
        modalEditPriorityOption.setAttribute("name", "priority")
        modalEditPriorityOption.setAttribute("id", priority)
        modalEditPriorityOption.setAttribute("value", priority)
        modalEditPriorityOption.innerHTML = priority;
        if(element.priority === priority) {
            modalEditPriorityOption.setAttribute("checked", "true")
        }
        modalEditPriorityDiv.appendChild(modalEditPriorityOption)

        const modalEditPriorityLabel = document.createElement("label");
        modalEditPriorityLabel.innerHTML = priority
        modalEditPriorityDiv.setAttribute("for", priority)
        modalEditPriorityDiv.appendChild(modalEditPriorityLabel)
    }
    modalContentDiv.appendChild(modalEditPriorityDiv)

    const modalEditSubmit = document.createElement("input");
    modalEditSubmit.setAttribute("type", "submit");
    modalContentDiv.appendChild(modalEditSubmit);

    modalDiv.appendChild(modalContentDiv)
    body.appendChild(modalBackdrop)
}

export { editModal }