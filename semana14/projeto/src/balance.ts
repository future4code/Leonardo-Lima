import * as fs from 'fs'
import {Account} from './createAccount'
import { userInfo } from 'os'

export const getBalance = (name : string , cpf: string) => {

//1. Ler arquivo JSON

const userFilePath = "users.json"

const usersFileData :Buffer = fs.readFileSync(userFilePath)

const usersString :string = usersFileData.toString()

const users :Account[] = JSON.parse(usersString)

const showBalance = users.filter((user => user.cpf === cpf && user.name === name){
    
})



}