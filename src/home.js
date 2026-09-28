import Resturant from "./resturant.jpg"

function load_document() {
    var content = document.querySelector("#content")
    var header = document.createElement("h1")
    header.innerText = "Welcome to Bella Cucina";

    // add images
    var images = document.createElement("img")
    images.src = Resturant
    images.setAttribute("alt", "Resturant")

    var p = document.createElement("p")
    p.innerText = "Enjoy delicious, freshly prepared Italian food in a warm and welcoming atmosphere."

    var next_p = document.createElement("p")
    next_p.innerText = "Come hungry, leave happy!"

    content.appendChild(header)
    content.appendChild(images)
    content.appendChild(p)
    content.appendChild(next_p)
}

export default load_document;