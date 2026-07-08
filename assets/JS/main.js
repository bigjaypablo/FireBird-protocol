// MOBILE MENU TOGGLE
const toggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// NAVBAR SCROLL EFFECT
const header = document.querySelector(".fb-header");

window.addEventListener("scroll", () => {
  if(window.scrollY > 20){
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});





//page dissolves in/out feel 
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.remove("fade-out");
});

/* fade out before leaving page */
document.querySelectorAll("a[href]").forEach(link => {
    const url = link.getAttribute("href");

    // ignore external links
    if(!url || url.startsWith("http") || url.startsWith("#")) return;

    link.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = url;
        }, 250);
    });
});





const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".fb-menu a").forEach(link => {
    const linkPage = link.getAttribute("href");

    if(linkPage === currentPage){
        link.classList.add("active");
    }
});




const featureCards = document.querySelectorAll(".feature-card");

featureCards.forEach(card => {
    card.addEventListener("click", () => {

        featureCards.forEach(item =>
            item.classList.remove("active")
        );

        card.classList.add("active");

    });
});