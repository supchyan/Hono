const ffmpeg = require('fluent-ffmpeg');
const tracking = require('tracking/build/tracking')
import { generateTable, remExpression } from './calculator.js'


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


let storedTime;


function convertVideo(videoSrc) {
    return ffmpeg(videoSrc)
        .FPS(24)
        .noAudio()
        .videoCodec('libopenh264')
        .size('640x?').aspect('1:1').autopad(true)
        .on('end', () => {
            alert('done');
        })
        .save('./converted.mp4')
}

function startTracking(video) {
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
            storedTime = video.currentTime;

            if(video.paused) {
                if(storedTime != video.currentTime) { 
                    remExpression('test-table');
                }
                return;
            }

            event.data.forEach(function(rect) {
                coords.x = rect.x;
                coords.y = -rect.y;

                data.x.push(rect.x); 
                data.y.push(rect.y);
                data.t.push(video.currentTime);

                generateTable('test-table', data.x, data.y, data.t);
            });
        }
    });
    
    setInterval(() => {
        tracking.track('#canvas', colors);
    }, 1)
}

export {
    data, coords, startTracking, convertVideo
}