import React from 'react';
import Pokemon from './Pokemon';
import NextButton from './NextButton';
import TypeButton from './TypeButton';

class Pokedex extends React.Component {
    // criar um estado para armazenar o pokemon
    // fazer uma função para atualizar o estado
    // this.props.pokemons.map precisa ter um filter, antes do map
    // preciso comparar o valor do pokemon com o que está no state
  constructor (props) {
    super (props);

    this.updatePokemonState = this.updatePokemonState.bind(this);

    this.state = {
      pokemonState: 0,
      pokemonType: 'All',
    };
  }

  updatePokemonState () {
    const { pokemons } = this.props;
    const maxSize = pokemons.length - 1;

    this.setState((previousState, _props) => {
      if (previousState.pokemonState < maxSize) {
        return { pokemonState: previousState.pokemonState + 1 };
      }
      return { pokemonState: 0};
  });
  }

  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokedex">
        {pokemons.filter(pokemon => pokemon === pokemons[this.state.pokemonState])
        .map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}

        <NextButton next={this.updatePokemonState} />
        <TypeButton type={this.updatePokemonState} />
      </div>
    );
  }
}

export default Pokedex;