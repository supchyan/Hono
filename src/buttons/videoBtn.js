const videoContainer = document.getElementById('video-container');
const videoBtn = document.getElementById('video-btn')
videoBtn.onclick = (() => {
    videoContainer.style.visibility = videoContainer.style.visibility == 'visible' ? 'hidden' : 'visible'
    videoContainer.style.zIndex = videoContainer.style.visibility == 'visible' ? '1' : '-1'
})