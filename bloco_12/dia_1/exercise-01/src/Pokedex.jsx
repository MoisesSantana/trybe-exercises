import React from 'react';
import Pokemon from './Pokemon';
import NextButton from './NextButton';
import TypeButton from './TypeButton';

class Pokedex extends React.Component {
  constructor (props) {
    super (props);
    const { pokemons } = props; 
    this.nextPokemon = this.nextPokemon.bind(this);
    this.filterPokemons = this.filterPokemons.bind(this);


    this.state = {
      pokemonState: 0,
      pokemons,
    };
  }

  filterPokemons ({ target }) {
    const { pokemons } = this.props;
    const type = target.innerText;

    const filteringPokemon = type === 'All' ? pokemons 
      : pokemons.filter((pokemon) => pokemon.type.includes(type));

    this.setState({ pokemons: filteringPokemon });
  }

  nextPokemon () {
    const { pokemons } = this.state;

    const maxSize = pokemons.length - 1;

    this.setState((previousState, _props) => {
      if (previousState.pokemonState < maxSize) {
        return { pokemonState: previousState.pokemonState + 1 };
      }
      return { pokemonState: 0};
  });
  }

  render() {
    const { pokemons } = this.state;
    return (
      <div className="pokedex">
        {pokemons.filter(pokemon => pokemon === pokemons[this.state.pokemonState])
        .map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}

        <NextButton next={this.nextPokemon} />
        <TypeButton filterByType={this.filterPokemons} />
      </div>
    );
  }
}

export default Pokedex;