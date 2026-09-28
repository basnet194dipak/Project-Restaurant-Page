function menu() {
    var content = document.querySelector("#content")

    var menuContainer = document.createElement("div")

    var header = document.createElement("h1")
    header.innerText = "Our Menu"

    var antipasti = document.createElement("h2")
    antipasti.innerText = "Antipasti"

    var bruschetta = document.createElement("p")
    bruschetta.innerText = "Bruschetta al Pomodoro — Toasted bread topped with fresh tomatoes, basil, garlic, and olive oil."

    var caprese = document.createElement("p")
    caprese.innerText = "Caprese Salad — Fresh mozzarella, tomatoes, basil, and balsamic glaze."

    var pasta = document.createElement("h2")
    pasta.innerText = "Pasta"

    var carbonara = document.createElement("p")
    carbonara.innerText = "Spaghetti Carbonara — Spaghetti with pancetta, Parmesan, egg, and black pepper."

    var alfredo = document.createElement("p")
    alfredo.innerText = "Fettuccine Alfredo — Fresh fettuccine tossed in a creamy Parmesan sauce."

    var arrabbiata = document.createElement("p")
    arrabbiata.innerText = "Penne Arrabbiata — Penne pasta with spicy tomato and garlic sauce."

    var pizza = document.createElement("h2")
    pizza.innerText = "Pizza"

    var margherita = document.createElement("p")
    margherita.innerText = "Margherita — Tomato sauce, fresh mozzarella, basil, and olive oil."

    var quattroFormaggi = document.createElement("p")
    quattroFormaggi.innerText = "Quattro Formaggi — A blend of four Italian cheeses."

    var diavola = document.createElement("p")
    diavola.innerText = "Diavola — Tomato sauce, mozzarella, spicy salami, and chili."

    var desserts = document.createElement("h2")
    desserts.innerText = "Desserts"

    var tiramisu = document.createElement("p")
    tiramisu.innerText = "Tiramisu — Classic Italian dessert with coffee-soaked ladyfingers and mascarpone."

    var pannaCotta = document.createElement("p")
    pannaCotta.innerText = "Panna Cotta — Creamy vanilla dessert served with fresh berries."

    menuContainer.appendChild(header)

    menuContainer.appendChild(antipasti)
    menuContainer.appendChild(bruschetta)
    menuContainer.appendChild(caprese)

    menuContainer.appendChild(pasta)
    menuContainer.appendChild(carbonara)
    menuContainer.appendChild(alfredo)
    menuContainer.appendChild(arrabbiata)

    menuContainer.appendChild(pizza)
    menuContainer.appendChild(margherita)
    menuContainer.appendChild(quattroFormaggi)
    menuContainer.appendChild(diavola)

    menuContainer.appendChild(desserts)
    menuContainer.appendChild(tiramisu)
    menuContainer.appendChild(pannaCotta)

    content.appendChild(menuContainer)
}

export default menu;