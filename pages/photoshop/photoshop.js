//when document is ready
$(document).ready(pageReady);

//page ready
function pageReady() {
    $("#photoshop").addClass("w3-green");
    $("._image").click(buttonPress);
}

function buttonPress() {
    buttonID = this.id;
    console.log(buttonID);
}
