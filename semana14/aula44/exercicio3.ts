function infoArray () : void {

    const meuArray :number[] = [0,1,2,3,4,5,6,7,8,9]

    console.log('A quantidade de números no array é de :', meuArray.length)

    let impares :number[] = meuArray.filter((arr :number) => {
         if (arr % 2 !== 0){
             return true
         }              
              
    })
console.log('Os números impares são:', impares)


let soma :number = meuArray.reduce((total,currentElement) => total + currentElement)
        console.log('A soma de todos os números do array é:', soma)

}

infoArray()