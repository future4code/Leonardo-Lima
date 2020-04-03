if (confirm("Deseja iniciar uma nova rodada?")) {
   const primeiraCartaUsuario = comprarCarta()
   const segundaCartaUsuario = comprarCarta()
   const primeiraCartaComputador = comprarCarta()
   const segundaCartaComputador = comprarCarta()
   const usuarioSomaCartas = primeiraCartaUsuario.valor + segundaCartaUsuario.valor;
   const computadorSomaCartas = primeiraCartaComputador.valor + segundaCartaComputador.valor;

   console.log("Suas cartas são: ", primeiraCartaUsuario.texto, segundaCartaUsuario.texto, "Sua pontuação atual é: ", usuarioSomaCartas),
      console.log("As cartas do computador são: ", primeiraCartaComputador.texto, segundaCartaComputador.texto, "A pontuação do computador é: ", computadorSomaCartas)
   if (computadorSomaCartas === usuarioSomaCartas) {
      console.log("EMPATE!")
   } else if (computadorSomaCartas > usuarioSomaCartas) {
      console.log("O computador GANHOU!")
   } else if (computadorSomaCartas < usuarioSomaCartas) {
      console.log("O usuário GANHOU! PARABÉNS!!!")
   } else {
      console.log("O jogo Acabou!!!")
   }
}