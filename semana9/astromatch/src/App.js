import React, { useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import GroupIcon from '@material-ui/icons/Group';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Logo from './imagem/logo.png'
import { blue } from '@material-ui/core/colors';
import ExibePerfil from './Components/ExibePerfil';
import ExibeMatches from './Components/ExibeMatches';



function App() {

const [paginaInicial,setPaginaInicial] = useState(true)

  const [profile, setProfile] = useState({})


  useEffect(() => {
    buscarPerfil()


  }, [])

  const buscarPerfil = () => {
    axios
      .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-lima/person')
      .then(result => {
        setProfile(result.data.profile)
      })
      .catch(erro => {
        console.log('erro:', erro)
      })
  }

const apagarListaDeMatches = () => {
  axios
    .put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-lima/clear')
    .then(result => {
      alert("A LISTA FOI REDEFINIDA COM SUCESSO!!!")
      buscarPerfil()
    })
    .catch(erro => {
      console.log('erro:', erro)
    })
}
// Logica para exibir  os Botões do Header
const alternarExibePerfilExibeLista  =  paginaInicial ? ( <ExibePerfil  perfil={profile} busca={buscarPerfil}/>) : (<ExibeMatches inicio={paginaInicial} />)

  const mostrarBotaoVoltar = !paginaInicial ? (<ArrowBackIosIcon fontSize="large" style={{ color: blue[900] }}  /> ) : (<div />)

return (
  <div className="Container">
                <div className="App">
                          <div className="Header">
        <div className="Voltar" onClick={() => setPaginaInicial(true)}> {mostrarBotaoVoltar }</div>
                                <div className="Logo"><img src={Logo} alt="Logo" /></div>
                                <div className="Icon"> <GroupIcon fontSize="large" style={{ color: blue[900] }} onClick={() => setPaginaInicial(false)}/> </div>
                          </div>
                          {alternarExibePerfilExibeLista}
                </div>
            <div className="Footer">
                    <button onClick={apagarListaDeMatches}>Limpar Informações de Matches</button>
            </div>
  </div>


)

}
export default App;
