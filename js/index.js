// alert("Hello again JavaSript!!!!");

document.getElementById("btn-more").addEventListener('click', () => {
    const hiddenMenu = document.getElementById("hidden-menu");
    hiddenMenu.classList.toggle("hidden");
    // hiddenMenu.classList.toggle("transition-all");
});

window.addEventListener('mouseup', function(event){
    var hiddenMenu = document.getElementById("hidden-menu");
    if (event.target != hiddenMenu && event.target.parentNode != hiddenMenu){
        hiddenMenu.classList.add("hidden");
        // hiddenMenu.style.display = 'none';
    }
});

// Burger BUtton Functions
document.getElementById("hamburger-button").addEventListener("click", () => {
    document.getElementById("hidden-hamburger-menu").classList.remove("hidden");
});

// Close Button
document.getElementById("btn-close-hidden-menu").addEventListener("click", () => {
    document.getElementById("hidden-hamburger-menu").classList.add("hidden");
});

// Bottom Close Button
document.getElementById("bottom-btn-close-hidden-menu").addEventListener("click", () => {
    document.getElementById("hidden-hamburger-menu").classList.add("hidden");
});

// Show hidden nav on scroll
let hiddenNav = document.getElementById("hidden-nav");
hiddenNav.classList.add("hidden");
let showDiv = function () {
    let y = window.scrollY;

    if (y >= 400) {
        hiddenNav.className = "fixed top-0 left-0 right-0 bg-black text-white w-full\
                                px-12 lg:px-28 nav-bar-anim z-10 drop-shadow-lg";
    }else {
        hiddenNav.className = ".hide-nav-bar-anim hidden";
    }
}
window.addEventListener("scroll", showDiv);

// Back to top button functions
let btnBackToTop = document.getElementById("btn-back-to-top");

// show back to top button
let showBackToTop = function () {
    let y = window.scrollY;
    if (y >= 1000) {
        btnBackToTop.className = "fixed bottom-10 right-12 xl:right-16 z-20";
    }else{
        btnBackToTop.className = "hidden";
    }
}
window.addEventListener("scroll", showBackToTop);
// back to top when clicked
btnBackToTop.addEventListener("click", () => {
    window.scrollTo(0, 0);
});

