const videoContainer = document.getElementById('video-container');
const videoBtn = document.getElementById('video-btn')
videoBtn.onclick = (() => {
    videoContainer.style.visibility = videoContainer.style.visibility == 'visible' ? 'hidden' : 'visible'
})