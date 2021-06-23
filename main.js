const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for ( element of toggle) {

    element.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
}



// Hidden Menu when click in item
const links = document.querySelectorAll("nav ul li a");

for(link of links) {
    link.addEventListener("click", () => {
        nav.classList.remove("show");
    });
}


// change the header page when click in Scroll
const header = document.querySelector("#header");

const navHeight = header.offsetHeight;

window.addEventListener("scroll", () => {
    if(window.scrollY >= navHeight) {
        header.classList.add("scroll");
    }
    else {
        header.classList.remove("scroll");
    }
})