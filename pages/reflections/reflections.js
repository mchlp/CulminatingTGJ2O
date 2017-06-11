var slideIndex = 1;
var content = [];

//when document is ready
$(document).ready(pageReady);

//page ready
function pageReady() {
    $("#reflections").addClass("w3-green");
    getContent();
}

function afterShowContent() {
    showDivs(slideIndex);
    $("._image").click(buttonPress);
}

function buttonPress() {
    buttonID = this.id;

    $("#modal")[0].style.display = "block";
    var modalContent = $("#modal-content")[0];
    $(modalContent).empty();
    var clickedElement = $(this).clone();
    console.log(clickedElement)

    if ($(clickedElement).naturalHeight < $(clickedElement).naturalWidth) {
        console.log("W > H");
        $(clickedElement).find("img").css("height", "auto")
        $(clickedElement).find("img").css("width", "100%")
        $(modalContent).css("width", "60%");
        $(modalContent).css("height", "auto");
    } else {
        console.log("H > W");
        $(clickedElement).find("img").css("height", screen.height*0.6+"px")
        $(clickedElement).find("img").css("width", "auto")
        $(modalContent).css("width", "auto");
        $(modalContent).css("height", "auto");
    }

    $(clickedElement).appendTo(modalContent);
}

function getContent() {
    var rawContent = new XMLHttpRequest();
    rawContent.open("GET", "include/content.xml", true);
    rawContent.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
            parseXML(this.responseXML);
        }
    }
    rawContent.send()
}

function parseXML(data) {
    var allSections = data.getElementsByTagName("section");
    for (var i = 0; i < allSections.length; i++) {
        var sectionObj = [];
        var section = allSections[i];
        var getTags = ["title", "id", "img", "alt", "class", "software", "text", "expand"];
        for (var j = 0; j < getTags.length; j++) {
            var tag = getTags[j];
            sectionObj[tag] = section.getElementsByTagName(tag)[0].textContent;
        }
        content.push(sectionObj)
    }
    showContent();
}

function showContent() {
    var contentElement = $("#content")[0];
    for (var i = 0; i < content.length; i++) {
        var sectionContent = content[i];
        var element = $(`<div class="w3-card w3-hover-shadow slide `+sectionContent["class"]+`" id="`+sectionContent["id"]+`">
            <header class="w3-container w3-blue">
                <h3>`+sectionContent["title"]+`</h3>
            </header>
            <div class="w3-container w3-light-grey">
                <div class="w3-margin" style="overflow:hidden">
                    <center><img class="hand-hover _image" src="`+sectionContent["img"]+`" style="height:500px"></center>
                    <h4><strong>Software Used: </strong>`+sectionContent["software"]+`</h4>
                    <p>`+sectionContent["text"]+`</p>
                </div>
            </div>
        </div>`);
        element.appendTo(contentElement);
    }
    afterShowContent();
}

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
