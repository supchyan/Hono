import { setColor } from '../capture.js';

const setColorBtn = document.getElementById('set-color-btn');

setColorBtn.addEventListener('input', colorPicker, false);

function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}
function colorPicker() {
    let c = hexToRgb(setColorBtn.value);
    setColor(c.r, c.g, c.b)
}

export default {}