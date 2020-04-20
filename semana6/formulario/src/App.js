import React from 'react';
import './App.css';
import { Etapa1 } from "./Components/Etapa1"
import { Etapa2 } from "./Components/Etapa2"
import { Etapa3 } from "./Components/Etapa3"
import { Etapa4 } from "./Components/Etapa4"

export class App extends React.Component {
  state = {
    etapa: 1,
  }

  escolheEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
      default:
        return <Etapa4 />
    }
  }

  onClickProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa  + 1 })
  }
  render() {


    return (
      <div className={'App'}>
        <div >
          {this.escolheEtapa()}
          <button onClick={this.onClickProximaEtapa} >Próxima Etapa</button>
        </div >
      </div>
    );
  }

}
export default App;
