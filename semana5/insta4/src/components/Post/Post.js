import React from 'react'
import './Post.css'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'
import { SecaoCompartilhar } from '../SecaoCompartilhar/SecaoCompartilhar'
import iconeComentario from '../../img/comment_icon.svg'
import { IconeComContador } from '../IconeComContador/IconeComContador'
import { IconeSemContador } from '../IconeSemContador/IconeSemContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeSalvoPreto from '../../img/turned_in-24px.svg'
import iconeSalvoBranco from '../../img/turned_in_not-24px.svg'
import iconeCompartilhar from '../../img/share-24px.svg'


class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    postSalvo: false,
    share: false
  }

  // Define a condição para somar a quantidade de curtidas na postagem
  onClickCurtida = () => {
    if (!this.state.curtido) {
      this.setState({
        curtido: true,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    } else {
      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }
  }
  // Fim da quantidade de curtidas

  // Condição para habilitar o comentário
  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }
  // fim da função

  //enviar comentário
  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }
  //fim do envio do comentario
// criando funcao para salvar ao clicar
  onClickSalvar = () => {
    if (!this.state.postSalvo) {
      this.setState({
        postSalvo: true
      });

    } else {
      this.setState({
        postSalvo: false
      });
    }
  }
  //fim da funcao
  //clicando em compartilhar
  aoEnviarCompartilhamento = () => {
    console.log('Post compartilhado no com a  mensagem: ')
    this.setState({
      postShare: false,

    })
  }
  // funcao para compartilhar
  onClickShare = () => {
    this.setState({

      share: !this.state.share
    })

  }
  //fim da funcao
  render() {
    // altera cor do botao de curtir
    let iconeCurtida;

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }
    // fim do status do botao de curtir

    //chamando a secao comentario
    let componenteComentario;

    if (this.state.comentando) {
      componenteComentario = (<SecaoComentario aoEnviar={this.aoEnviarComentario} />
      );
    }
    // fim de secao comentario

    // salvar post
    let iconeSalva;

    if (this.state.postSalvo) {
      iconeSalva = iconeSalvoPreto
    } else {
      iconeSalva = iconeSalvoBranco
    }
    //fim do salvar post
// compartilhar
    let postShare;

    if (this.state.share) {
      postShare = (<SecaoCompartilhar aoEnviar={this.aoEnviarCompartilhamento} />
      );
    }
    // fim compartilhar
    return (
    <div>
      <div className={'post-footer'} >
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />
        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
          <IconeSemContador
            icone={iconeSalva}
            onClickIcone={this.onClickSalvar}
          />
          <IconeSemContador
            icone={iconeCompartilhar}
            onClickIcone={this.onClickShare}

          />
      </div>
        {postShare}
      {componenteComentario}
    </div>
    )

  }

}

export default Post;