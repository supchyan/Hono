const Ffmpeg = require('fluent-ffmpeg');
Ffmpeg('./video.mp4').FPS(25).save('converted.mp4');



// const image = document.getElementById('imageId');
// let frame = 1;
// const FPS = 29.75;
// setInterval(() => {
//     image.setAttribute('src', `./seq/ezgif-frame-0${frame}.png`);
//     createImageBitmap(image).then(b=>{
//         document.getElementById('canvasId').getContext('2d').drawImage(b,0,0);
//         frame = frame < 50 ? frame + 1 : 1;
//     })
// }, 1000/FPS);

