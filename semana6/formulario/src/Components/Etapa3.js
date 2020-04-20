import React from 'react';
import '../App.css';

export class Etapa3 extends React.Component {
  state = {



  }
  render() {


    return (
      <div>
        <div>
          <h3>ETAPA 3 - Informações Gerais de Ensino</h3>
          <p>Por que você não terminou um curso de graduação ?</p>
          <input type={Text}
            placeholder={'Curso'}
          />
          <p>Você fez algum curso complementar?</p>
          <select>
            <option>Nenhum</option>
            <option>Curso Técnico</option>
            <option>Curso de Inglês</option>
          </select>

        </div>

      </div>
    )


  }

}