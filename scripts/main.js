//when document is ready
$(document).ready(pageReady);

//page ready
function pageReady() {
    $(window).scroll(pageScroll);
}

//page scroll
function pageScroll() {
    if ($(window).scrollTop() > 0) {
        $('#navBar').addClass("nav-bar-fixed");
    } else {
        $('#navBar').removeClass("nav-bar-fixed");
    }
}
