const { log } = require('console')
const {ipcMain,BrowserWindow} = require('electron')
const path = require('path')
const saves = require('./saves')
const cssText =`top: 50px;left: 50px;position:fixed;z-index:1000;width:60px;height:30px;background-color: cornflowerblue;border-radius: 5px;text-align :center;line-height:30px;`
const js = `
   const div =document.createElement('div')
   div.id = 'readit-button'
   div.innerHTML = '关闭窗口'
   div.addEventListener('click',()=>{myApi.close()})
   div.style.cssText = '${cssText}'
   document.body.appendChild(div)
`
let win = null
ipcMain.handle('on-open-event',(e,url)=>{
 
    win = new BrowserWindow(
        {
            width:1024,
            height:768,
            show:false,
            webPreferences:{
                preload: path.join(__dirname, '../preload/open.js')
            }
        }
    )
    win.on('ready-to-show',()=>{
        win.show()
    })
    win.loadURL(url)
   
    win.webContents.executeJavaScript(js).then(()=>{
        
    }).catch(()=>{

    })
    win.webContents.on('context-menu',(e,args)=>{
        saves(args.srcURL)
    })

 })
 
 ipcMain.handle('on-close-event',(e)=>{
        win.close();
 })