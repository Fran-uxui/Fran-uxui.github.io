// on scroll down from the top 100 pix the element with de id nav is st to opacity 0 and after 500ms display none 
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("nav").style.opacity = "0";
        setTimeout(function() {
            document.getElementById("nav").style.display = "none";
        }, 500);
    } else {
        document.getElementById("nav").style.display = "flex";
        document.getElementById("nav").style.opacity = "1";
    }
}



// when the user clicks on the button with the id "selector-1" the class "active" is added to the button and the class "active" is removed from "selector-2" and "selector-3"
function selector1() {
    document.getElementById("selector-1").classList.add("active");
    document.getElementById("selector-2").classList.remove("active");
    document.getElementById("selector-3").classList.remove("active");
    document.getElementById("tarjetas-boda").style.display = "block";
    document.getElementById("tarjetas-quince").style.display = "none";
    document.getElementById("tarjetas-niños").style.display = "none";
}
function selector2() {
    document.getElementById("selector-2").classList.add("active");
    document.getElementById("selector-1").classList.remove("active");
    document.getElementById("selector-3").classList.remove("active");
    document.getElementById("tarjetas-boda").style.display = "none";
    document.getElementById("tarjetas-quince").style.display = "block";;
    document.getElementById("tarjetas-niños").style.display = "none";
}
function selector3() {
    document.getElementById("selector-3").classList.add("active");
    document.getElementById("selector-1").classList.remove("active");
    document.getElementById("selector-2").classList.remove("active");
    document.getElementById("tarjetas-boda").style.display = "none";
    document.getElementById("tarjetas-quince").style.display = "none";
    document.getElementById("tarjetas-niños").style.display = "block";

}
document.getElementById('selector-1').addEventListener('click', selector1);
document.getElementById('selector-2').addEventListener('click', selector2);
document.getElementById('selector-3').addEventListener('click', selector3);

function pregunta1() {
    if (document.getElementById('respuesta-1').classList.contains("desactivado")) {
        document.getElementById('respuesta-1').classList.remove("desactivado");
        document.getElementById('respuesta-3').classList.add("desactivado");
        document.getElementById('respuesta-2').classList.add("desactivado");
    }
    else {
        document.getElementById('respuesta-1').classList.add("desactivado");
    
    }
}
function pregunta2() {
    if (document.getElementById('respuesta-2').classList.contains("desactivado")) {
        document.getElementById('respuesta-2').classList.remove("desactivado");
        document.getElementById('respuesta-1').classList.add("desactivado");
        document.getElementById('respuesta-3').classList.add("desactivado");
    }
    else {
        document.getElementById('respuesta-2').classList.add("desactivado");
    
    }
}

function pregunta3() {
    if (document.getElementById('respuesta-3').classList.contains("desactivado")) {
        document.getElementById('respuesta-3').classList.remove("desactivado");
        document.getElementById('respuesta-1').classList.add("desactivado");
        document.getElementById('respuesta-2').classList.add("desactivado");
    }
    else {
        document.getElementById('respuesta-3').classList.add("desactivado");
    
    }
}

document.getElementById('pregunta-1').addEventListener('click', pregunta1);
document.getElementById('pregunta-2').addEventListener('click', pregunta2);
document.getElementById('pregunta-3').addEventListener('click', pregunta3);

    function loading() {
    setTimeout(function() {
        document.getElementById('logo-container').style.width = '21rem';
        setTimeout(function() {
            document.getElementById('loading').style.opacity = '0%';
        }, 1000);
    }, 700);


}

window.onload = loading;