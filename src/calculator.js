const Desmos = require('desmos')
import { coords } from './capture.js'
import { isDotActive } from './buttons/dotBtn.js';
import { isTableActive } from './buttons/tableBtn.js';

const calculator = Desmos.GraphingCalculator(document.getElementById('calculator'), { autosize: true })
calculator.setMathBounds({
    left: 0,
    right: 1,
    bottom: -1,
    top: 0
});

/**
 * Sets or changes an math expression.
 * @param id - Your table ID
 */
function showTable(x, y, t) {
    const id = 'track-table';

    if(!isTableActive) return deleteExpression(id);

    calculator.setExpression({
        type: 'table',
        id: id,
        columns: [
            {
                latex: 't_1',
                values: t,
                color: Desmos.Colors.BLUE,
            },
            {
                latex: 'x_1',
                values: x,
                dragMode: Desmos.DragModes.XY,
                hidden: true 
            },
            {
                latex: 'y_1',
                values: y,
                dragMode: Desmos.DragModes.XY,
                hidden: true
            },
        ]
    });
}
function deleteExpression(id) {
    calculator.removeExpression({ id: id });
}

function showDot() {
    const id = 'track-dot';
    setInterval(() => {
        if(!isDotActive) return deleteExpression(id);
        calculator.setExpression({
            id: id, 
            latex: `(${coords.x/640},${coords.y/640})`
        })
    }, 1);
}

export { 
    showTable,
    deleteExpression,
    showDot
}