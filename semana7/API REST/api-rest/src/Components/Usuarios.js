import React from "react";
import '../App.css';
import axios from "axios";
import styled from "styled-components"

const ListaUser = styled.div`
  display: flex;
  text-align:left;
  justify-content:center;
  align-items: center;

`
const SpanLista = styled.p`
width:200px;
border-bottom: 1px solid #FFF;
align-items: center;
color:white;
font-weight: bold;
padding-bottom: 5px;
`
export class Usuarios extends React.Component {
  state = {
    usuarios: []
  };

  componentDidMount() {
          this.exibeUsuario()
    };

exibeUsuario = () => {
  axios
    .get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          authorization: "leonardo-lima-julian"
        }
      }
    )
    .then(resposta => {
      this.setState({ usuarios: resposta.data });
    })
    .catch(error => {
      console.log(error.response);
    });
}

  onClickApagarUsuario = (userId) => {
    axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
      {
      headers: {
          authorization: 'leonardo-lima-julian'
        }
      }
      )
      .then (reposta => {
        window.alert("Usuario  Deletado")
        this.exibeUsuario()
      })
      .catch(error => {
        window.alert("Deu RUIM DEMAIS !!!")
      })
  }
  render() {

    const lista = this.state.usuarios.map(user => {
      return (
        <ListaUser>
          <SpanLista>
            {user.name}
          </SpanLista>
          <div className='DivButton'>
            <button onClick={() => this.onClickApagarUsuario(user.id)}>
              APAGAR
        </button>
          </div>
          <br />
        </ListaUser>
      )
    })
    return (
      <div>
        <h1>Usuários</h1>
        {lista}
      </div>
    );
  }
}

export default Usuarios
