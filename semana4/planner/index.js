function horaDoDia(evento) {
  const select = document.getElementById("hora-dia")
  const option = select.children[select.selectedIndex]
  evento = option.textContent

  return evento
}

function diaSemana(evento) {
  const select = document.getElementById("dia-semana")
  const option = select.children[select.selectedIndex]
  evento = option.value

  return evento
}

function cadastrarTarefa() {
  const tarefa = document.getElementById("input-texto")
  let i = document.getElementById(diaSemana())
  let horaAgendada = horaDoDia()

  if (tarefa.value === "" || tarefa.value >= 0 || tarefa.value <= 0) {
    alert("Necessário informar um nome para Tarefa  e/ou a Tarefa não pode ter apenas números")
    return tarefa.value = ""


  } else {
    i.innerHTML += "<li >" + horaAgendada + " " + tarefa.value + "</li>"
  }
  tarefa.value = ""

}

function apertouEnter(evento) {
  if (evento.key === "Enter") {
    cadastrarTarefa()
  }
}

function deletarTarefa() {
  for (let i = 0; i < 6; i++) {
    i = document.getElementById(diaSemana()).innerHTML = ""

    console.log(i)
    // let tarefaSegunda = document.getElementById("segunda").innerHTML = ""
    // let tarefaTerca = document.getElementById("terca").innerHTML = ""
    // let tarefaQuarta = document.getElementById("quarta").innerHTML = ""
    // let tarefaQuinta = document.getElementById("quinta").innerHTML = ""
    // let tarefaSexta = document.getElementById("sexta").innerHTML = ""
    // let tarefaSabado = document.getElementById("sabado").innerHTML = ""
    // let tarefaDomingo = document.getElementById("domingo").innerHTML = ""

  }

}