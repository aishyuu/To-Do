function addTodo() {
    const rightSide = document.querySelector(".modal-right-add")
    const testText = document.createElement("p");
    testText.textContent = "Project Form goes HERE"

    rightSide.appendChild(testText)
}

export { addTodo }