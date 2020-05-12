import React, { useState, useEffect } from "react";
import axios from 'axios'
import './App.css';
import PokeCard from './Components/PokeCard';


function App() {

  const [pokeList,setPokeList] = useState([])
  const [pokeName,setPokeName] = useState("")

useEffect(() => {
  axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
  .then(result => {
    setPokeList(result.data.results)
  })
  .catch(error => {
    console.log('erro : ', error)
  })

},[pokeList,pokeName])
  const changePokeName = event => {
    setPokeName(event.target.value)
  }





  return (
    <div className="App">
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map(pokemon =>{
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            )
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} /> }
    </div>
  );
}

export default App;
