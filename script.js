function seeMore1() {
    var text1 = document.getElementById('text-appear-1').style.display;
    if (text1 == "") {
        text1 = "none"
    };
    if (text1 == "none") {
        document.getElementById('text-appear-1').style.display = "block";
        document.getElementById('seeMore-1').value = "Masquer le texte";
        document.getElementById('bloc1').style.maxHeight = "500px";
        document.getElementById('bloc1').style.transitionDuration = "1000ms";
    } else {
        document.getElementById('text-appear-1').style.display = "none";
        document.getElementById('seeMore-1').value = " >>     Voir la suite    <<";
        document.getElementById('bloc1').style.maxHeight = "0px";
        document.getElementById('bloc1').style.transitionDuration = "200ms";
    }
}

function seeMore2() {
    var text2 = document.getElementById('text-appear-2').style.display;
    if (text2 == "") {
        text2 = "none"
    };
    if (text2 == "none") {
        document.getElementById('text-appear-2').style.display = "block";
        document.getElementById('seeMore-2').value = "Masquer le texte";
        document.getElementById('bloc2').style.maxHeight = "580px";
        document.getElementById('bloc2').style.transitionDuration = "1000ms";
    } else {
        document.getElementById('text-appear-2').style.display = "none";
        document.getElementById('seeMore-2').value = " >>     Voir la suite    <<";
        document.getElementById('bloc2').style.maxHeight = "0px";
        document.getElementById('bloc2').style.transitionDuration = "200ms";
    }
}

function seeMore3() {
    var text3 = document.getElementById('text-appear-3').style.display;
    if (text3 == "") {
        text3 = "none"
    };
    if (text3 == "none") {
        document.getElementById('text-appear-3').style.display = "block";
        document.getElementById('seeMore-3').value = "Masquer le texte";
        document.getElementById('bloc3').style.maxHeight = "500px";
        document.getElementById('bloc3').style.transitionDuration = "1000ms";
    } else {
        document.getElementById('text-appear-3').style.display = "none";
        document.getElementById('seeMore-3').value = " >>     Voir la suite    <<";
        document.getElementById('bloc3').style.maxHeight = "0px";
        document.getElementById('bloc3').style.transitionDuration = "200ms";

    }
}

var mql = window.matchMedia("(min-width : 1100px)");

function displayText1(test) {
    if (test.matches) {
        document.getElementById('text-appear-1').style.display = "block";
    } else {
        document.getElementById('text-appear-1').style.display = "none";
    }
}

function displayText2(test2) {
    if (test2.matches) {
        document.getElementById('text-appear-2').style.display = "block";
    } else {
        document.getElementById('text-appear-2').style.display = "none";
    }
}

function displayText3(test3) {
    if (test3.matches) {
        document.getElementById('text-appear-3').style.display = "block";
    } else {
        document.getElementById('text-appear-3').style.display = "none";
    }
}

function displayText4(test4) {
    if (test4.matches) {
        document.getElementById('title-second-row').style.display = "none";
        document.getElementById('bloc2').style.maxHeight = "100%";
    } else {
        document.getElementById('title-second-row').style.display = "block";
    }
}


mql.addListener(displayText1);
mql.addListener(displayText2);
mql.addListener(displayText3);
mql.addListener(displayText4);
