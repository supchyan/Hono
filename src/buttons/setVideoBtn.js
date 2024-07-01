import { convertVideo, startTracking } from '../capture.js';

const setVideoBtn = document.getElementById('set-video-btn');
const video = document.getElementById('video');

setVideoBtn.addEventListener('change', setFile, false);

function setFile() {
    // startTracking(video, setVideoBtn.files[0].path);
    convertVideo(setVideoBtn.files[0].path, './assets/videos/capture.mp4')
}

export default {}