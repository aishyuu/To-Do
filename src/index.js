import "./style.css";
import { dataSetup } from "./dataSetup";
import { addModal } from "./components/addModal";

function initialSetup() {
    const allContentDiv = document.querySelector("#all-content")

    // Header Initialization
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header-section');
    headerDiv.textContent = "// To-Do"
    
    allContentDiv.appendChild(headerDiv)

    // Grid Initialization
    const informationDiv = document.createElement('div');
    informationDiv.classList.add('information-section');

    allContentDiv.appendChild(informationDiv);

    // Data Setup Function Run
    dataSetup();

    const addButton = document.createElement("button");
    addButton.classList.add("add-button")
    addButton.textContent = "+"
    
    allContentDiv.appendChild(addButton)

    addButton.addEventListener("click", () => {
        addModal()
    })
}

initialSetup()