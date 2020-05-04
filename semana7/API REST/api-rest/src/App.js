import React from 'react';
import './App.css';
import axios from "axios";
import  Usuarios  from  "./Components/Usuarios";
import Cadastro from "./Components/Cadastro";
import styled from "styled-components"



class App extends React.Component {
  state = {
    paginaAtual: "CADASTRO"
  };

  componentDidMount() {

  }

  mudarPagina = () => {
    const pagina = this.state.paginaAtual === "CADASTRO" ? "CRIAR" : "CADASTRO"

    this.setState({ paginaAtual: pagina })
  }

   render() {


    return (
      <div className="App">
        <div className="UsuariosLista">
          {this.state.paginaAtual === 'CADASTRO' ? <Cadastro /> : <Usuarios />}
          <button onClick={this.mudarPagina}>{this.state.paginaAtual === 'CADASTRO' ? 'Exibir Lista de Usuários' : 'Voltar para Cadastro'}</button>
        </div>

        </div>

    );
  }
}
export default App;