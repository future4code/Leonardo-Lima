//___________________exercicio 1_____________________________
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)
// false

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)
//false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
//true

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)
//false

console.log("e. ", typeof resultado)
//boolean
//___________________exercicio 2_____________________________
let array
console.log('I. ', array)
//I. undefined
array = null
console.log('II. ', array)
//II. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)
//III. 11
let i = 0
console.log('IV. ', array[i], " e ", array[i + 1])
//IV. 3 e 4
array[i + 1] = 19
const valor = array[i + 6]
console.log('V. ', array[i + 1], " e ", valor)
//V. 19 e 9
i += 1
array[i] = array[i - 1]
console.log('VI. ', array[i])
//VI. 3
i = array.length - 1
array[i] = array[i - 3]
const resultadoC = array[i] % array[1]
console.log('VII. ', resultadoC)
//VII. 1
/* A - Arrays são maneiras de se guardar e acessar mais de
 uma informação ao mesmo tempo de uma determinada variavel.
e para se declarar um array usamos a seguinte expressão:
let array = [ 1,2,3,4,5]
*/
//B-  o index inicial de um array é 0.

//C- para saber o tamanho de um array usamos  por exemplo :
// i = array.length  ( lembrando que array é o nome da variavel declarada na resposta da letra A)

/*D - Coloquei os resultados como comentário abaixo de cada trecho do codigo
para melhor entendimento. */



//___________________exercicio 3 ( exercicio 1 da parte escrita)__________________
//A-
let fahrenheit = 77
let kelvin = (fahrenheit - 32) * 5 / 9 + 273.15

console.log("A temperatura é de : " + kelvin + "º graus Kelvin")

// B-
let celsius = 80
let rFahrenheit = (celsius) * 9 / 5 + 32

console.log("A temperatura é de : " + rFahrenheit + "º graus Fahrenheit")

//C -

let gCelsius = 30
let reFahrenheit = (gCelsius) * 9 / 5 + 32
let reKelvin = (gCelsius) + 273.15

console.log("A temperatura convertida para Fahrenheit é de: " + reFahrenheit + "º graus" + "\n" + "e a temperatura  convertida para Kelvin é de: " + reKelvin + "º graus.")


//D -
let grCelsius = Number(prompt("Informe o valor em graus Celsius para ser convertido"))
let relFahrenheit = (grCelsius) * 9 / 5 + 32
let relKelvin = (grCelsius) + 273.15

console.log("A temperatuda digitada em Celsius foi de: " + grCelsius + "º graus" + "\n" + "A temperatura convertida para Fahrenheit é de: " + relFahrenheit + "º graus" + "\n" + "e a temperatura  convertida para Kelvin é de: " + relKelvin + "º graus.")

//___________________exercicio 4 ( exercicio 2 da parte escrita)__________________

let nome = prompt("Qual o seu nome?")
let idade = prompt("Qual a sua idade?")
let pais = prompt("Qual país tem vontade conhecer?")
let fruta = prompt("Qual sua fruta favorita?")
let mensagem = prompt("O que deveria ser escrito na sua lapide?")

console.log("1.Qual o seu nome?" + "\n" + "Resposta: " + nome)

console.log("2.Qual  a sua idade?" + "\n" + "Resposta: " + idade + "anos")

console.log("3.Qual país tem vontade conhecer?" + "\n" + "Resposta: " + pais)

console.log("4.Qual  a sua fruta favorita?" + "\n" + "Resposta: " + fruta)

console.log("5.O que deveria ser escrito na sua lapide?" + "\n" + "Resposta: " + mensagem)

//___________________exercicio 5 ( exercicio 3 da parte escrita)__________________
//A-
let umQuil = 0.05
let quilHora = 280
let contaLuz = (quilHora * umQuil)

console.log("O valor da conta de luz é de: R$ " + contaLuz + " Reais")

//B-

let umQuilo = 0.05
let quiloHora = 280
let valorTotal = (umQuilo * quiloHora)
let valorDesconto = valorTotal * 0.15

console.log("O valor total da conta de luz com desconto de 15% é de : R$ " + (valorTotal - valorDesconto) + " Reais")

