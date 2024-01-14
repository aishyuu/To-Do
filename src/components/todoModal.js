function todoModal(element) {
    const body = document.querySelector("body")
    // Create Modal Backdrop
    const modalBackdrop = document.createElement("div");
    modalBackdrop.classList.add("modal-backdrop");
    
    // Create actual Modal
    const modalDiv = document.createElement("div");
    modalDiv.classList.add("modal-content-div")
    modalBackdrop.appendChild(modalDiv)

    body.appendChild(modalBackdrop)
}

export { todoModal }