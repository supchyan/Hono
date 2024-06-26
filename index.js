import { app, BrowserWindow } from 'electron/main'

function createWindow () {
    const win = new BrowserWindow({
        width: 1920,
        height: 1000,
        autoHideMenuBar: true,
        title: 'hono',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })
    win.webContents.openDevTools()
    win.loadFile('./index.html')
}

app.whenReady().then( ()=>{ createWindow() } )

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})