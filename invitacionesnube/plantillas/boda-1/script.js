function reveal() {
    var reveals = document.querySelectorAll(".fade-in-section");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 60;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("is-visible");
        } else {
            reveals[i].classList.remove("is-visible");
        }
    }
}
window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();