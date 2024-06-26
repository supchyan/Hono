import { showDot } from './calculator.js'
import { convertVideo, startTracking } from './capture.js'

// convertVideo('./video.mp4', 'capture.mp4')

startTracking(document.getElementById('video'), 'test-table');
showDot('test-dot');