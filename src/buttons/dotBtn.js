import { showDot, deleteExpression } from '../calculator.js';
import { useTooltip } from '../tooltip.js';

const dotBtn = document.getElementById('dot-btn');

let isDotActive = false;
dotBtn.onclick = (() => {
    isDotActive = !isDotActive;
    showDot();
})

useTooltip(dotBtn);

export { isDotActive }