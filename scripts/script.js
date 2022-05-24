let video = document.querySelector("video#video01");

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
