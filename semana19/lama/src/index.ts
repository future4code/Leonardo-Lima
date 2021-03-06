import dotenv from 'dotenv'
import {AddressInfo} from 'net'
import express from 'express'


dotenv.config()

const app = express()


app.use(express.json())


// app.use()


const server = app.listen(3000 , () => {
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`Servidor rodando em http://localhost:${address.port}`)
    } else {
        console.error (`Falha de comunicação com o servidor`)
    }
})