/* burgermenu */
function toggleNavPanel(x) {
    var panel = document.getElementById(x), navarrow = document.getElementById("navarrow"), maxH = "600px"; /* max længde af container skal være større end Css value */
    if (panel.style.height == maxH) {
        panel.style.height = "0px";
        navarrow.innerHTML = "&#9776";
    } else {
        panel.style.height = maxH;
        navarrow.innerHTML = "&#9776";
    }
}