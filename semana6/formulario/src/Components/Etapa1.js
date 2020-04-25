import React from 'react';
import '../App.css';

export class Etapa1 extends React.Component {
state = {



}
render () {


  return (
    <div>
    <div>
      <h3>ETAPA 1 - Dados Gerais</h3>
      <p>Qual o seu nome ?</p>
      <input type={Text}
      placeholder={'Seu Nome'}
      />
      <p>Qual a sua idade ?</p>
      <input type={Text}
        placeholder={'Idade'}
      />
      <p>Qual o seu e-mail ?</p>
      <input type={Text}
        placeholder={'e-mail'}
      />
      <p>Qual a sua escolaridade?</p>
      <select>
        <option>Ensino Médio Incompleto</option>
        <option>Ensino Médio Completo</option>
        <option>Ensino Superior Incompleto</option>
        <option>Ensino Superior Completo</option>
      </select>

    </div>

    </div>
  )


}

}