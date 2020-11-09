import React from 'react';
import CreateCard from './CreateCard.js';

class CardList extends React.Component {
  render () {
    const { cards } = this.props;
    return (
      <div className="AllCards">
        {cards.map(pokemon => <CreateCard key={pokemon.id} infos={pokemon} />)}
      </div>
    );
  }
}

export default CardList;
