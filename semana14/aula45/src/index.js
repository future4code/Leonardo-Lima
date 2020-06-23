//EXERCICIO 1
// const nome:string = process.argv[2]
// const idade:number =  Number(process.argv[3]) 
// console.log('Olá,' , nome,'!','Você tem', idade, 'anos. Em sete anos você terá',(idade + 7))
//EXERCICIO 2
var num1 = Number(process.argv[2]);
var operacao = process.argv[3];
var num2 = Number(process.argv[4]);
var resultado = Number(process.argv[5]);
switch (operacao) {
    case '+':
        resultado = (num1 + num2);
        break;
    case '-':
        resultado = (num1 - num2);
        break;
    case 'multi':
        resultado = (num1 * num2);
    case '/':
        resultado = (num1 / num2);
        break;
}
console.log('O resultado da operação', num1, operacao, num2, 'é de:', resultado);
