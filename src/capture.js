const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
const tracking = require('tracking/build/tracking');
import { showTable, deleteExpression } from './calculator.js'

tracking.ColorTracker.registerColor('red', (r, g, b) => {
    return r > 100 && g < 50 && b < 50
});
const colors = new tracking.ColorTracker(['red']);


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d',{willReadFrequently: true});
const coords = {
    x: 0,
    y: 0
}
const data = {
    x: [],
    y: [],
    t: []
};

function convertVideo(srcPath, convertedPath) {
    return ffmpeg(srcPath)
        .FPS(24)
        .noAudio()
        .videoCodec('libx264') // libopenh264 is better, but its linux only
        .aspect('1:1').autopad(true) // .size('640x?') should increase performance
        .on('end', () => {
            alert('done');
        })
        .save(convertedPath)
}

function startTracking(video, videoSrc) {
    video.setAttribute('src', videoSrc)
    function drawCanvas() {
        ctx.drawImage(video, 0, 0, 640, 640);   
        requestAnimationFrame(drawCanvas);
    }
    
    video.addEventListener('loadeddata', function() {
        drawCanvas();
    });

    colors.on('track', function(event) {
        if (event.data.length === 0) {
            // не нашел цвет нужный
        } else {
            event.data.forEach(function(rect) {
                coords.x = rect.x;
                coords.y = -rect.y;

                if(video.paused) return;

                data.x.push(rect.x); 
                data.y.push(rect.y);
                data.t.push(video.currentTime);

                showTable(data.x, data.y, data.t);
            });
        }
    });
    
    setInterval(() => {
        tracking.track('#canvas', colors);
    }, 1)
}

function clearCache() {
    coords.x = 0;
    coords.y = 0;
    data.x = [];
    data.y = [];
    data.t = [];
    showTable(data.x, data.y, data.t);
}

export {
    data, coords, startTracking, convertVideo, clearCache
}