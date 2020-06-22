function operacoes(a, b) {
    console.log('A soma dos números é:', a + b);
    console.log('A subtração dos números é:', a - b);
    console.log('A multiplcação dos números é:', a * b);
    var maior = 0;
    if (a > b) {
        maior = a;
    }
    else {
        maior = b;
    }
    console.log('O maior número é:', maior);
}
operacoes(6, 2);
