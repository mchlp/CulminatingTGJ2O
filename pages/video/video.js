var opened1 = false;
var opened2 = false;

//when document is ready
$(document).ready(pageReady);

//page ready
function pageReady() {
    $("._button").click(buttonPress);
    $("button").click(buttonPress);
    $("#video").addClass("w3-green");
}

//button pressed
function buttonPress() {
    buttonID = this.id;
    switch (buttonID) {
        case "close-1":
            if (opened1) {
                opened1 = false;
                $("#video-1").hide();
                $("#button-1")[0].children[0].innerText = "+";
                $("#player-1")[0].pause();
                $("#player-1")[0].currentTime = 0;
            } else {
                opened1 = true;
                $("#video-1").show();
                $("#player-2")[0].pause();
                $("#button-1")[0].children[0].innerText = "-";
                $("#player-1")[0].play();
            }
            $("#close-1")[0].scrollIntoView();
            break;
        case "close-2":
            if (opened2) {
                opened2 = false;
                $("#video-2").hide();
                $("#button-2")[0].children[0].innerText = "+";
                $("#player-2")[0].pause();
                $("#player-2")[0].currentTime = 0;
            } else {
                opened2 = true;
                $("#video-2").show();
                $("#player-1")[0].pause();
                $("#button-2")[0].children[0].innerText = "-";
                $("#player-2")[0].play();
            }
            $("#close-2")[0].scrollIntoView();
            break;
    }
}
