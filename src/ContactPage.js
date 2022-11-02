export default function createContactPage() {
    const CONTAINER = document.querySelector(".container")
    const CONTENTDIV = document.querySelector(".content")
    const contentContact = document.createElement("div")
    contentContact.classList.add("contentContact")
    CONTENTDIV.appendChild(contentContact)

    let contentHeader = document.createElement("h1")
    contentHeader.innerText = "Get in Touch:"
    contentContact.appendChild(contentHeader)
  
    let phoneNumber = document.createElement("p")
    phoneNumber.innerText = "Number: +69 696 969 6969"
    contentContact.appendChild(phoneNumber)

    let openingHours = document.createElement("p")
    openingHours.innerText = "Opening Hours: MON-SUN    12:00-23:00"
    contentContact.appendChild(openingHours)

    let visitDisplay = document.createElement("div")
    visitDisplay.classList.add("visitDisplay")
    contentContact.appendChild(visitDisplay)

    let visitText = document.createElement("h2")
    visitText.innerText = "Visit Us!"
    visitDisplay.appendChild(visitText)

    let address = document.createElement("p")
    address.innerText = "Piazza del Colosseo, 1, 00184 Roma RM"
    visitDisplay.appendChild(address)

    let locationDisplay = document.createElement("iframe")
    locationDisplay.classList.add("locationDisplay")
    locationDisplay.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2970.1354732871364!2d12.4943371!3d41.8899435!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b0c825a377%3A0x7aef6d7e26a5b77f!2sVia%20della%20Domus%20Aurea%2C%201%2C%2000184%20Roma%20RM%2C%20Italy!5e0!3m2!1sen!2snl!4v1667420315117!5m2!1sen!2snl"
    visitDisplay.appendChild(locationDisplay)
}