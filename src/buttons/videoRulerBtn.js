import { useTooltip } from '../tooltip.js';
import { rulerState } from '../ruler.js';

const videoRulerBtn = document.getElementById('video-ruler-btn');

let isRulerActive;

videoRulerBtn.onclick = (() => {
    isRulerActive = !isRulerActive;
    rulerState(isRulerActive);
})

useTooltip(videoRulerBtn);