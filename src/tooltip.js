const offset = 25;

function setPosition(tooltip, e) {
    tooltip.style.translate = 
        `${e.clientX - tooltip.offsetWidth - offset}px ${e.clientY - tooltip.offsetHeight / 4}px`;
}

/**
 * Draws tooltip for certain component. Tooltips can be anything,
 * but it's id should be `component's id` + `-tooltip` at the end.
 * Example: `my-div-id-tooltip`.
 * @param {HTMLElement} context - component link.
 */
function useTooltip(context) {
    const tooltip = document.getElementById(`${context.id}-tooltip`);
    
    context.onmousemove = ((e) => {
        e = e || window.event;
        e.preventDefault();
        setPosition(tooltip, e);
    })
    context.onmouseenter = ((e) => {
        setPosition(tooltip, e);
        tooltip.style.scale = 1;
    })
    context.onmouseleave = (() => {
        tooltip.style.scale = 0;
    })
}

export default {}
export { useTooltip }