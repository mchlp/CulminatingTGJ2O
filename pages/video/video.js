//when document is ready
$(document).ready(pageReady);

//page ready
function pageReady() {
    $("button").click(buttonPress);
    $("#video").addClass("w3-green");
}

//button pressed
function buttonPress() {
    var buttonID = this.id;
    console.log(buttonID);
    //switch (buttonID)
}
