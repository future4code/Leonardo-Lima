import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { red, green } from '@material-ui/core/colors';
import ExibePerfil from './ExibePerfil';

function ExibeMatches(props) {

  const [matches, setMatches] = useState([])

const ListaDeMatches = () => {

  axios
    .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-lima/matches')
    .then(result => {
      setMatches(result.data.matches)
    })
    .catch(erro => {
      console.log('erro:', erro)
    })

}


useEffect(()=>{
ListaDeMatches()
},[])

  return (
      <div>
      {matches.map(mat => {
        return (
          <div className="ListaMatches" key={mat.id}>
            <div className="ListaImagem">
            <img src={mat.photo} alt={mat.name} />
            </div>
            <div className="ListaNome">
            <p>{mat.name}</p>
            </div>
          </div>
        )
      })}

    </div>


    )

}

export default ExibeMatches