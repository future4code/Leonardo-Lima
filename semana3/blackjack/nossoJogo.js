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

let jogadores = new Array();
let jogadorAtual = 0;

function iniciarJogo() {
   let comecar = true
   console.log("Bem vindo ao jogo de Blackjack! ou se preferir 21")

   if (confirm("Deseja iniciar uma nova rodada?")) {

   }
}

function criarJogador(num) {
   jogador = new Array();
   for (let i = 1; i <= num; i++) {
      let hand = new Array();
      let jogador = { Name: 'Jogador' + i, ID: i, Points: 0, Hand: hand }
   }
}