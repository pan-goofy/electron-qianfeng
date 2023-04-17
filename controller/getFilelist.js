const { log } = require('console')
const {ipcMain} = require('electron')
const path = require('path')
const {readdir} = require('fs/promises')
ipcMain.handle("on-getfiles-event",async (e,arg)=>{
    const files =  await readdir(path.resolve(__dirname,"../public/upload/"))
    console.log(files);
    return files
})