import { honoLogged } from "./buttons/welcomeBtn.js";
const fs = require('fs');

const vidcon = document.getElementById('video-container');
const welcomeScreen = document.getElementById('welcome-screen');
const blankWall = document.getElementById('blank-wall');

let oldWidth, oldHeight;
let wsOpacity = 1;

// отчистка старого видео для трекинга
fs.unlink(`${__dirname}/assets/videos/capture.mp4`, (e)=> { });

// wsa => Welcome Screen Animation
const wsaInterval = setInterval(() => {
    if(!document.body.contains(welcomeScreen)) 
        return clearInterval(wsaInterval);

    if(honoLogged) {
        if(wsOpacity <= 0) {
            document.body.removeChild(welcomeScreen);
            blankWall.style.zIndex = '-1';
        }
        wsOpacity -= 0.01;
        welcomeScreen.style.opacity = `${wsOpacity}`;
    }
}, 10);

function videoWindowPosition() {
    if(oldWidth != document.body.offsetWidth || oldHeight != document.body.offsetHeight) {
        vidcon.style.left = '0';
        vidcon.style.top = '0';
        oldWidth = document.body.offsetWidth;
        oldHeight = document.body.offsetHeight;
    }
}

// update модуль, который в целом просто выполняет свою работу
setInterval(() => {
    videoWindowPosition();
}, 10)