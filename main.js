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
function changeHeaderWhenScroll() {
    const header = document.querySelector("#header");
    const navHeight = header.offsetHeight;

    if(window.scrollY >= navHeight) {
        header.classList.add("scroll");
    }
    else {
        header.classList.remove("scroll");
    }
}

// Carosel Testimonial with Swiper.js

const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination"
    },
    mousewheel: true,
    keyboard: true
});


// ScrollReveal: Show elements when scroll in the page
const scrollReveal = ScrollReveal({
    origin:"top",
    distance: "30px",
    duration: 700,
    reset: true
});

scrollReveal.reveal(
    `
    #home .text, #home .image,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social 
    `, { interval: 100});


// Button back to Top

function backToTop() {
    const backToTopButton = document.querySelector(".back-to-top");

    if (window.scrollY >= 560) {
        backToTopButton.classList.add("show");
    }
    else {
        backToTopButton.classList.remove("show");
    }
}

// When Scroll

window.addEventListener("scroll", () => {
    changeHeaderWhenScroll();
    backToTop();
} );