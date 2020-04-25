import React from 'react';
import '../App.css';

export class Etapa2 extends React.Component {
  state = {



  }
  render() {


    return (
      <div>
        <div>
          <h3>ETAPA 2 - Informações do Ensino Superior</h3>
          <p>Qual o curso ?</p>
          <input type={Text}
            placeholder={'Curso'}
          />
          <p>Qual a unidade de ensino ?</p>
          <input type={Text}
            placeholder={'Unidade de Ensino'}
          />
        </div>
      
      </div>
    )


  }

}