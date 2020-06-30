import {UserAccount} from './CreateAccount'
import { JSONFileManager } from './JSONFileManager'

// //Recebendo parâmetros do terminal 

const newAccountCPF : string = process.argv[2]
const newAccountName : string = process.argv[3]
const newAccountAge : number = Number(process.argv[4])
   

class Bank {
    private accounts : UserAccount[]
    private fileManager : JSONFileManager

    constructor (
         accounts : UserAccount[],
         fileManager :JSONFileManager             
         ) {
             this.accounts = accounts
             this.fileManager = fileManager
         }

         public createAccount(UserAccount : UserAccount) : void {

           

}




}





// //Criando uma conta com os dados recebidos 

// const newAccount :UserAccount = new UserAccount(newAccountCPF,newAccountName,newAccountAge)


// // Pegando o banco de dados 

// const fileManager : JSONFileManager = new JSONFileManager('F4Bank.json')

// const bdManager : any = fileManager.getReadFile() 


// // atualizar a base de dados

// bdManager.push(newAccount)

// // salvar as atualizações

// fileManager.setWriteFile(bdManager)


// // exibe mensagem de sucesso ao cadastrar 

// //console.log('Conta criada com Sucesso!')
