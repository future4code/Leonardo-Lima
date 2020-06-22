function operacoes (a : number , b : number) : void {
   console.log('A soma dos números é:', a + b )
   console.log('A subtração dos números é:', a - b )
   console.log('A multiplcação dos números é:', a * b )

   let maior :number = 0

   if(a > b ) {
        maior = a
   }else {
       maior = b
   }
   console.log('O maior número é:', maior)

    }

    operacoes(6, 2)

