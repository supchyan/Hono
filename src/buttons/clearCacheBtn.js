import { clearCache } from '../capture.js';
import { useTooltip } from '../tooltip.js';

const ccBtn = document.getElementById('clear-cache-btn');

ccBtn.onclick = (() => {
    clearCache();
})

useTooltip(ccBtn);