// on click removes the class active from all the img tags inside the div with the id "botonera" and adds it to the img tag that was clicked

function clickbotonera() {
    var botonera = document.getElementById("botonera");
    var botones = botonera.getElementsByTagName("img");
    for (var i = 0; i < botones.length; i++) {
        botones[i].classList.remove("active");
    }
    var botonera = document.getElementById("info-canales");
    var botones = botonera.getElementsByClassName("item");
    for (var i = 0; i < botones.length; i++) {
        botones[i].classList.remove("visible");
    }
}

// adds the class active to the img tag that was clicked 
function clickboton(boton) {
    document.getElementById(boton).classList.add("active");
    document.getElementById(boton + "item").classList.add("visible");
}

function clickpreguntas(respuesta) {
    document.getElementById("resp1").classList.remove("respuesta-activa");
    document.getElementById("resp2").classList.remove("respuesta-activa");
    document.getElementById(respuesta).classList.add("respuesta-activa");
}

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