export default function createContactPage() {
    const CONTAINER = document.querySelector(".container")
    const CONTENTDIV = document.querySelector(".content")
    const contentContact = document.createElement("div")
    contentContact.classList.add("contentContact")
    CONTENTDIV.appendChild(contentContact)

    let contentHeader = document.createElement("h1")
    contentHeader.innerText = "Get in Touch:"
    contentContact.appendChild(contentHeader)

}