//EXERCICIOS

//1
//Ele solicita como parâmetro o valor em Dólar que deseja saber na conversão quanto tem no total .
// E solicita pelo prompt o valor da cotação.

//2
// A Função  irá retornar o valor multiplicado do parâmetro valor , para as opções de investimento .
//ao gerar o console.log , primeiro irá retorna o ALERT informando que tipo de investimento informado está incorreto
// e depois vai exibir a primeira linha do console.log com o valor multiplicado 165 .


//3

//A função vai  imprimir no console a quantidade total de números na primeira linha.
//na segunda linha vai mostrar o total de números do array1 que são os números pares .
// na terceira linha vai mostrar o total de números ímpares que estão no array2 por conta fo IF .


//4

// A função vai mostrar no  primeiro console o número -10 , pois ele vai  salvar em número um o menor número no array.
//no segundo console ele vai exibir o número 1590 pois é o maior número no array .



//________________Exercícios de lógica de programação____________________________________

//1

//A - FALSO
//B - FALSO
//C -VERDADEIRO
//D -VERDADEIRO
//E -VERDADEIRO


//2
//O código não estava funcionando pois estava faltando   completar a declaração da variavel com o valor que
//ela receberia e também estava faltando o incremento de i++ ao final do código informando que deveria subir um número
//até chegar no número destacado .


// const quantidadeDeNumerosPares = 5
// let i = 0
// while (i < quantidadeDeNumerosPares) {
//   console.log(i * 2)
//   i++
//  }

//3

// function mostrarTriangulo() {
//   let lado1 = 3
//   let lado2 = 3
//   let lado3 = 3
//   if (lado1 === lado2 && lado2 === lado3) {
//     console.log("Esse triangulo é Equilatero")
//   } else if (lado1 === lado2 && lado1 !== lado3 && lado2 !== lado3) {
//     console.log("Esse triangulo é Isósceles")
//   } else if (lado1 !== lado2 && lado1 !== lado3 && lado2 === lado3) {
//     console.log("Esse triangulo é Isósceles")
//   } else if (lado1 === lado3 && lado2 !== lado1 && lado2 !== lado3) {
//     console.log("Esse triangulo é Isósceles")
//   } else {
//     console.log("Esse triangulo é Escaleno")
//   }
// }
// mostrarTriangulo()

// 4

function numerosInteiros() {

  let numero1 = 30
  let numero2 = 15
  let numeroMaior = 0
  console.log("Entrada ", numero1, "e", numero2)
  if (numero1 > numero2) {
    numeroMaior = numero1
  } else
    numeroMaior = numero2
  console.log("O maior é :", numeroMaior)
  if (numero1 % numero2 === 0) {
    console.log(numero1, "é divisivel por", numero2)
  } else {
    console.log(numero1, "Não é divisivel por ", numero2)
  }
  let diferenca = numero1 - numero2
  console.log("A diferença entre eles é: ", diferenca)
}




numerosInteiros()


