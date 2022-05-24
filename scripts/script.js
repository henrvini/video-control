let video = document.querySelector("video#video01");
let control = document.querySelector("div.control");
let container = document.querySelector("div.container");

function showControl() {
    control.style.display = "block";
}

function hiddenControl() {
    control.style.display = "none";
}

function backTime() {
    video.currentTime -= 1;
}

function forwardTime() {
    video.currentTime += 1;
}

function decrease() {
    video.playbackRate -= 0.1;
}

function increase() {
    video.playbackRate += 0.1;
}

function playVideo() {
    video.play();
}

function stopVideo() {
    video.pause();
    video.currentTime = 0;
}
