import {linkConnection} from './connection'
import { promises } from 'fs'
import express, { Request, Response } from 'express'
import { AddressInfo } from 'net'


const app = express()
app.use(express.json())

async function listU(name: string) :Promise <any> {
    try{
        const list = await linkConnection
        .select('*')
        .from('TodoListUser')
        .where("name", "LIKE", `%${name}%`)
        console.log(list)
        

    } catch (error) {
        console.log(error)
    }
}
// listU('l')
app.get('/listaDeUsuarios', async function(req : Request, res : Response) {
    try {
        const listUsers = await listU(req.query.name as string)
        res.status(200).send({
            message:'Sucesso!',
            listUsers})
       
    } catch (error){
        console.log(error)
        res.status(400).send(error.message)
    }
})


const server = app.listen(process.env.PORT || 3000, () => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is Running in http://localhost: ${address.port}`);
    } else {
        console.error('failure starting server.')
    }
})