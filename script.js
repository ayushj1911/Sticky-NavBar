let nav = document.getElementById("nav");

window.addEventListener("scroll", function() {
    
    if (window.pageYOffset >= 350) {        // here we give condition after scrolling (350px)
        nav.classList.add('sticky');        // here we add class (sticky) to nav
    }
})