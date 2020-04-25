import React from "react";
import "../styles.css";
import styled from 'styled-components'

const Lista = styled.div`
text-align: left;
margin-top: 5px;
margin-left: 10%;
font-size: 1rem;
`
const Texto = styled.p`
cursor: pointer;
text-decoration: none;
`
const TextoMarcado = styled.p`
cursor: pointer;
text-decoration: line-through;
`


const ListaTarefas = (props) => {
  if (!props.tarefa.completa) {
    return (
      <Lista>
        <Texto onClick={() => props.alterarTarefa(props.tarefa.id)}>{props.tarefa.texto}</Texto>
      </Lista>
    )

  } else {
    return (
      <Lista>
        <TextoMarcado onClick={() => props.alterarTarefa(props.tarefa.id)}>{props.tarefa.texto}</TextoMarcado>
      </Lista>
    )
  }


}

export default ListaTarefas

