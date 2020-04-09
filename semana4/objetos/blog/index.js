function postar() {


  const postagem = [
    {
      titulo: tituloTexto,
      texto: textareaTexto,
      autor: textoAutor
    }
  ]

  const tituloTexto = document.getElementById("texto-titulo")
  const textareaTexto = document.getElementById("texto-digitado")
  const textoAutor = document.getElementById("autor")
  const publicacao = document.getElementById("publicacoes")


  postagem.innerHTML = "<article>" +
}