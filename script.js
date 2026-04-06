// Show welcome message
window.onload = function() {
    alert("Welcome to my portfolio website!");
};

// Smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Highlight section on scroll
window.addEventListener("scroll", function() {
    let sections = document.querySelectorAll("section");
    let scrollPosition = document.documentElement.scrollTop;

    sections.forEach(section => {
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (scrollPosition >= offset && scrollPosition < offset + height) {
            section.style.border = "2px solid #0077b6";
        } else {
            section.style.border = "none";
        }
    });
});

// Button to scroll to top
let btn = document.createElement("button");
btn.innerText = "⬆ Top";
btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.padding = "10px";
btn.style.backgroundColor = "#0077b6";
btn.style.color = "white";
btn.style.border = "none";
btn.style.borderRadius = "5px";
btn.style.cursor = "pointer";

document.body.appendChild(btn);

btn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
