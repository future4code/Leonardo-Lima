import React from 'react'
import './Post.css'

import { IconeComContador } from '../IconeComContador/IconeComContador'
import { IconeSemContador } from '../IconeSemContador/IconeSemContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeSalvoPreto from '../../img/turned_in-24px.svg'
import iconeSalvoBranco from '../../img/turned_in_not-24px.svg'
import iconeCompartilhar from '../../img/share-24px.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'
import { SecaoCompartilhar } from '../SecaoCompartilhar/SecaoCompartilhar'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    postSalvo: false,
    share: false
  }

  onClickCurtida = () => {
    if (!this.state.curtido) {
      this.setState({
        curtido: true,
        numeroCurtidas: this.state.numeroCurtidas + 1
      });

    } else {
      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas - 1
      });
    }

  }
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

  onClickShare = () => {
    this.setState({

      share: !this.state.share
    })

  }
  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarCompartilhamento = () => {
    console.log('Post compartilhado no Facebook com a  mensagem: ')
    this.setState({
      postShare: false,

    })
  }
  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }



  render() {
    let iconeCurtida;

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }
    let postShare;

    if (this.state.share) {
      postShare = (<SecaoCompartilhar aoEnviar={this.aoEnviarCompartilhamento} />

      );

    }


    let componenteComentario;

    if (this.state.comentando) {
      componenteComentario = (<SecaoComentario aoEnviar={this.aoEnviarComentario} />
      );
    }

    let iconeSalva;

    if (this.state.postSalvo) {
      iconeSalva = iconeSalvoPreto
    } else {
      iconeSalva = iconeSalvoBranco
    }
    return (
      <div className={'post-container'}>
        <div className={'post-header'}>
          <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
          <p>{this.props.nomeUsuario}</p>
        </div>

        <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'} />

        <div className={'post-footer'}>
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

    );
  }
}


export default Post