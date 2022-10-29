let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

document.querySelector("#search-icon").onclick = () => {
    document.querySelector("#search-form").classList.toggle("active");
};

document.querySelector("#close").onclick = () => {
    document.querySelector("#search-form").classList.remove("active");
};
let section = document.querySelectorAll("section");
// let navLinks = document
//     .querySelectorAll("header .navbar a")
//     .addEventListener("click", function(e) {
//         const id = e.target.getAttribute("href");
//         // console.log(id);
//         document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//     });

const navs = document
    .querySelector(".navbar")
    .addEventListener("click", function(e) {
        console.log("hi");
        if (e.target.classList.contains("nav-links")) {
            const id = e.target.getAttribute("href");
            console.log(id);
            document.querySelector(id).scrollIntoView({ behavior: "smooth" });
        }
    });

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// var swiper = new Swiper(".review-slider", {
//     spaceBetween: 20,
//     centeredSlides: true,
//     autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//         },
//         640: {
//             slidesPerView: 2,
//         },
//         768: {
//             slidesPerView: 2,
//         },
//         1024: {
//             slidesPerView: 3,
//         },
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });