import { useTooltip } from '../tooltip.js';
import { data } from '../capture.js';
import { calculator } from '../calculator.js';
import { createServer } from '../injections/server.js';

const opn = require('opn');
const fs = require('fs');

const savePath = `${__dirname}/saved`

const saveBtn = document.getElementById('save-btn');

saveBtn.onclick = (() => {
    // openInDesmos();
    checkFolder();
    saveCSV();
    saveInstance();
})

useTooltip(saveBtn);

/**
 * Создает локальный хост, перехватывающий запросы с desmos.com
 * Должен осуществлять перенос инстанса с приложения в аккаунт desmos'a,
 * но из-за определенных штук этого не делает. 
 */
function openInDesmos() {
    createServer();
    opn('http://localhost:8080/calculator');
}
/**
 * Создает папку saved, если такой нет.
 * В папку потом сохраняются данные об инстансе приложения.
 */
function checkFolder() {
    if (!fs.existsSync(savePath)) fs.mkdirSync(savePath);
}
/**
 * Генерирует инстанс калькулятора и сохраняет его в saved.
 */
function saveInstance() {
    fs.writeFileSync(`${savePath}/instance.json`, JSON.stringify(calculator.getState()));
}
/**
 * Генерирует csv таблицу и сохраняет ее в saved.
 */
function saveCSV() {
    let dataArr = [data.t, data.x, data.y];
    var lineArray = [];
    dataArr.forEach(function (infoArray, index) {
        var line = infoArray.join(",");
        lineArray.push(index == 0 ? "data:text/csv;charset=utf-8," + line : line);
    });
    var csvContent = lineArray.join("\n");

    fs.writeFileSync(`${savePath}/table.csv`,csvContent);
    fs.copyFileSync(`${__dirname}/assets/videos/capture.mp4`,`${__dirname}/saved/video.mp4`);
}