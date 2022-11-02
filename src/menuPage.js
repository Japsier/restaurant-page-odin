let pizzaMenuGrid;
let drinkMenuGrid;
export default function createMenuPage() {
    const CONTAINER = document.querySelector(".container")
    const CONTENTDIV = document.querySelector(".content")
    const contentMenu = document.createElement("div")
    contentMenu.classList.add("contentMenu")
    CONTENTDIV.appendChild(contentMenu)

    let contentHeader = document.createElement("h1")
    contentHeader.innerText = "Menu:"
    contentMenu.appendChild(contentHeader)

    let pizzaHeader = document.createElement("h2")
    pizzaHeader.innerText = "Our Pizza's"
    contentMenu.appendChild(pizzaHeader)

    pizzaMenuGrid = document.createElement("div")
    pizzaMenuGrid.classList.add("pizzaMenuGrid")
    contentMenu.appendChild(pizzaMenuGrid)
    Pizza("Margherita", "$9", "Tomatoes, Mozzerella")
    Pizza("Calzone", "$10", "Tomatoes, Mozzerella, Salami")
    Pizza("Caprese", "$10", "Tomato Sauce, Cherry Tomatoes, Mozzerella, Basil")
    Pizza("Oregano", "$8", "Tomatoes, Garlic, Oregano")
    Pizza("Quatro Formaggi", "$11", "Tomatoes, Fontino, Gorgonzola, Mozzerella, Grana Padano")
    Pizza("Capricciosa", "$11", "Tomatoes, Olives, Artichokes, Mushrooms, Prosciutto, Mozzerella")
    Pizza("Bianca", "$5", "Olive oil, Salt, Rosemary")
    Pizza("napoletana", "$11", "Tomatoes, Mozzerella, Basil, Olive Oil, Oregano, Salt")


    let drinkHeader = document.createElement("h2")
    drinkHeader.innerText = "Our Drinks"
    contentMenu.appendChild(drinkHeader)

    drinkMenuGrid = document.createElement("div")
    drinkMenuGrid.classList.add("drinkMenuGrid")
    contentMenu.appendChild(drinkMenuGrid)
    Drink("Coke", "$3")
    Drink("Pepsi", "$3")
    Drink("IceTea", "$3")
    Drink("Beer", "$4")
    Drink("Glass of Wine", "$4")
    Drink("lemonade", "$1")
}


const Pizza = (pizzaName, pizzaPrice, pizzaIngredients) => {
    const menuItem = document.createElement("div")
    menuItem.classList.add("menuItem")
    pizzaMenuGrid.appendChild(menuItem)

    const name = document.createElement("h3")
    name.innerText = pizzaName
    menuItem.appendChild(name)

    const price = document.createElement("p")
    price.innerText = pizzaPrice
    menuItem.appendChild(price)
    
    const ingredients = document.createElement("p")
    ingredients.innerText = pizzaIngredients
    menuItem.appendChild(ingredients)
}

const Drink = (drinkName, drinkPrice) => {
    const menuItem = document.createElement("div")
    menuItem.classList.add("menuItem")
    drinkMenuGrid.appendChild(menuItem)

    const name = document.createElement("h3")
    name.innerText = drinkName
    menuItem.appendChild(name)
    
    const price = document.createElement("p")
    price.innerText = drinkPrice
    menuItem.appendChild(price)
}
