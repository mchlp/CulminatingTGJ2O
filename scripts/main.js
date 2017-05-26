//when document is ready
$(document).ready(pageReady);

//page ready
function pageReady() {
    //button press
    $("button").click(buttonClicked);
    $(window).scroll(pageScroll);
}

//button clicked
function buttonClicked() {
    var buttonID = this.id;
    console.log(buttonID + "button clicked");

    switch (buttonID) {
        case "home":
            window.open("./index.html", "_self");
            break;
        case "photoshop":
            window.open("./photoshop.html", "_self");
            break;

    }
}

//page scroll
function pageScroll() {
    if ($(window).scrollTop() > 0) {
        $('#navBar').addClass("nav-bar-fixed");
    } else {
        $('#navBar').removeClass("nav-bar-fixed");
    }
}
