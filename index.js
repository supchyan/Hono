import { app, BrowserWindow } from 'electron/main'

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        title: 'hono',
        icon: './icon.ico',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })
    // win.webContents.openDevTools() opens f12 menu
    win.loadFile('./index.html')
}

app.whenReady().then( ()=>{ createWindow() } )

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})