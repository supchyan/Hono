const videoRulerWall = document.getElementById('video-ruler-wall');

function rulerState(active) {
    if(!active) {
        videoRulerWall.style.zIndex = '-1';
    
    } else {
        videoRulerWall.style.zIndex = '3';
    }
}

export default {}
export { rulerState }