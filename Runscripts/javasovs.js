/* Oprydning af tekstfelter
Oprydnign af navn */
function kunbogstavernavn(oprydningsbogstav) {
    var regexnavn = /[^a-z æøå]/i;
    if (oprydningsbogstav.value.search(regexnavn) > - 1) {
        oprydningsbogstav.value = oprydningsbogstav.value.replace(regexnavn, "")
        document.getElementById('forkerttegn').innerHTML = "Dette felt tillader kun a-å"
    } else {
        document.getElementById('forkerttegn').innerHTML = ""
    }
}
/* mail oprydning */
function kunbogstavermail(oprydningsbogstavmail) {
    var regexmail = /[^a-z æøå0-9.@]/i;
    if (oprydningsbogstavmail.value.search(regexmail) > - 1) {
        oprydningsbogstavmail.value = oprydningsbogstavmail.value.replace(regexmail, "")
        document.getElementById('forkerttegnmail').innerHTML = "Dette felt tillader kun a-å tal fra 0-9 og @ samt ."
    } else {
        document.getElementById('forkerttegnmail').innerHTML = ""
    }
}

/* Tal med hr. Skæg - Hr skæg siger; "Telefon nummer og alder" */

function kunbogstavnumber(oprydningsbogstavsnummer) {
    var regexbananphone = /[^0-9]/i;
    if (oprydningsbogstavsnummer.value.search(regexbananphone) > - 1) {
        oprydningsbogstavsnummer.value = oprydningsbogstavsnummer.value.replace(regexbananphone, "")
        document.getElementById('forkertnummerbro').innerHTML = "Dette felt tillader tal fra 0-9 samt"
    } else {
        document.getElementById('forkertnummerbro').innerHTML = ""
    }
}
/* hr skæg leger med tal igen, og denne gang din alder */
function kunbogstavnumberalder(oprydningsbogstavsnummeralder) {
    var regexealder = /[^0-9]/i;
    if (oprydningsbogstavsnummeralder.value.search(regexealder) > - 1) {
        oprydningsbogstavsnummeralder.value = oprydningsbogstavsnummeralder.value.replace(regexealder, "")
        document.getElementById('forkertalderbro').innerHTML = "Dette felt tillader kun tal fra 0-9"
    } else {
        document.getElementById('forkertalderbro').innerHTML = ""
    }
}

/* bare en array slider til knappen i ansøgningen */
var glidebane_i = 0;
var glidebane_array = ["Send", "Ansøg som frivillig", "Send din ansøgning"];
var glidebane_elem;
function glidebaneNext() {
    glidebane_i++;
    glidebane_elem.style.opacity = 0;
    if (glidebane_i > (glidebane_array.length - 1)) {
        glidebane_i = 0;
    }
    /* test element | 0=Send | 0 1 = ansøg som frivillig | 0 1 2 = Send din ansøgning */
    for (var glidebane_e = 0; glidebane_e <= glidebane_i; glidebane_e++) {
        console.log(glidebane_array + "  KFNR  " + glidebane_e + "  ARRAYNR  " + glidebane_i)
    }

    setTimeout('glidebaneSlide()', 1000);
}
function glidebaneSlide() {
    glidebane_elem.innerHTML = glidebane_array[glidebane_i];
    glidebane_elem.style.opacity = 1;
    setTimeout('glidebaneNext()', 5000);
}

glidebane_elem = document.getElementById("glidebane"); glidebaneSlide();



