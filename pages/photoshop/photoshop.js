var a;

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

function getContent() {
    $.ajax({
        type: "GET",
        url: "include/content.xml",
        xml: "xml",
        async: true,
        sucess: function(data) {
            a = data;
            console.log(data)
        }
    })
}
