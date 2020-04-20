import React, { Component } from 'react'
import './SecaoCompartilhar.css'
import logoFacebook from '../../img/logo_facebook.jpg'
import logoTwitter from '../../img/logo_twitter.jpg'
import logoInstagram from '../../img/logo_instagram.jpg'

export class SecaoCompartilhar extends Component {
  state = {
    valorShare: "",
    logo: [
      {
        id: 1,
        nome: "Facebook",
        imagem: logoFacebook
      },
      {
        id: 2,
        nome: "Instagram",
        imagem: logoInstagram
      },
      {
        id: 3,
        nome: "Twitter",
        imagem: logoTwitter
      }
    ]
  }
  onChangeCompartilhar = (event) => {
    this.setState({ valorShare: event.target.value })

  }

  aoEnviarCompartilhamento = () => {
  }
  render() {
    const iconeCompartilhar = this.state.logo.map((icone) => {
      return (
        <span className={'user-logo'} key={icone.id} onClick={this.aoEnviarCompartilhamento = () =>{ console.log('Post compartilhado no', icone.nome , 'com a mensagem: ' , this.state.valorShare) }}><img src={icone.imagem} alt={'logo'} /></span>
      )
    })
    return (
      <div className={'share-container'}>
        <h3>Compartilhar</h3>

        <input
          className={'input-share'}
          placeholder={'Escreva a mensagem'}
          value={this.state.valorShare}
          onChange={this.onChangeCompartilhar}
        />
        {iconeCompartilhar}
      </div >


    );
  }

}