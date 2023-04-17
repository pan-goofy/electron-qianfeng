const {ipcMain, BrowserWindow} = require('electron')

const getSource = (url)=>{
    return new Promise((resolve,reject)=>{

        const win = new BrowserWindow({
            width :500,
            height : 500,
            show:false,
            webPreferences:{
                offscreen:true
            }
        })
        win.loadURL(url)
        win.webContents.on('did-finish-load',async ()=>{
            try {
                const title = win.getTitle()
                const image = await win.webContents.capturePage()
                const screenshot = image.toDataURL()
                resolve({title,image,screenshot,url})
            } catch (error) {
                reject(error)
            }
        })

    })
}


ipcMain.handle('on-url-event', async (e,url)=>{ 
    try{
        const result = await getSource(url)
        return result
    }catch(e){
        myApi.alert(e)
    }
 
 
})