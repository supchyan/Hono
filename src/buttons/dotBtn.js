import { showDot, deleteExpression } from '../calculator.js';

const dotBtn = document.getElementById('dot-btn');
const tooltip = document.getElementById('dot-btn-tooltip');

let isDotActive = false;
dotBtn.onclick = (() => {
    isDotActive = !isDotActive;
    showDot();
})
dotBtn.onmousemove = ((e) => {
    tooltip.style.left = e.clientX - tooltip.offsetWidth - 25 + 'px';
    tooltip.style.top = e.clientY - tooltip.offsetHeight / 2 + 'px';
})
dotBtn.onmouseenter = (() => {
    tooltip.style.scale = 1;
})
dotBtn.onmouseleave = (() => {
    tooltip.style.scale = 0;
})

export { isDotActive }