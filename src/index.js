import load_document from "./home"
import menu from "./menu"
import about from "./about";
import "./styles.css";

load_document();

let content = document.querySelector("#content")

// select first child 
let first_child = document.querySelector('nav :nth-child(1)');
first_child.addEventListener("click", () => {
    content.innerHTML = ""
    load_document()
})


// select second child 
let secondChild = document.querySelector('nav :nth-child(2)');
secondChild.addEventListener("click", () => {
    content.innerHTML = ""
    menu()

})
// select third child

let thirdChild = document.querySelector('nav :nth-child(3)');
thirdChild.addEventListener("click", () => {
    content.innerHTML = ""
    about()
})