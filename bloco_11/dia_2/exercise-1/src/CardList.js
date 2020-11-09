import React from 'react';
import CreateCard from './CreateCard.js';

class CardList extends React.Component {
  render () {
    const { pokemonsArr } = this.props;
    return (
      <div>
        {pokemonsArr.map(pokemon => <CreateCard key={pokemon.id} infos={pokemon} />)}
      </div>
    );
  }
}

export default CardList;
