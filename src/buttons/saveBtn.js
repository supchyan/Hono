import { useTooltip } from '../tooltip.js';
import { data } from '../capture.js';

const fs = require('fs');

const saveBtn = document.getElementById('save-btn');

saveBtn.onclick = (() => {
    let dataArr = [data.t, data.x, data.y];
    var lineArray = [];
    dataArr.forEach(function (infoArray, index) {
        var line = infoArray.join(",");
        lineArray.push(index == 0 ? "data:text/csv;charset=utf-8," + line : line);
    });
    var csvContent = lineArray.join("\n");

    fs.writeFileSync('./test.csv',csvContent);

})

useTooltip(saveBtn);