import React from 'react';
import './CardHabilidades.css'
export function CardHabilidades(props) {
  return (
    <div className="habilitiescard-container">
      <p>{props.tecnologia}</p>
      <p> {props.nivelDeConhecimento}</p>
    </div>

  );
}