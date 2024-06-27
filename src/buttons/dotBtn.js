import { showDot, deleteExpression } from '../calculator.js'
const dotBtn = document.getElementById('dot-btn')

let isDotActive = false;
dotBtn.onclick = (() => {
    isDotActive = !isDotActive;
    showDot();
})

export { isDotActive }