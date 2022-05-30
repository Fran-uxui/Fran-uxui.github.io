/* calc per se*/

var costs = [
    7.05, 7.05, 7.05, 7.05,
    7.05, 7.05, 7.05, 7.05,
    8.8, 8.8, 8.8, 8.8,
    10.3, 10.3, 10.3, 10.3,
    12.35, 12.35, 12.35, 12.35,
    14.7, 18.8, 26, 36.76,
];

function calc() {

    var clp = 850;
    var ars = 150;
    var pen = 3.79;
    var uyu = 40;

    var fromValue = document.getElementById("from").selectedIndex;

    var toValue = document.getElementById("to").selectedIndex;

    if (fromValue < toValue) {
        var price = 0;

        for (i = fromValue; i < toValue; i++) {
            price += costs[i];
        }

        document.getElementById("clp").innerHTML = '$' + Math.round(((price - (price * 0.2)) * clp) / 100) * 100 + '<span> CLP';
        document.getElementById("clpd").innerHTML = '<span class="before">$' + Math.round((price * clp) / 100) * 100 + ' CLP </span>';
        document.getElementById("ars").innerHTML = '$' + Math.round(((price - (price * 0.2)) * ars) / 100) * 100 + '<span> ARS';
        document.getElementById("arsd").innerHTML = '<span class="before">$' + Math.round((price * ars) / 100) * 100 + ' ARS </span> ';
        document.getElementById("sol").innerHTML = '$' + Math.round(((price - (price * 0.2)) * pen) / 10) * 10 + '<span> SOL';
        document.getElementById("sold").innerHTML = '<span class="before">$' + Math.round((price * pen) / 10) * 10 + ' SOL </span>';
        document.getElementById("uyu").innerHTML = '$' + Math.round(((price - (price * 0.2)) * uyu) / 100) * 100 + '<span> UYU';
        document.getElementById("uyud").innerHTML = '<span class="before">$' + Math.round((price * uyu) / 100) * 100 + ' UYU </span>';
        document.getElementById("usd").innerHTML = '$' + Math.round((price - (price * 0.2)) / 10) * 10 + '<span> USD';
        document.getElementById("usdd").innerHTML = '<span class="before">$' + Math.round(price / 10) * 10 + ' USD </span>';
    } else {
        document.getElementById("usd").innerHTML = 'El Elo de origen tiene que ser inferior al deseado';
        document.getElementById("clp").innerHTML = 'El Elo de origen tiene que ser inferior al deseado';
        document.getElementById("ars").innerHTML = 'El Elo de origen tiene que ser inferior al deseado';
        document.getElementById("sol").innerHTML = 'El Elo de origen tiene que ser inferior al deseado';
        document.getElementById("uyu").innerHTML = 'El Elo de origen tiene que ser inferior al deseado';
    }
}



/* list script */

window.elo = 1;
window.elo2 = 1;
window.elo3 = 1;
window.elo4 = 1;

function reply_click(clicked_id) {
    window.elo = parseInt(clicked_id);
    var elocomp = elo2 + parseInt(clicked_id);
    document.getElementById('from').value = elocomp;
}

function reply_click2(clicked_id) {
    window.elo2 = parseInt(clicked_id);
    window.elo2comp = elo + parseInt(clicked_id);
    document.getElementById('from').value = elo2comp;
}

function reply_click3(clicked_id) {
    window.elo3 = parseInt(clicked_id);
    var elo3comp = elo4 + parseInt(clicked_id);
    document.getElementById('to').value = elo3comp;
}

function reply_click4(clicked_id) {
    window.elo4 = parseInt(clicked_id);
    window.elo4comp = elo3 + parseInt(clicked_id);
    document.getElementById('to').value = elo4comp;
}

function reply_click5(clicked) {
    window.moneda = clicked;
    console.log(moneda)
    document.getElementsByClassName('priceext')[0].id = moneda;
    document.getElementsByName('priceog')[0].id = moneda + 'd';
}





/* drop down*/
function drop1(_contenido) {
    document.getElementById('dropdown1').innerHTML = _contenido;
}

function drop2(_contenido) {
    document.getElementById('dropdown2').innerHTML = _contenido;

}

function drop3(_contenido) {
    document.getElementById('dropdown3').innerHTML = _contenido;
}

function drop4(_contenido) {
    document.getElementById('dropdown4').innerHTML = _contenido;
}

function drop5(_contenido) {
    document.getElementById('dropdown5').innerHTML = _contenido;
}

function reset() {
    document.getElementById('ans1').classList.add("nodisp");
    document.getElementById('ans2').classList.add("nodisp");
    document.getElementById('ans3').classList.add("nodisp");
    document.getElementById('ans4').classList.add("nodisp");
    document.getElementById('ans5').classList.add("nodisp");
}

function setanswer(ans) {
    document.getElementById(ans).classList.remove("nodisp");
}

function active() {
    document.getElementById('quest1').classList.remove("clicked");
    document.getElementById('quest2').classList.remove("clicked");
    document.getElementById('quest3').classList.remove("clicked");
    document.getElementById('quest4').classList.remove("clicked");
    document.getElementById('quest5').classList.remove("clicked");
}

function activate(questid) {
    document.getElementById(questid).classList.add("clicked");
}