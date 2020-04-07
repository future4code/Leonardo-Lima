//______________________________Exercicio 1 _________________________________________________//

// const minhaFuncao = (quantidade) => {
//   const array = []
//   for (let i = 0; i < quantidade; i += 2) {
//     for (let j = 0; j < i; j++) {
//       array.push(j)
//     }
//   }
//   return array
// }

// const resultadoA = minhaFuncao(2)
// const resultadoB = minhaFuncao(5)
// const resultadoC = minhaFuncao(8)
// console.log(resultadoA)
// console.log(resultadoB)
// console.log(resultadoC)

//RESPOSTA

//A - []

//B - [0, 1, 0, 1, 2, 3]

//C - [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]


//______________________________Exercicio 2 _________________________________________________//

// let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

// const funcao = (lista, nome) => {
//   for (let i = 0; i < lista.length; i++) {
//     if (lista[i] === nome) {
//       return i;
//     }
//   }
// };

// console.log(funcao(arrayDeNomes, "Darvas"));
// console.log(funcao(arrayDeNomes, "João"));
// console.log(funcao(arrayDeNomes, "Paula"));

// let arrayDeNomes = [1, 2, 3, 4, 5];

// const funcao = (lista, nome) => {
//   for (let i = 0; i < lista.length; i++) {
//     if (lista[i] === nome) {
//       return i;
//     }
//   }
// };

// console.log(funcao(arrayDeNomes, 1));
// console.log(funcao(arrayDeNomes, 2));
// console.log(funcao(arrayDeNomes, 5));

//RESPOSTA

//A -
// 0
// 2

//B - Funcionaria sim , pois o comando está exibindo no console o indice, ou seja a posição dentro do array.
// 0
// 1
// 4


//______________________________Exercicio 3 _________________________________________________//

// function somarMultiplicar(array) {
//   let resultadoA = 0;
//   let resultadoB = 1;
//   let arrayFinal = [];

//   for (let x of array) {
//     resultadoA += x;
//     resultadoB *= x;
//   }

//   arrayFinal.push(resultadoA);
//   arrayFinal.push(resultadoB);
//   return arrayFinal;
// }

// const resultado = somarMultiplicar([2, 4, 8])
// console.log(resultado)

// REPOSTA
// A função soma os valores no resultadoA , e multiplica no resultadoB ,
//criando um novo array com os resultados

//______________________________Exercicio 4 _________________________________________________//
//A-
// function converteIdade(a) {
//   return a * 7
// }
// const resultado = converteIdade(prompt("Informe a idade que deseja converter para saber a idade canina:"))
// console.log("Idade Canina: ", resultado)

//______________________________Exercicio 4 _________________________________________________//
//B -
//

// function cadastro() {

//   const nome = prompt("Informe o seu nome: "),
//     idade = prompt("Informe a sua idade: "),
//     endereco = prompt("Informe o seu endereço: "),
//     estudante = confirm("Você é estudante?")
//   if (estudante === true) {
//     return "Eu sou " + nome + "," + " tenho " + idade + " anos" + "," + " moro em " + endereco + " e sou estudante."
//   } else {
//     return "Eu sou " + nome + "," + " tenho " + idade + " anos" + "," + " moro em " + endereco + " e não sou estudante."
//   }
// }

// const resultado = cadastro()
// console.log(resultado)

//______________________________Exercicio 5 _________________________________________________//

// function seculosNumerosRomanos() {
//   const numero = prompt("Informe um ANO para  saber em qual século ele está incluso: ")
//   const romanos = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'XXI', 'XXII', 'XXIII', 'XXIV']



//   if (numero <= 100) {

//     console.log("O ano " + numero + " dc, pertence ao século :" + romanos[1])
//   } else if (numero >= 101 && numero <= 200) {
//     console.log("O ano " + numero + " dc, pertence ao século :" + romanos[2])
//   } else if (numero >= 201 && numero <= 300) {
//     console.log("O ano " + numero + " dc, pertence ao século :" + romanos[3])
//   } else if (numero >= 301 && numero <= 400) {
//     console.log("O ano " + numero + "  dc,pertence ao século :" + romanos[4])
//   } else if (numero >= 401 && numero <= 500) {
//     console.log("O ano " + numero + " dc, pertence ao século :" + romanos[5])
//   } else if (numero >= 501 && numero <= 600) {
//     console.log("O ano " + numero + " dc, pertence ao século :" + romanos[6])
//   } else if (numero >= 601 && numero <= 700) {
//     console.log("O ano " + numero + " dc, pertence ao século :" + romanos[7])
//   } else if (numero >= 701 && numero <= 800) {
//     console.log("O ano " + numero + " dc, pertence ao século :" + romanos[8])
//   } else if (numero >= 801 && numero <= 900) {
//     console.log("O ano " + numero + " dc, pertence ao século :" + romanos[9])
//   } else if (numero >= 901 && numero <= 1000) {
//     console.log("O ano " + numero + "  dc,pertence ao século :" + romanos[10])
//   } else if (numero >= 1001 && numero <= 1100) {
//     console.log("O ano " + numero + " dc, pertence ao século :" + romanos[11])
//   } else if (numero >= 1101 && numero <= 1200) {
//     console.log("O ano " + numero + "  dc,pertence ao século :" + romanos[12])
//   } else if (numero >= 1201 && numero <= 1300) {
//     console.log("O ano " + numero + "  dc,pertence ao século :" + romanos[13])
//   } else if (numero >= 1301 && numero <= 1400) {
//     console.log("O ano " + numero + "  dc,pertence ao século :" + romanos[14])
//   } else if (numero >= 1401 && numero <= 1500) {
//     console.log("O ano " + numero + " dc, pertence ao século :" + romanos[15])
//   } else if (numero >= 1501 && numero <= 1600) {
//     console.log("O ano " + numero + " dc, pertence ao século :" + romanos[16])
//   } else if (numero >= 1601 && numero <= 1700) {
//     console.log("O ano " + numero + " dc, pertence ao século :" + romanos[17])
//   } else if (numero >= 1701 && numero <= 1800) {
//     console.log("O ano " + numero + " dc, pertence ao século :" + romanos[18])
//   } else if (numero >= 1801 && numero <= 1900) {
//     console.log("O ano " + numero + " dc, pertence ao século :" + romanos[19])
//   } else if (numero >= 1901 && numero <= 2000) {
//     console.log("O ano " + numero + " dc, pertence ao século :" + romanos[20])
//   } else if (numero >= 2001 && numero <= 2100) {
//     console.log("O ano " + numero + " dc, pertence ao século :" + romanos[21])
//   } else if (numero >= 2101 && numero <= 2200) {
//     console.log("O ano " + numero + " dc, pertence ao século :" + romanos[22])
//   } else if (numero >= 2201 && numero <= 2300) {
//     console.log("O ano " + numero + " dc, pertence ao século :" + romanos[23])

//   } else {
//     console.log("O número digitado não é válido. ")
//   }

// }
// seculosNumerosRomanos()



//______________________________Exercicio 6 _________________________________________________//
//A -
// function arrayList() {
//   const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
//   console.log(array.length)
// }

// arrayList()

//B -

// let verificaParidade = (numero) => {
//   if (numero % 2 === 0) {
//     return "É par"
//   } else
//     return "É impar"
// }

// const resultado = verificaParidade(prompt("Informe um número : "))
// console.log(resultado)

//C -
// function arrayList() {
//   const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
//   const newArray = []

//   for (let item of array) {
//     if (item % 2 === 0) {
//       newArray.push(item)
//     }
//   }
//   console.log(newArray.length)

// }
// arrayList()




//D-
// function arrayList() {
//   const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
//   const newArray = []

//   for (let item of array) {
//     if (item % 2 === 0) {
//       newArray.push(item)
//     }
//   }
//   console.log(newArray)

// }
// arrayList()
