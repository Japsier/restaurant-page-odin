console.log("Hello World!")
import "./style.css"
import createMenuPage from "./menuPage.js"
import createContactPage from "./ContactPage.js"
//import "build Contact"

const CONTAINER = document.querySelector(".container")


function createHeader() {

    let header = document.createElement("header")
    CONTAINER.appendChild(header)
    let logo = document.createElement("h3")
    logo.innerText = "Pizza Tent"
    header.appendChild(logo)
    

    let navButtonsDiv = document.createElement("div")
    navButtonsDiv.classList.add("navButtons")
    header.appendChild(navButtonsDiv)
    //create buttons with listeners
    let navButtons = []
    for (let i = 0; i < 3; i++) {
        navButtons[i] = document.createElement("button")
        let buildDisplayFunction;
        if (i === 0) {
            navButtons[i].innerText = "home"
            navButtons[i].style.border = "3px solid black"
            buildDisplayFunction = () => {
                document.querySelector(".content").innerHTML = ""
                createContentHome.createHomePage()
            }
        } else if (i === 1) {
            navButtons[i].innerText = "menu"
            buildDisplayFunction = () =>  {
                document.querySelector(".content").innerHTML = ""
                createMenuPage()
            }
        } else if (i === 2) {
            navButtons[i].innerText = "Contact"
            buildDisplayFunction = () =>  {
                document.querySelector(".content").innerHTML = ""
                createContactPage()
            }
        }
        navButtons[i].addEventListener("click", (e) => {
            buildDisplayFunction()
            changeButton(e.target, navButtons)
        })
        navButtonsDiv.appendChild(navButtons[i])
    }

}
function createFooter() {
    let footer = document.createElement("footer")
    CONTAINER.appendChild(footer)

    let footerText = document.createElement("p")
    footerText.innerText = "Made By Japsir"
    footer.appendChild(footerText)

}
const createContentHome =  (() => {
    const contentDiv = document.createElement("div")
    contentDiv.classList.add("content")
    CONTAINER.appendChild(contentDiv)

    // CHANGE THIS BASED ON PAGE 
    // LIKELY WITH FOR LOOP
    const createHomePage = () => {
        const contentHomeDiv = document.createElement("div")
        contentHomeDiv.classList.add("contentHome")
        contentDiv.appendChild(contentHomeDiv)
        
        const contentHeader = document.createElement("h1") 
        contentHeader.innerText = "Pizza Tent"
        contentHomeDiv.appendChild(contentHeader)

        const contentText1 = document.createElement("p") 
        contentText1.innerText = "Come and Enjoy our delicious pizza's!!"
        contentHomeDiv.appendChild(contentText1)

        const contentText2 = document.createElement("p") 
        contentText2.innerText = "Now available in our brand new tents"
        contentHomeDiv.appendChild(contentText2)
    }
    createHomePage()
    
    return {createHomePage}

})()
function changeButton(button, allButtons) {
    allButtons.forEach((item) => {
        item.style.border = "1px solid black"
    })
    button.style.border = "3px solid black"
}
createHeader()
createFooter()