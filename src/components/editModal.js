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

    // Submit Actions
    modalContentDiv.addEventListener("submit", (e) => {
        // Basic steps
        // Gather info
        e.preventDefault()
        let formData = new FormData(e.target);
        console.log("New stuff")
        console.log(Object.fromEntries(formData))

        // Edit Local Storage Piece
        const storage = JSON.parse(localStorage.getItem("todoListData"))

        // Set Data
        storage.projects[projectIndex].todoList[index] = Object.fromEntries(formData)

        // Overwrite Data
        localStorage.setItem("todoListData", JSON.stringify(storage))

        // Clear Modal
        const entireModal = document.querySelector(".modal-backdrop");
        entireModal.remove()
        // Refresh Everything

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
    modalEditDesc.setAttribute("name", "desc")
    modalEditDesc.setAttribute("id", "desc")
    modalEditDesc.innerHTML = element.desc
    modalContentDiv.appendChild(modalEditDesc)

    // Date Input
    const modalEditDateLabel = document.createElement("label");
    modalEditDateLabel.setAttribute("for", "due")
    modalEditDateLabel.innerHTML = "Date"
    modalContentDiv.append(modalEditDateLabel)
    const modalEditDate = document.createElement("input");
    modalEditDate.setAttribute("type", "date");
    modalEditDate.setAttribute("name", "due")
    modalEditDate.setAttribute("id", "due")
    const splitDate = element.due.split("-")
    modalEditDate.value = `${splitDate[0]}-${splitDate[1]}-${splitDate[2]}`
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