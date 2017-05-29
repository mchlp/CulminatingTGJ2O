var content = [];
var opened = []

//when document is ready
$(document).ready(pageReady);

//page ready
function pageReady() {
    $("#video").addClass("w3-green");
    getContent();
}

//after content is showed
function afterShowContent() {
    $("._button").click(buttonPress);
    $("button").click(buttonPress);
}

//button pressed
function buttonPress() {
    buttonID = this.id;
    console.log(buttonID);

    if (buttonID.includes("close-")) {
        i = buttonID.substring(buttonID.search("[0-9]"), buttonID.search("[0-9]$") + 1);
        if (opened[i]) {
            opened[i] = false;
            $("#video-" + i).hide();
            $("#button-" + i)[0].children[0].innerText = "+";
            $("#player-" + i)[0].pause();
            $("#player-" + i)[0].currentTime = 0;
        } else {
            opened[i] = true;
            $("#video-" + i).show();
            for (var j = 0; j < opened.length; j++) {
                $("#player-" + j)[0].pause();
            }

            $("#button-" + i)[0].children[0].innerText = "-";
            $("#player-" + i)[0].play();
        }
        $("#close-" + i)[0].scrollIntoView();
    }
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
    console.log(data);
    var allVideos = data.getElementsByTagName("video");
    for (var i = 0; i < allVideos.length; i++) {
        var videoObj = [];
        var video = allVideos[i];
        videoObj["title"] = video.getElementsByTagName("title")[0].textContent;
        videoObj["id"] = video.getElementsByTagName("id")[0].textContent;
        videoObj["url"] = video.getElementsByTagName("url")[0].textContent.trim();
        videoObj["downloadLink"] = video.getElementsByTagName("download")[0].textContent;
        videoObj["class"] = video.getElementsByTagName("class")[0].textContent;
        content.push(videoObj)
    }
    showContent();
}

function showContent() {
    var contentElement = $("#content")[0];
    for (var i = 0; i < content.length; i++) {
        var elementContent = content[i]
        var element = $(`<div class="w3-card w3-margin w3-hover-shadow">
            <header id="close-` + i + `" class="w3-blue w3-display-container w3-container _button hand-hover">
                <h4>` + elementContent["title"] + `</h4>
                <span id="button-` + i + `" class="w3-container w3-display-topright w3-btn">
                    <h4>+</h4>
                </span>
            </header>
            <div hidden id="video-` + i + `" class="w3-light-grey" style="text-align:center">
                <video id="player-` + i + `" class="w3-margin" width="60%" height="auto" controls>
                    <source src="` + elementContent["url"] + `"">
                    Your browser is unable to play the video.
                </video>
            </div>
        </div>`);
        element.appendTo(contentElement);
        opened.push(false);
    }
    afterShowContent();
}
