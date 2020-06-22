// EXERCICIOS PARTE DA TARDE 

//EXERCICIO 1


//A -


const minhaString : string = 'Hello World'
// const minhaString : string = 13  - Não é permitido informar um número para uma variavel que foi definida com o tipo string


//B - 

const meuNumero : number = 20  
// const meuNumero : number | string = 'texto' uma das formas de conseguir fazer com que a variavel aceite letras é  definir ela de forma que ela possa aceitar mais de uma tipagem
// const meuNumero : any = 'texto' outra forma é definir o tipo da variavel como any .

//C - 

const person : { name: string, age : number , favoriteColor : string } = {
    name: 'Astrodev',
    age: 99,
    favoriteColor: 'red'
}

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

enum ArcoIrisColors {
    VERMELHO = 'Vermelho',
    LARANJA = 'Laranja',
    AMARELO = 'Amarelo',
    VERDE = 'Verde',
    AZUL = 'Azul',
    ANIL = 'Anil',
    VIOLETA = 'Violeta'

}


type person = {
    name :string,
    age :number,
    favoriteColor :string
}

const astrodev : person = {
    name:"Astrodev",
    age: 99,
    favoriteColor: ArcoIrisColors.VERMELHO
}

const labenu : person = {
    name:"Labenu",
    age: 99,
    favoriteColor: ArcoIrisColors.AMARELO
}

const future4 : person = {
    name:"Future4",
    age: 99,
    favoriteColor: ArcoIrisColors.VERMELHO
}

const internet : person = {
    name:"Internet das coisas",
    age: 99,
    favoriteColor: ArcoIrisColors.VERDE
}