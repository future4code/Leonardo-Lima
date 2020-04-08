function cadastrarTarefa() {
  const tarefa = document.getElementById("input-texto")
  const diaDaSemana = document.getElementById("diaDaSemana")
  const escolhaDiaDaSemana = diaDaSemana.options[diaDaSemana.selectedIndex].value
  const tarefaSegunda = document.getElementById("segunda")
  const tarefaTerca = document.getElementById("terca")
  const tarefaQuarta = document.getElementById("quarta")
  const tarefaQuinta = document.getElementById("quinta")
  const tarefaSexta = document.getElementById("sexta")
  const tarefaSabado = document.getElementById("sabado")
  const tarefaDomingo = document.getElementById("domingo")

  if (tarefa.value === "" || tarefa.value >= 0 || tarefa.value <= 0) {
    alert("Necessário informar um nome para Tarefa  e/ou a Tarefa não pode ter apenas números")
    return tarefa.value = ""
  }
  if (escolhaDiaDaSemana === "segunda") {
    tarefaSegunda.innerHTML += "<li>" + tarefa.value + "</li>"

  } else if (escolhaDiaDaSemana === "terca") {
    tarefaTerca.innerHTML += "<li>" + tarefa.value + "</li>"

  } else if (escolhaDiaDaSemana === "quarta") {
    tarefaQuarta.innerHTML += "<li>" + tarefa.value + "</li>"

  } else if (escolhaDiaDaSemana === "quinta") {
    tarefaQuinta.innerHTML += "<li>" + tarefa.value + "</li>"

  } else if (escolhaDiaDaSemana === "sexta") {
    tarefaSexta.innerHTML += "<li>" + tarefa.value + "</li>"

  } else if (escolhaDiaDaSemana === "sabado") {
    tarefaSabado.innerHTML += "<li>" + tarefa.value + "</li>"

  } else {
    tarefaDomingo.innerHTML += "<li>" + tarefa.value + "</li>"

  }
  tarefa.value = ""
}

