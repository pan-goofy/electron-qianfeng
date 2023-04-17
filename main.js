const {app,BrowserWindow} = require('electron')
const path = require('path')
require('./controller/getSource')
require('./controller/alert')
require('./controller/openWindow')
require('./controller/getFilelist')
require('./controller/buildMenu')
const  createTray =require('./tray')
const createWindow = ()=>{
    const win =  new BrowserWindow({
        width:1200,
        height:800,
        webPreferences:{
            preload: path.join(__dirname, './preload/index.js')
        },
        show:false
    })
    win.loadFile("dist/index.html")
    //win.loadURL("http://127.0.0.1:3000/")

    win.webContents.openDevTools()

    win.on('ready-to-show',()=>{
        win.show()
    })
    createTray(app,win)
}

app.whenReady().then(()=>{
    createWindow()
})

app.on('window-all-closed',()=>{
    if(process.platform != 'darwin') app.quit()
})

