function infoArray() {
    var meuArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log('A quantidade de números no array é de :', meuArray.length);
    var impares = meuArray.filter(function (arr) {
        if (arr % 2 !== 0) {
            return true;
        }
    });
    console.log('Os números impares são:', impares);
    var soma = meuArray.reduce(function (total, currentElement) { return total + currentElement; });
    console.log('A soma de todos os números do array é:', soma);
}
infoArray();
