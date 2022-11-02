
export default function createMenuPage() {
    const CONTAINER = document.querySelector(".container")
    const CONTENTDIV = document.querySelector(".content")
    const contentHome = document.createElement("div")
    contentHome.classList.add("contentMenu")
    CONTENTDIV.appendChild(contentHome)

    let contentHeader = document.createElement("h1")
    contentHeader.innerText = "Our Menu:"
    contentHome.appendChild(contentHeader)

}