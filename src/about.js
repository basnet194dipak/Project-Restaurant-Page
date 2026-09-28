function about() {
    var content = document.querySelector("#content")

    var aboutContainer = document.createElement("div")

    var header = document.createElement("h1")
    header.innerText = "About Bella Cucina"

    var p = document.createElement("p")
    p.innerText = "Bella Cucina is a family-inspired Italian restaurant dedicated to bringing traditional Italian flavors to the table. We believe great food starts with fresh ingredients, simple recipes, and the joy of sharing a meal with others."

    var contactHeader = document.createElement("h2")
    contactHeader.innerText = "Contact Us"

    var address = document.createElement("p")
    address.innerText = "123 Piazza Street, Kathmandu"

    var phone = document.createElement("p")
    phone.innerText = "+977 01-5551234"

    var email = document.createElement("p")
    email.innerText = "hello@bellacucina.com"

    var hoursHeader = document.createElement("h2")
    hoursHeader.innerText = "Opening Hours"

    var hours = document.createElement("p")
    hours.innerText = "Monday – Friday: 11:00 AM – 10:00 PM"

    var weekendHours = document.createElement("p")
    weekendHours.innerText = "Saturday – Sunday: 10:00 AM – 11:00 PM"

    aboutContainer.appendChild(header)
    aboutContainer.appendChild(p)

    aboutContainer.appendChild(contactHeader)
    aboutContainer.appendChild(address)
    aboutContainer.appendChild(phone)
    aboutContainer.appendChild(email)

    aboutContainer.appendChild(hoursHeader)
    aboutContainer.appendChild(hours)
    aboutContainer.appendChild(weekendHours)

    content.appendChild(aboutContainer)
}

export default about;