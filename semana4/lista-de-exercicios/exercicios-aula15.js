/*
                                                      EXERCICIOS DE FUNCOES
*/
//__________________________________EXERCICIOS 1 ________________________________________

// function maiorMenorArray() {
//   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 60, 80, 90, 85, 83, 87]
//   let primeiroMaior = 0
//   let segundoMaior = 0
//   let primeiroMenor = 90
//   let segundoMenor = 90

//   for (let item of array) {
//     if (item >= primeiroMaior) {
//       primeiroMaior = item

//     }
//   }
//   for (let item of array) {
//     if (item < primeiroMaior) {
//       segundoMaior = item
//     }
//   }
//   for (let i of array) {
//     if (i < primeiroMenor) {
//       primeiroMenor = i
//     }
//   }

//   for (let i of array) {
//     if (i > primeiroMenor && i <= segundoMenor) {
//       segundoMenor = i
//     }
//   }
//   console.log("O segundo  maior número  é: ", segundoMaior, "E o segundo menor número é: ", segundoMenor)
// }

// maiorMenorArray()

//__________________________________EXERCICIOS 2 ________________________________________

// function bemVindo() {
//   alert(
//     "Hello Labenu_ !!!! (Future4)"
//   )
// }

// bemVindo()

/*
                                                      EXERCICIOS DE FUNCOES
*/

//__________________________________EXERCICIOS 1 ________________________________________


//1 - arrays são listas que podemos armazenar números pre-definidos e chama-los posteriormente em uma função.
//Objetos são dados que podemos armazenar afim de chama-los posteriomente de uma só vez , funciona na minha opnião quase como um conjunto de informações.

//__________________________________EXERCICIOS 2 ________________________________________

// function criaRetangulo(lado1, lado2) {
//   lado1 = Number(prompt("informe o primeiro lado: "))
//   lado2 = Number(prompt("informe o segundo lado: "))
//   const perimetro = 2 * (lado1 + lado2)
//   let area = lado1 * lado2

//   console.log("largura:" + lado1 + " altura:" + lado2 + " perímetro:" + perimetro + " área:" + area)
// }

// criaRetangulo()

//__________________________________EXERCICIOS 3________________________________________

// const filmeFavorito = {
//   titulo: "O Senhor dos Anéis",
//   ano: 2003,
//   diretor: "Peter Jackson",
//   atores: ["Ian mcKellen", "Sean Bean", "Elijah Wood", "Liv Tyler"]
// }

// console.log(`Venha assistir ao filme  ${filmeFavorito.titulo} , de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores[0]} , ${filmeFavorito.atores[1]}, ${filmeFavorito.atores[2]}, ${filmeFavorito.atores[3]}`)

//__________________________________EXERCICIOS 4________________________________________


// const cadastro = {
//   nome: "Leonardo",
//   idade: 15,
//   email: "leonardo@lima.com",
//   endereco: "Rio de Janeiro"
// }

// function anonimizarPessoa() {
//   const anonimo = {
//     ...cadastro,
//     nome: "Anônimo"
//   }
//   console.log(cadastro)
//   console.log(anonimo)
// }

// anonimizarPessoa()