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

const cadastro = () => {
  return {
    nome: 'Goli',
    idade: 23,
    endereco: 'Rua da Future4' ,
    estudante = prompt("Você é um estudante ?" )
  }
}
