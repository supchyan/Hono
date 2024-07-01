import { honoLogged } from "./buttons/welcomeBtn.js";

const vidcon = document.getElementById('video-container');
const welcomeScreen = document.getElementById('welcome-screen');

let oldWidth, oldHeight;
let wsOpacity = 1;

setInterval(() => {
    if(oldWidth != document.body.offsetWidth || oldHeight != document.body.offsetHeight) {
        vidcon.style.left = '0';
        vidcon.style.top = '0';
        oldWidth = document.body.offsetWidth;
        oldHeight = document.body.offsetHeight;
    }

    if(honoLogged && document.body.contains(welcomeScreen)) {
        if(wsOpacity <= 0)
            document.body.removeChild(welcomeScreen)

        wsOpacity-=0.01;
        welcomeScreen.style.opacity = `${wsOpacity}`;
    }
}, 10)