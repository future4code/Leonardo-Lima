//EXERCICIO 1

// const nome:string = process.argv[2]
// const idade:number =  Number(process.argv[3]) 


// console.log('Olá,' , nome,'!','Você tem', idade, 'anos. Em sete anos você terá',(idade + 7))

//EXERCICIO 2

const num1:number = Number(process.argv[2])
const operacao:string = process.argv[3]
const num2:number = Number(process.argv[4])
let resultado :number = Number(process.argv[5])

switch(operacao) {
    case '+':
        resultado = (num1 + num2)
        break
    case '-':
        resultado = (num1 - num2)
        break
    case '*':
        resultado =  (num1 * num2)
    case '/':
        resultado =  (num1 / num2)
        break

}

console.log('O resultado da operação', num1, operacao, num2, 'é de:',resultado  )