
let lastScrollTop = 0; // Keeps track of last scroll position
const header = document.querySelector("#header");
const logo = document.querySelector(".logo"); // Assuming you have a class 'logo' for your logo element

// Scroll event listener to hide and show the navbar
window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop && currentScroll > 50) {
        // Scroll Down - Hide navbar
        header.classList.add("hidden");
    } else {
        // Scroll Up - Show navbar
        header.classList.remove("hidden");
    }
    
    // Scroll event to add/remove the 'scrolled' class
    if (currentScroll > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
});

// document.getElementById("readMoreBtn").addEventListener("click", function () {
//     var moreText = document.getElementById("moreText");
//     if (moreText.style.display === "none" || moreText.style.display === "") {
//         moreText.style.display = "block";
//         this.textContent = "Read Less";
//     } else {
//         moreText.style.display = "none";
//         this.textContent = "Read More";
//     }
// });



