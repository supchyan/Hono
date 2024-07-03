const effects = document.getElementById('effects');
const blankWall = document.getElementById('blank-wall');
const header = document.getElementById('video-container-header');
const headerLine = document.getElementById('video-container-header-line');

// Make the DIV element draggable:
grabElement(document.getElementById('video-container'));

function grabElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + '-header')) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + '-header').onmousedown = grabMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = grabMouseDown;
    }

    function grabMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeGrabElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementGrab;

        effects.style.filter = 'brightness(20%) grayscale(100%)';
        blankWall.style.backdropFilter = 'blur(4px)';
        blankWall.style.zIndex = '1';
        header.style.cursor = 'grabbing';
        headerLine.style.backgroundColor = 'var(--light-content)'
    }

    function elementGrab(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
        elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
    }

    function closeGrabElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;

        effects.style.filter = 'brightness(100%) grayscale(0%)';
        blankWall.style.backdropFilter = 'blur(0px)';
        blankWall.style.zIndex = '-1';
        header.style.cursor = 'grab';
        headerLine.style.backgroundColor = 'var(--dark-content)'
    }
}