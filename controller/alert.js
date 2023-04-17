const {dialog,ipcMain} =  require('electron')

ipcMain.handle('on-alert-event',(e,msg)=>{
    dialog.showMessageBox({
        message:msg,
        type:"info"
    })
})