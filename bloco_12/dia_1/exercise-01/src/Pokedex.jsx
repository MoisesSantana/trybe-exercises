import React from 'react';
import Pokemon from './Pokemon';
import NextButton from './NextButton';

class Pokedex extends React.Component {
    // criar um estado para armazenar o pokemon
    // fazer uma função para atualizar o estado
    // this.props.pokemons.map precisa ter um filter, antes do map
    // preciso comparar o valor do pokemon com o que está no state
  constructor (props) {
    super (props);

    this.updatePokemonState = this.updatePokemonState.bind(this);

    this.state = { pokemonState: 0 };
  }

  updatePokemonState () {
    const maxSize = this.props.pokemons.length;
    console.log(maxSize)
    this.setState((previousState, _props) => {
      if (previousState.pokemonState < maxSize) {
        return { pokemonState: previousState.pokemonState + 1 };
      }
      return { pokemonState: 0};
  });
  }

  render() {
    return (
      <div className="pokedex">
        {this.props.pokemons.filter(pokemon => pokemon === this.props.pokemons[this.state.pokemonState])
        .map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}

        <NextButton next={this.updatePokemonState} />
      </div>
    );
  }
}

export default Pokedex;