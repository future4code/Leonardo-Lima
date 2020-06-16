import React, { useState } from 'react';
import  '../App.css';
import axios from 'axios'
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';
import { red, green } from '@material-ui/core/colors';

function ExibePerfil (props) {
    const [like,setLike] = useState (false)

  const match = () => {
    setLike(true)
    props.busca()

    const body = {
      id: props.perfil.id,
      choice: like
    }
    axios
      .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-lima/choose-person', body, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(result => {
        console.log("UHULLLLL DEU CERTO!!!!!", result.data)
        

      })
      .catch(erro => {
        console.log('erro:', erro)
      })
  }

  const noMatch = () => {
    setLike(false)
    props.busca()
  }

return (
  <div className="Content">
    <div className="ImagemProfile">
      <img src={props.perfil.photo} alt={props.perfil.name} />
    </div>
    <div className="InfoProfile">
      <p>{props.perfil.name} , {props.perfil.age}</p>
      <p>{props.perfil.bio}</p>
    </div>
    <div className="Escolhas">
      <div className="NoMatch"><CloseIcon style={{ fontSize: 50, color: red[900] }} onClick={noMatch}/></div>
      <div className="Match" ><FavoriteIcon style={{ fontSize: 50, color: green[900] }} onClick={match} /></div>
    </div>
  </div>
)



}

export default ExibePerfil