import { showTable } from "../calculator.js";
import { data } from "../capture.js";

const tableBtn = document.getElementById('table-btn');
const tooltip = document.getElementById('table-btn-tooltip');

let isTableActive = false;
tableBtn.onclick = (() => {
    isTableActive = !isTableActive;
    showTable(data.x, data.y, data.t);
})
tableBtn.onmousemove = ((e) => {
    tooltip.style.left = e.clientX - tooltip.offsetWidth - 25 + 'px';
    tooltip.style.top = e.clientY - tooltip.offsetHeight / 2 + 'px';
})
tableBtn.onmouseenter = (() => {
    tooltip.style.scale = 1;
})
tableBtn.onmouseleave = (() => {
    tooltip.style.scale = 0;
})

export { isTableActive }