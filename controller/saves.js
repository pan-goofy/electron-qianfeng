const {Menu,dialog} =  require('electron')
const  got = require('got').default
const path = require('path')
const imageType = require('image-type')
const randomstring = require('randomstring')
const fs = require('fs')
const saves = (srcUrl)=>{
    if(srcUrl){
        console.log(srcUrl);
        const contextMenu =  Menu.buildFromTemplate([
            {
                label:'图片另存为...',
                click: async ()=>{
                    const response = await got.get(srcUrl)
                    const chunk =Buffer.from(response.rawBody)
                    const {ext,mime} = imageType(chunk)
                    const filename = randomstring.generate(10) +"." +ext
                    const {filePath,canceled} = await dialog.showSaveDialog(
                        {
                            title:"图片另存为",
                            defaultPath: path.resolve(__dirname,`../public/upload/${filename}`),
                        }
                    )
                    if(!canceled){
                        console.log(filePath);
                        fs.writeFileSync(filePath,chunk)
                     }
                }
            }
        ])

        contextMenu.popup()
    }
 }


module.exports = saves