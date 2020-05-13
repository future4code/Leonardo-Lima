import React from 'react'
import '../App.css';
import axios from 'axios';

const POKEMON = 1


export class Pokedex extends React.Component {

    state = {
      requestRoot: "https://pokeapi.co/api/v2/pokemon/",
      pokemonIndex: POKEMON,
      pokemonName:"",
      pokemonImage:"",
      stats:[],
      types: []
  }


  pickPokemon = (event) => {
    this.setState({ pokemonIndex: event.target.value }, this.changePokemon);
  }

  componentDidMount =( ) => {
    this.changePokemon();
  }

changePokemon = async ( )  => {
    try {
  const request = await axios
  .get(`${this.state.requestRoot}${this.state.pokemonIndex}/`)
      this.setState({pokemonData : request.data, pokemonIndex : request.data.id, pokemonName : request.data.name })
      const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.pokemonIndex}.png`
      this.setState({pokemonImage : image})
      this.setState ({types : request.data.types})
      this.setState({stats : request.data.stats})
      console.log(this.state.stats)

}
catch (error) {
  console.log('Erro:', error)
}
}
  render() {


    return (
      <div className="pokedex">

        <div className="panel">
          <div className="pokemon-name screen">
            {this.state.pokemonName}
            <span className="name-no">  no. {this.state.pokemonIndex}</span>
          </div>
              <div className='pokemon-sprite'>
                    <img src={this.state.pokemonImage} alt ="img"/>
              </div>
              <div className="panel-row">
          <div className="screen stats">
          {this.state.stats.map(i =>{
            return <div className="stat-line">

              <div className="stat-name"><div>{i.stat.name}</div></div>
              <div className="stat-value"> ......{i.base_stat}</div>

              </div>
          })}
          </div>

          <div className="type-list">

            <div className="panel-header">Tipos</div>
            <div className="type-box">
            {this.state.types.map(t => {
              return (

              <div className="type">
                <div>
                  <div className={t.type.name}>
                  {t.type.name}</div>
                  </div>
                </div>

              )
            })}
              </div>
            </div>
          </div>


          <div className="panel-header">Pesquisar</div>
          <div className="panel-row panel-evo">


          </div>




          <div>
            <div className="flex-center">
              <div className="evo-num">Informe o número do Pokemon</div>
            </div>
            <div className="panel-row-two">
            <div className="screen evo-name">
              <input type="number" onChange={this.pickPokemon}/>
            </div>

          </div>
          </div>

            </div>


          <div className="divider">
          <div className="gap" />
          <div className="hinge" />
          <div className="gap" />
          <div className="hinge" />
          <div className="gap" />
          <div className="hinge" />
          <div className="gap" />
          </div>

</div>
    );
  }
}