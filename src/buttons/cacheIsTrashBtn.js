import { clearCache } from '../capture.js';

const citBtn = document.getElementById('cache-is-trash-btn');
const tooltip = document.getElementById('cache-is-trash-btn-tooltip');

citBtn.onclick = (() => {
    clearCache();
})
citBtn.onmousemove = ((e) => {
    tooltip.style.left = e.clientX - tooltip.offsetWidth - 25 + 'px';
    tooltip.style.top = e.clientY - tooltip.offsetHeight / 2 + 'px';
})
citBtn.onmouseenter = (() => {
    tooltip.style.scale = 1;
})
citBtn.onmouseleave = (() => {
    tooltip.style.scale = 0;
})