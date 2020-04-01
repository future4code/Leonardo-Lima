//__________________________EXERCICIO 1 _________________________________

// const respostaDoUsuario = prompt("Digite o número que você quer testar?")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// o codigo realiza uma checagem para identificar os numeros pares e os números impares
//para os números pares exibe a mensagem passou no teste .
//para os números impares , não passou no teste .

//__________________________EXERCICIO 2 _________________________________

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM d.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// A - O codigo acima exibe o preço da fruta digitado pelo usuário.

//B - O preço da fruta Maçã é R$ 2.25

//C -  O valor a ser pago seria  24,55.

//D - Ele não informa o preço que está abaixo da pêra ele informa o preço da última condição.


//__________________________EXERCICIO 3_________________________________


// const numero1 = prompt("Digite o primeiro número.")
// const numero2 = prompt("Digite o próximo número?")

// if (numero1 > 0 && numero2 > 0) {
//   let mensagem
//   if (numero1 > numero2) {
//     mensagem = "Número 1 é maior que o 2!"
//   } else {
//     mensagem = "Número 1 é menor ou igual ao 2!"
//   }
// }

// console.log(mensagem)

// sim vai retornar o erro informando que a variavel  mensagem não foi definida.
//A varaivel está definida no elemento filho por isso não pode ser lida pelo elemento pai.

//__________________________EXERCICIO 4_________________________________

// const numero1 = Number(prompt("Digite o primeiro número."))
// const numero2 = Number(prompt("Digite o próximo número?"))
// let numero3 = Number(prompt("Digite o próximo número?"))

// if (numero1 === numero2 && numero1 === numero3 && numero2 === numero3) {
//   alert("Favor não repetir os 3 números, um deles precisa ser diferente.")

// } else if (numero1 >= numero2 && numero1 >= numero3 && numero2 >= numero3) {
//   console.log("Ordem Decrescente ", numero1, ",", numero2, ",", numero3)

// } else if (numero1 >= numero2 && numero1 >= numero3 && numero3 >= numero2) {
//   console.log("Orderm Decrescente", numero1, ",", numero3, ",", numero2)
//   //   ___checked
// } else if (numero2 >= numero1 && numero2 >= numero2 && numero1 >= numero3) {
//   console.log("Ordem Decrescente ", numero2, ",", numero1, ",", numero3)

// } else if (numero2 >= numero1 && numero2 >= numero3 && numero3 >= numero1) {
//   console.log("Ordem Decrescente ", numero2, ",", numero3, ",", numero1)

// } else if (numero3 >= numero1 && numero3 >= numero2 && numero1 >= numero2) {
//   console.log("Ordem Decrescente ", numero3, ",", numero1, ",", numero2)

// } else if (numero3 >= numero1 && numero3 >= numero2 && numero2 >= numero1) {
//   console.log("Ordem Decrescente ", numero3, ",", numero2, ",", numero1)
// } else {
//   console.log("Condição não atendida!")
// }

// A - O que aconteceu  foi que os números iguais foram impressos normalmente sem validação.
// imprimiu como se eles estivessm dentro da validação de maior e menor .

//B- Aconteceu a mesma coisa do anterior , ele ignorou todas as condições e imprimiu 6 6 6.

//__________________________EXERCICIO 5_________________________________

// vou tentar realizar a segunda entrega mais tarde !
// Ainda não compreendi como transformar esse exercicio em codigo .