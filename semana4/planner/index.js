function cadastrarTarefa() {
  const input = document.getElementById("input-texto")
  const itemLista = input.value
  if (itemLista === "" || itemLista >= 0 || itemLista <= 0) {
    alert("Insira uma informação válida!")
  } else {
    const listaTarefas = document.getElementById("lista-dia-tarefas")
    listaTarefas.innerHTML += "<li>" + itemLista + "</li>"

    input.value = ""

  }
}