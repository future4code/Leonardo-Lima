import React from 'react';
import './CardPequeno.css'
export function CardPequeno(props) {
  return (
    <div>
      <div className="smallcard-container">
        <img src={props.imagemEmail} />
        <p> {props.email}</p>
      </div>
      <div className="smallcard-container">
        <img src={props.imagemEndereco} />
        <p> {props.endereco}</p>
      </div>
    </div>
  );
}