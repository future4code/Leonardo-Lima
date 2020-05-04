import React from "react";
import '../App.css';
import axios from "axios";
import styled from "styled-components"

export class Cadastro extends React.Component {
  state = {
    nome: "",
    email: ""
  };

  onChangeNome = event => {
    this.setState({ nome: event.target.value });
  };

  onChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  onCriarUsuario = () => {
    this.criarUsuario();
    this.setState({ nome: '', email: '' })
  };

  criarUsuario = () => {
    const body = {
      name: this.state.nome,
      email: this.state.email
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            authorization: "leonardo-lima-julian"
          }
        }
      )
      .then(resposta => {
        alert("Kawabanga!!!! Cadastro Realizado!!!");
      })
      .catch(error => {
        alert("Deu Erro  !! ");
        console.log("DEU MUITO RUIM!!!", error.response);
      });

  };


  render() {


    return (
        <div className="CadastroDiv">
          <h1>Cadastro de Usuários</h1>
          <p>
            <label>Nome: </label>
            <input
              type={"Text"}
              placeholder={"Informe seu nome"}
              value={this.state.nome}
              onChange={this.onChangeNome}
            />
          </p>
          <p>
            <label>E-mail:</label>
            <input
              type={"Text"}
              placeholder={"Informe seu E-mail"}
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </p>
          <button onClick={this.onCriarUsuario}>SALVAR</button>


      </div>
    );
  }
}

export default Cadastro
