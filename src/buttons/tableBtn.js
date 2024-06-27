import { showTable } from "../calculator.js";
import { data } from "../capture.js";

const tableBtn = document.getElementById('table-btn')

let isTableActive = false;
tableBtn.onclick = (() => {
    isTableActive = !isTableActive;
    showTable(data.x, data.y, data.t);
})

export { isTableActive }