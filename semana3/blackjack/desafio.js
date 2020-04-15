/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 *
 *
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 *
 *
 *
 */

if (confirm("Deseja iniciar uma nova rodada?")) {
   const cartaUsuario = [comprarCarta(), comprarCarta()]
   const cartaComputador = [comprarCarta(), comprarCarta()]
   let somaCartas = 0
   let mensagem = confirm("Suas cartas são: " + cartaUsuario[0].texto + " " + cartaUsuario[1].texto + ". A carta revelada do computador é :" + cartaComputador[0].texto + "\n" + ".  Deseja comprar mais uma carta?")

   for (; mensagem === true;) {
      const novaCarta = comprarCarta()
      cartaUsuario.push(novaCarta), somaCartas = 0

      for (let carta of cartaUsuario) somaCartas += carta.valor;
      if (somaCartas < 21) {
         let suaMao = "";
         for (let carta of cartaUsuario) suaMao += carta.texto + " ";
         mensagem = confirm("Suas cartas são: " + suaMao + ". A carta revelada do computador é :" + cartaComputador[0].texto + ".\n" + "Deseja comprar mais uma carta?")
      } else
         mensagem = !1
   }
   somaCartas = 0;
   for (let carta of cartaUsuario) somaCartas += carta.valor
   let pontuacaoComputador = 0
   for (let cartaC of cartaComputador) pontuacaoComputador += cartaC.valor
   let computador = somaCartas <= 21 && pontuacaoComputador <= somaCartas

   for (; computador;) {
      const cartasComputador = comprarCarta()
      cartaComputador.push(cartasComputador), pontuacaoComputador = 0;
      for (let cartasComputador of cartaComputador) pontuacaoComputador += cartasComputador.valor
      computador = somaCartas <= 21 && pontuacaoComputador <= somaCartas
   }
   resultado = somaCartas > 21 ? "O computador GANHOU!" : pontuacaoComputador > 21 ? "Você Ganhou!" : pontuacaoComputador > somaCartas ? "O computador ganhou!!!" : pontuacaoComputador < somaCartas ? "Você Ganhou !!!!!!!!!!!" : "EMPATE!"

   let resUsuario = ""
   let resComputador = ""

   for (let cartaMao of cartaUsuario) resUsuario += cartaMao.texto + " "

   for (let cartaMaoComputador of cartaComputador) resComputador += cartaMaoComputador.texto + " "

   alert("Suas cartas são: " + resUsuario + ". Sua pontuação é : " + somaCartas + ". As cartas do computador são :" + resComputador + ". A  pontuação do computador é : " + pontuacaoComputador + ". " + resultado)


} else {
   console.log(" O jogo Acabou !!!")
}

