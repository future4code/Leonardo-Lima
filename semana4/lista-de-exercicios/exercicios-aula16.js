/*
                                                      EXERCICIOS DE FUNCÃO DE ARRAY
*/
//__________________________________EXERCICIOS 1 ________________________________________

// Antes das funções de array utilizavamos indexes doarray e o operador of .

// const array = [1, 2, 3, 4, 5]
// console.log("exibir o terceiro número da lista: " + array[2])

// for (let i of array) {
//   console.log(i)
// }

//__________________________________EXERCICIOS 2________________________________________
//A e B
// const array = [
//   { nome: "Pedro", idade: 20 },
//   { nome: "João", idade: 10 },
//   { nome: "Paula", idade: 12 },
//   { nome: "Artur", idade: 89 }
// ]

// function arraySepara() {
//   let arrayMaiores = []
//   let arrayMenores = []
//   for (let i of array) {
//     if (i.idade >= 20)
//       arrayMaiores.push(i)
//     else
//       arrayMenores.push(i)
//   }
//   console.log(arrayMaiores)
//   console.log(arrayMenores)
// }
// arraySepara()

//__________________________________EXERCICIOS 3________________________________________
//A-
// const array = [1, 2, 3, 4, 5, 6]

// function multiplica() {
//   let newArray = []
//   for (let i of array) {
//     i = i * 2
//     newArray.push(i)
//   }
//   console.log(newArray)

// }
// multiplica()

//B-
// function multiplicaTres() {
//   let newArray = []
//   for (let i of array) {
//     i = i * 3
//     newArray.push(`${i}`)
//   }
//   console.log(newArray)
// }
// multiplicaTres()

// //C-

// function parImpar() {
//   let newArray = []
//   for (let i of array) {
//     if (i % 2 === 0) {
//       newArray.push(`${i} é par`)
//     } else {
//       newArray.push(`${i} é impar`)
//     }
//   }
//   console.log(newArray)
// }
// parImpar()

//__________________________________EXERCICIOS 4________________________________________

// const pessoas = [
//   { nome: "Paula", idade: 12, altura: 1.8 },
//   { nome: "João", idade: 20, altura: 1.3 },
//   { nome: "Pedro", idade: 15, altura: 1.9 },
//   { nome: "Luciano", idade: 22, altura: 1.8 },
//   { nome: "Artur", idade: 10, altura: 1.2 },
//   { nome: "Soter", idade: 70, altura: 1.9 }
// ]
// //A e B
// function podemEntrar() {
//   let permissao = []
//   let semPermissao = []
//   for (let i of pessoas) {
//     if (i.idade > 14 && i.idade < 60 && i.altura > 1.5) {
//       permissao.push(i)
//     } else {
//       semPermissao.push(i)
//     }
//   }
//   console.log(permissao)
//   console.log(semPermissao)
// }

// podemEntrar()

//__________________________________EXERCICIOS 5________________________________________

// const consultas = [
//   { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
//   { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
//   { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
//   { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]

// function disparaEmail() {

//   consultas.forEach((consultaGenero, index, array) => {
//     let saudacao = ""
//     let lembrar = ""
//     if (consultaGenero.genero === "masculino" ) {
//           saudacao = "Sr."
//           lembrar = "lembrá-lo"
//     } else {
//       saudacao = "Sra."
//       lembrar = "lembrá-la"
//     }
//     if (consultaGenero.cancelada === true) {
//       console.log(`Olá, ${ saudacao } ${ consultaGenero.nome }.Infelizmente, sua consulta marcada
//       para o dia ${ consultaGenero.dataDaConsulta } foi cancelada.Se quiser, pode entrar em
//       contato conosco para remarcá - la`)
//     } else {
//       console.log(`Olá, ${saudacao } ${consultaGenero.nome}.Estamos enviando esta mensagem para
//     ${ lembrar } da sua consulta no dia ${ consultaGenero.dataDaConsulta }.Por favor, acuse
//     o recebimento deste e - mail.`)
//     }

//   })
//     }

// disparaEmail()

//__________________________________EXERCICIOS 6________________________________________




//INFELIZMENTE NAO CONSEGUI FINALIZAR ESSE EXERCICIO.

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizarSaldo() {

  contas.forEach((atualizaSaldoTotal,index,array) => {


    console.log(atualizaSaldoTotal.saldoTotal = atualizaSaldoTotal.saldoTotal - atualizaSaldoTotal.compras )
  })


}

atualizarSaldo()