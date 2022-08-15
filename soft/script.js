document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("loader-img").style.width = "40%";
    }, 600);
    setTimeout(function() {
        document.getElementById("loader").style.opacity = "0%";
    }, 900);
    setTimeout(function() {
        document.getElementById("loader").style.display = "none";
    }, 1300);
});