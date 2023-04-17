const {Tray,app,Menu} = require('electron')

function createTray (app,win){
    tray = new Tray('icon.png')
    tray.setToolTip('readit')
    tray.on('click',(e)=>{
        if(e.shiftKey){
            app.quit()
        }
    })
    // tray.setContextMenu(Menu.buildFromTemplate([
    //     {lable:"item1"},
    // ]))
}
