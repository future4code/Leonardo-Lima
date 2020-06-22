// EXERCICIOS PARTE DA TARDE 
//EXERCICIO 1
//A -
var minhaString = 'Hello World';
// const minhaString : string = 13  - Não é permitido informar um número para uma variavel que foi definida com o tipo string
//B - 
var meuNumero = 20;
// const meuNumero : number | string = 'texto' uma das formas de conseguir fazer com que a variavel aceite letras é  definir ela de forma que ela possa aceitar mais de uma tipagem
// const meuNumero : any = 'texto' outra forma é definir o tipo da variavel como any .
//C - 
var person = {
    name: 'Astrodev',
    age: 99,
    favoriteColor: 'red'
};
//D - 
// type person = {
//     name :string,
//     age :number,
//     favoriteColor :string
// }
// const astrodev : person = {
//     name:"Astrodev",
//     age: 99,
//     favoriteColor: 'Green'
// }
// const labenu : person = {
//     name:"Labenu",
//     age: 99,
//     favoriteColor: 'Green'
// }
// const future4 : person = {
//     name:"Future4",
//     age: 99,
//     favoriteColor: 'Green'
// }
// const internet : person = {
//     name:"Internet das coisas",
//     age: 99,
//     favoriteColor: 'Green'
// }
// E - 
var ArcoIrisColors;
(function (ArcoIrisColors) {
    ArcoIrisColors["VERMELHO"] = "Vermelho";
    ArcoIrisColors["LARANJA"] = "Laranja";
    ArcoIrisColors["AMARELO"] = "Amarelo";
    ArcoIrisColors["VERDE"] = "Verde";
    ArcoIrisColors["AZUL"] = "Azul";
    ArcoIrisColors["ANIL"] = "Anil";
    ArcoIrisColors["VIOLETA"] = "Violeta";
})(ArcoIrisColors || (ArcoIrisColors = {}));
var astrodev = {
    name: "Astrodev",
    age: 99,
    favoriteColor: ArcoIrisColors.VERMELHO
};
var labenu = {
    name: "Labenu",
    age: 99,
    favoriteColor: ArcoIrisColors.AMARELO
};
var future4 = {
    name: "Future4",
    age: 99,
    favoriteColor: ArcoIrisColors.VERMELHO
};
var internet = {
    name: "Internet das coisas",
    age: 99,
    favoriteColor: ArcoIrisColors.VERDE
};
