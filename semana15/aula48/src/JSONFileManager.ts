import * as fs from 'fs'

export class JSONFileManager {

    private fileName : string 

    constructor ( fileName : string) {
        this.fileName = fileName
    }

    public getReadFile() : Object {
        const fileBuffer : Buffer = fs.readFileSync(this.fileName)
        const fileText : string = String(fileBuffer)

        return fileText ? JSON.parse(fileText) : []
    }

    public setWriteFile(data : any) : void {
        const updateData : string = JSON.stringify(data,null,3)

        fs.writeFileSync(this.fileName, updateData)
    }
}