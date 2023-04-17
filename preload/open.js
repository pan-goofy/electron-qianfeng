const { contextBridge , ipcRenderer } = require('electron')
 
const close = ()=>{

  ipcRenderer.invoke('on-close-event')
}
contextBridge.exposeInMainWorld(
    'myApi',{
        close
    }
)