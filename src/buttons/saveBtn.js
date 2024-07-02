import { useTooltip } from '../tooltip.js';
import { data } from '../capture.js';
import { calculator } from '../calculator.js';
import { createServer } from '../injections/server.js';

const opn = require('opn');
const fs = require('fs');

const saveBtn = document.getElementById('save-btn');

saveBtn.onclick = (() => {
    saveState();
})

useTooltip(saveBtn);

function openInDesmos() {
    createServer();
    opn('http://localhost:8080/calculator');

    // window.addEventListener('execPageFuncImport', arg => {
    //     state = arg.detail
    //     Calc.setState(state);
    // });
}
function saveState() {
    return fs.writeFileSync('./save.json', JSON.stringify(calculator.getState()));
}
function generateCSV() {
    let dataArr = [data.t, data.x, data.y];
    var lineArray = [];
    dataArr.forEach(function (infoArray, index) {
        var line = infoArray.join(",");
        lineArray.push(index == 0 ? "data:text/csv;charset=utf-8," + line : line);
    });
    var csvContent = lineArray.join("\n");

    fs.writeFileSync('./test.csv',csvContent);
}