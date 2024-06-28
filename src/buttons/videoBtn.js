const videoContainer = document.getElementById('video-container');
const videoBtn = document.getElementById('video-btn');
const tooltip = document.getElementById('video-btn-tooltip');

videoBtn.onclick = (() => {
    videoContainer.style.visibility = videoContainer.style.visibility == 'visible' ? 'hidden' : 'visible'
    videoContainer.style.zIndex = videoContainer.style.visibility == 'visible' ? '1' : '-1'
})
videoBtn.onmousemove = ((e) => {
    tooltip.style.left = e.clientX - tooltip.offsetWidth - 25 + 'px';
    tooltip.style.top = e.clientY - tooltip.offsetHeight / 2 + 'px';
})
videoBtn.onmouseenter = (() => {
    tooltip.style.scale = 1;
})
videoBtn.onmouseleave = (() => {
    tooltip.style.scale = 0;
})