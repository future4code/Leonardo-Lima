import React, { Component } from 'react'
import './SecaoCompartilhar.css'
import logoFacebook from '../../img/logo_facebook.jpg'
import logoTwitter from '../../img/logo_twitter.jpg'
import logoInstagram from '../../img/logo_instagram.jpg'

export class SecaoCompartilhar extends Component {
  state = {
    valorShare: ""

  }
  onChangeCompartilhar = (event) => {
    this.setState({ valorShare: event.target.value })

  }

  render() {
    return (
      <div className={'share-container'}>
        <h3>Compartilhar</h3>
        <img className={'user-logo'} onClick={this.props.aoEnviar} src={logoFacebook} alt={'Logo Facebook'} value={'facebook'} />
        <img className={'user-logo'} onClick={this.props.aoEnviar} src={logoTwitter} alt={'Logo Twitter'}  value={'twitter'}/>
        <img className={'user-logo'} onClick={this.props.aoEnviar} src={logoInstagram} alt={'Logo instagram'} value= {'instagram'}/>
        <input
          className={'input-share'}
          placeholder={'Escreva o comentário'}
          value={this.state.valorShare}
          onChange={this.onChangeCompartilhar}


        />

      </div >


    );
  }

}