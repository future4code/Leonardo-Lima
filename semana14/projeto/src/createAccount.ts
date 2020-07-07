import * as fs from 'fs';
import * as moment from "moment";

export type ExtractItem = {
    description : string,
    value :number,
    date : string
}

export type Account = {
    name :string,
    birthDate :string,
    cpf : string,
    balance : number,
    extract : ExtractItem[]
}

const createAccount = ( name: string , birthDateString: string, cpf : string ) => {

const birthDate = moment(birthDateString , "DD/MM/YYYY")
const today = moment()
const age = today.diff(birthDate , "years")

if (age < 18 ) {
    console.log('usuario não é maior de 18 anos')
    return;
}

//1. Ler arquivo JSON

const userFilePath = "users.json"

const usersFileData :Buffer = fs.readFileSync(userFilePath)

const usersString :string = usersFileData.toString()

//2. parsear o arquivo  - parse = converter

const users :Account[] = JSON.parse(usersString)

const foundUser = users.find((user: Account) => {
    return user.cpf === cpf
})

if (foundUser !== undefined) {
    console.log("Já existe um usuário com esse CPF")
    return
}


//3. Adicionar usuário

users.push({
    name: name,
    birthDate: birthDateString,
    cpf: cpf,
    balance: 0,
    extract: []
})

//4. reescrevendo o arquivo todo 
const usersStringified = JSON.stringify(users, null, 2)
fs.writeFileSync(userFilePath, usersStringified)

}

