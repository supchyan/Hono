const videoContainer = document.getElementById('video-container');
window.onload = addListeners;

let mouseX = 0, mouseY = 0;
let oldPosX = 0, oldPosY = 0;
let oldMouseX = 0, oldMouseY = 0;
let posX = 0, posY = 0;

function addListeners() {
    videoContainer.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);
    window.addEventListener('mousemove', mouseMove);
}

function mouseUp(e) {
    window.removeEventListener('mousemove', moveWindow);
    oldPosX = posX;
    oldPosY = posY;
}

function mouseDown(e) {
    
    mouseX = e.clientX;
    mouseY = e.clientY;

    oldMouseX = mouseX;
    oldMouseY = mouseY;

    window.addEventListener('mousemove', moveWindow);
}

function moveWindow(e) {
    var div = videoContainer;

    posX = oldPosX + mouseX - oldMouseX;
    posY = oldPosY + mouseY - oldMouseY;

    div.style.left = posX + 'px';
    div.style.top = posY + 'px';
}
function mouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
}