import * as fs from 'fs'

export class JSONFileManager {

    private fileName : string 

    constructor ( fileName : string) {
        this.fileName = fileName
    }

    public getReadFile() : any {
        const fileBuffer : Buffer = fs.readFileSync(this.fileName)
        const fileText : string = (fileBuffer).toString()

        return fileText ? JSON.parse(fileText) : []
    }

    public setWriteFile(data : any) : void {
        const updateData : string = JSON.stringify(data,null,3)

        fs.writeFileSync(this.fileName, updateData)
    }
}