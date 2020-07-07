import {Transactions} from './Transactions'
 

export class UserAccount {
    private cpf : string
    private name :string
    private age :number
    private balance :number = 0
    private transactions : Transactions[] = []


    
    constructor(
        cpf :string,
        name:string,
        age : number

    ) {
        
        this.cpf = cpf
        this.name = name
        this.age = age            

    }

 
   
//Getters  - serve para permitir que os dados sejam consultados externamente quando
// a chave definida é privada

public getCPF() :string {
    return this.cpf
}

public getName() :string {
    return this.name
}

public getAge() :number {
    return this.age
}

public getBalance() :number {
    return this.balance
}




}