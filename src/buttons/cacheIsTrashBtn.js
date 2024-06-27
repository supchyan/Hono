import { clearCache } from "../capture.js"

const citBtn = document.getElementById('cache-is-trash-btn')

citBtn.onclick = (() => {
    clearCache();
})