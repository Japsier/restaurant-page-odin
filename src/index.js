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
function createContentHome () {
    const contentDiv = document.createElement("div")
    contentDiv.classList.add("content")
    CONTAINER.appendChild(contentDiv)

    // CHANGE THIS BASED ON PAGE 
    // LIKELY WITH FOR LOOP
    const contentHomeDiv = document.createElement("div")
    contentHomeDiv.classList.add("contentHome")
    contentDiv.appendChild(contentHomeDiv)
    
    const contentHeader = document.createElement("h1") 
    contentHeader.innerText = "Pizza Shed"
    contentHomeDiv.appendChild(contentHeader)

    const contentText1 = document.createElement("p") 
    contentText1.innerText = "Come and Enjoy our delicious pizza's!!"
    contentHomeDiv.appendChild(contentText1)

    const contentText2 = document.createElement("p") 
    contentText2.innerText = "Now available in our brand new sheds"
    contentHomeDiv.appendChild(contentText2)
    


}
createHeader()
createContentHome ()