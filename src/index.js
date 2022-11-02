console.log("Hello World!")
import "./style.css"
//import "build menu"
//import "build Contact"


const CONTAINER = document.querySelector(".container")
function createHeader() {

    let header = document.createElement("header")
    CONTAINER.appendChild(header)
    let logo = document.createElement("h3")
    logo.innerText = "Pizza Shed"
    header.appendChild(logo)
    

    let navButtonsDiv = document.createElement("div")
    navButtonsDiv.classList.add("navButtons")
    header.appendChild(navButtonsDiv)

    let navButtons = []
    for (let i = 0; i < 3; i++) {
        navButtons[i] = document.createElement("button")
        let buildDisplayFunction;
        if (i === 0) {
            navButtons[i].innerText = "home"
            buildDisplayFunction = () => console.log("home Button")
        } else if (i === 1) {
            navButtons[i].innerText = "menu"
            buildDisplayFunction = () =>  console.log("menu Button")
        } else if (i === 2) {
            navButtons[i].innerText = "Contact"
            buildDisplayFunction = () =>  console.log("Contact Button")
        }
        navButtons[i].addEventListener("click", () => buildDisplayFunction())
        navButtonsDiv.appendChild(navButtons[i])
    }

}
createHeader()