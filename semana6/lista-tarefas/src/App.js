import React from "react";
import "./styles.css";
import ListaTarefas from "./Componentes/ListaTarefas";
import styled from "styled-components";

const Button = styled.button`
  border-style: none;
  margin: 5px;
  height: 30px;
  width: 90px;
  background-color: #000;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
`;

const Input = styled.input`
  height: 24px;
  width: 250px;
`;
const Menu = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;
const Filtros = styled.div`
  text-transform: uppercase;
  text-align: right;
  margin-right: 27px;
`;

class App extends React.Component {
  state = {
    tarefas: [
      {
        id: 0,
        texto: "teste 1",
        completa: false
      }
    ],
    inputTexto: "",
    filtro: "",
    relCompletas: ""
  };

  onChangeTarefa = event => {
    this.setState({ inputTexto: event.target.value });
  };

  onKeyDown = event => {
    if (event.key === "Enter") {
      this.criarTarefa();
    }
  };

  criarTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputTexto,
      completa: false
    };

    const novaListaTarefa = [novaTarefa, ...this.state.tarefas];

    this.setState({ tarefas: novaListaTarefa });
  };

  alterarTarefa = tarefaId => {
    const novaTarefa = this.state.tarefas.map(tarefa => {
      if (tarefaId === tarefa.id) {
        const mudarTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        };
        return mudarTarefa;
      } else {
        return tarefa;
      }
    });

    this.setState({ tarefas: novaTarefa });
  };



  selectTarefa = (id) => {

  }

  onChangeFiltro = event => {
    this.setState({ filtro: event.target.value });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return false
      }
    })

    return (
      <div className="App">
        <div>
          <h1>Lista Tarefas</h1>
        </div>
        <Menu>
          <Input
            type="text"
            onChange={this.onChangeTarefa}
            onKeyDown={this.onKeyDown}
            value={this.state.inputTexto}
            placeholder={"Adicionar Tarefa"}
          />

          <Button onClick={this.criarTarefa}>Adicionar</Button>
          <Button onClick={this.criarTarefa}>Apagar</Button>
        </Menu>
        <Filtros>
          <span>filtrar</span>
          <select value={this.state.filtro} onChange={this.onChangeFiltro}>
            <option id="1" value="nenhum">
              nenhum
            </option>
            <option id="2" value="completas">
              completas
            </option>
            <option id="3" value="pendentes">
              pendentes
            </option>
          </select>
        </Filtros>
        <div>
          <h5>Lista</h5>
          {this.state.tarefas.map(tarefa => {
            return (
              <ListaTarefas
                key={tarefa.id}
                tarefa={tarefa}
                completa={tarefa.completa}
                alterarTarefa={this.alterarTarefa}
              />
            );
          })}

        </div>
        <div><h4>Relatórios</h4></div>
        {listaFiltrada.map(tarefa => {
          return (<div
            completa={tarefa.completa}
            onclick={() => this.selectTarefa(tarefa.id)}
          >


            {tarefa.texto}
          </div>
          )
        })}

      </div>
    );
  }
}

export default App;
