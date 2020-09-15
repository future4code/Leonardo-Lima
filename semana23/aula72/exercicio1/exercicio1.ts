

const checkOneEdit = (inputA:string , inputB:string) : boolean => {

    let characterQuantity = 0

    if(inputB.length > inputA.length + 1 || inputB.length < inputA.length - 1) {
        return false 
    }

    for ( const char of inputB) {
        if(inputA.indexOf(char) !== -1) {
            characterQuantity++
        }
    }

    return (
        characterQuantity <= inputA.length + 1 && characterQuantity >= inputA.length - 1
    )

}

console.log(checkOneEdit('banana','bananinha'))