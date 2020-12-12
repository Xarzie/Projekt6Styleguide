// lavet af Lasse Winther, dette er menu-bar + burger menu
//array med menu objekterne
let menu1 = [
    [forside = { href: "index.html", buttontext: "Forside" }],
    [omos = { href: "omos.html", buttontext: "Om Os" }],
    [viTilbyder = { href: "vitilbyder.html", buttontext: "Vi Tilbyder" }],
    [frivilig = { href: "frivilig.html", buttontext: "Frivilige" }]
]
let menu2 = [
    [ungegruppe = { href: "ungegruppe.html", buttontext: "Ungegruppe" }],
    [peertopeer = { href: "peertopeer.html", buttontext: "Peer to Peer" }],
    [aktiviteter = { href: "aktiviteter.html", buttontext: "Aktiviteter" }],
    [kontakt = { href: "kontakt.html", buttontext: "Kontakt" }]
]

//burger menu
let menu3 = [
    [forside1 = { href: "index.html", buttontext: "Forside" }],
    [omos1 = { href: "omos.html", buttontext: "Om Os" }],
    [viTilbyder1 = { href: "vitilbyder.html", buttontext: "Vi Tilbyder" }],
    [frivilig1 = { href: "frivilig.html", buttontext: "Frivilige" }],
    [ungegruppe1 = { href: "ungegruppe.html", buttontext: "Ungegruppe" }],
    [peertopeer1 = { href: "peertopeer.html", buttontext: "Peer to Peer" }],
    [aktiviteter1 = { href: "aktiviteter.html", buttontext: "Aktiviteter" }],
    [kontakt1 = { href: "kontakt.html", buttontext: "Kontakt" }]
]

console.log(menu3);

//fuktion der generere menu baren
window.onload = function () {

    //menu 1
    for (i = 0; i < menu1.length; i++) {
        // li tag
        var nr = menu1[i][0];
        var elemLi = document.createElement("li");
        elemLi.id = "listId1_" + [i];
        document.getElementById("menuBar1").appendChild(elemLi);

        // a tag
        var elemA = document.createElement("a");
        var a = document.createTextNode(nr.buttontext);
        elemA.appendChild(a);
        elemA.href = ("href", nr.href);
        document.getElementById("listId1_" + [i]).appendChild(elemA);
    }

    //menu 2
    for (i = 0; i < menu2.length; i++) {
        // li tag
        var nr = menu2[i][0];
        var elemLi = document.createElement("li");
        elemLi.id = "listId2_" + [i];
        document.getElementById("menuBar2").appendChild(elemLi);

        // a tag
        var elemA = document.createElement("a");
        var a = document.createTextNode(nr.buttontext);
        elemA.appendChild(a);
        elemA.href = ("href", nr.href);
        document.getElementById("listId2_" + [i]).appendChild(elemA);
    }

    //burger menu list
    for (i = 0; i < menu3.length; i++) {
        // li tag
        var nr = menu3[i][0];
        var elemLi = document.createElement("li");
        elemLi.id = "listId3_" + [i];
        document.getElementById("drop-content").appendChild(elemLi);

        // a tag
        var elemA = document.createElement("a");
        var a = document.createTextNode(nr.buttontext);
        elemA.appendChild(a);
        elemA.href = ("href", nr.href);
        document.getElementById("listId3_" + [i]).appendChild(elemA);
    }
}

//burger open/close
function show_hide() {
    var click = document.getElementById("drop-content");
    if (click.style.display === "none") {
        click.style.display = "block";
    } else {
        click.style.display = "none";
    }
}