import { showDot } from './calculator.js'
import { convertVideo, startTracking } from './capture.js'

const video = document.getElementById('video');

// convertVideo('video.mp4', 'capture.mp4')
startTracking(video, './assets/videos/capture.mp4', 'test-table');
showDot('test-dot');