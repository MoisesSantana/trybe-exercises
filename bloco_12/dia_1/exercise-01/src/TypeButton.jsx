import React from 'react';

class TypeButton extends React.Component {
  render() {
    const { filterByType } = this.props;
    return (
      <div className="type-buttons">
        <button className="type-button" onClick={filterByType}>All</button>
        <button className="type-button" onClick={filterByType}>Electric</button>
        <button className="type-button" onClick={filterByType}>Fire</button>
        <button className="type-button" onClick={filterByType}>Bug</button>
        <button className="type-button" onClick={filterByType}>Poison</button>
        <button className="type-button" onClick={filterByType}>Psychic</button>
        <button className="type-button" onClick={filterByType}>Normal</button>
        <button className="type-button" onClick={filterByType}>Dragon</button>
      </div>
    );
  }
}

export default TypeButton;
