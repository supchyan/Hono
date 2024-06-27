const videoGrabber = document.getElementById('video-grabber');
const videoContainer = document.getElementById('video-container');
const calculator = document.getElementById('calculator');
window.onload = addListeners;

let mouseX = 0, mouseY = 0;
let oldPosX = 0, oldPosY = 0;
let oldMouseX = 0, oldMouseY = 0;
let posX = 0, posY = 0;

function addListeners() {
    videoGrabber.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);
    window.addEventListener('mousemove', mouseMove);
}

function mouseUp(e) {
    window.removeEventListener('mousemove', moveWindow);
    oldPosX = posX;
    oldPosY = posY;

    videoGrabber.style.cursor = 'grab';
    videoContainer.style.pointerEvents = 'auto';
    calculator.style.pointerEvents = 'auto';
}

function mouseDown(e) {

    window.addEventListener('mousemove', moveWindow);
    
    mouseX = e.clientX;
    mouseY = e.clientY;

    oldMouseX = mouseX;
    oldMouseY = mouseY;

    videoGrabber.style.cursor = 'grabbing';
    videoContainer.style.pointerEvents = 'none';
    calculator.style.pointerEvents = 'none';
}

function moveWindow(e) {
    posX = oldPosX + mouseX - oldMouseX;
    posY = oldPosY + mouseY - oldMouseY;

    videoContainer.style.marginLeft = posX + 'px';
    videoContainer.style.marginTop = posY + 'px';
}
function mouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
}