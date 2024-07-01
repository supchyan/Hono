import { convertVideo } from '../capture.js';

const setVideoBtn = document.getElementById('set-video-btn');

setVideoBtn.addEventListener('change', setFile, false);

function setFile() {
    convertVideo(setVideoBtn.files[0].path, './assets/videos/capture.mp4')
}

export default {}