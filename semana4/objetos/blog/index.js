const arrayPostagens = [];

function postar() {
  let textoTitulo = document.getElementById("titulo").value
  let textoConteudo = document.getElementById("conteudo").value
  let textoAutor = document.getElementById("autor").value

  const postagem = {
    titulo: textoTitulo,
    autor: textoAutor,
    conteudo: textoConteudo

  }
  arrayPostagens.push(postagem)
  document.getElementById("titulo").value = ""
  document.getElementById("conteudo").value = ""
  document.getElementById("autor").value = ""

  exibirPosts(arrayPostagens)
}

function exibirPosts(array) {
  document.getElementById("publicacoes").innerHTML = ""
  for (post of array) {
    document.getElementById("publicacoes").innerHTML +=
      `<article> <h3>${post.titulo}</h3>
      <p>${post.conteudo}</p>
  <p><strong>Autor:</strong> ${post.autor}</p>
   </article>`
  }
}

