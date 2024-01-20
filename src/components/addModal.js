function addModal() {
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

    body.appendChild(modalBackdrop)
}

export { addModal }