//____________________EXERCICIO 1 ___________________________

// let sum = 0
// for (let i = 0; i < 15; i++) {
//   sum += i
// }
// console.log(sum)

// O resultado exibido será 105 , pois no caso ele está somando o valor  de sum que é atualizado em cada loop pelo proximo
//número de i  até atender a condição de i menor que 15.

//____________________EXERCICIO 2 ___________________________

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// const novaLista = []
// const numero = 3
// for (const item of lista) {
//   if (item % numero === 0) {
//     novaLista.push(item)
//   }
// }
// console.log(novaLista)

//A - O comando push insere um item dentro da lista .
//B - O valor impresso no console será [10,15,25,30] Pois são os numeros que são divisiveis por 5.
//C -O valor exibido no console seria [12,15,18,21,27,30] se número tivesse o valor = 3.
//D - O valor exibido no console seria [12] se número tivesse o valor = 4.

//____________________DESAFIO 1 ___________________________

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while (quantidadeAtual < quantidadeTotal) {
//   let linha = ""
//   for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
//     linha += "0"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

//O resultado exibido se o número digitado fosse 4 seria :
// 0
// 00
// 000
// 0000

//____________________EXERCICIO 3 ___________________________
//RESPOSTA A
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// let maior = 0;
// let menor = array[0];


// for (let i = 0; i < array.length; i++) {
//   const numero = array[i];
//   if (numero > maior) {
//     maior = numero
//   }
// }
// for (let i = 0; i < array.length; i++) {
//   const numeroMenor = array[i];
//   if (numeroMenor < menor) {
//     menor = numeroMenor
//   }
// }
// console.log("O maior número é " + maior + " e o menor número é " + menor)
//RESPOSTA B
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const newArray = []

// for (let item of array) {
//   if (item = item / 10) {
//     newArray.push(item)
//   }
// }
// console.log(newArray)

//RESPOSTA C

//const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const newArray = []

// for (let item of array) {
//   if (item % 2 === 0) {
//     newArray.push(item)
//   }
// }
// console.log(newArray)

//RESPOSTA D

// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const newArray = []

// for (let i = 0; i < array.length; i++) {

//   newArray.push("O elemento do índex " + i + " é " + array[i])

// }
// console.log(newArray)




