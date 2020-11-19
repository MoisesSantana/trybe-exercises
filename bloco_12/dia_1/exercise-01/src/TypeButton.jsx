import React from 'react';

class TypeButton extends React.Component {
  render() {
    const { type } = this.props;
    return (
      <div className="type-buttons">
        <button className="type-button">All</button>
        <button className="type-button">Eletric</button>
        <button className="type-button">Fire</button>
        <button className="type-button">Bug</button>
        <button className="type-button">Poison</button>
        <button className="type-button">Psychic</button>
        <button className="type-button">Normal</button>
        <button className="type-button">Dragon</button>
      </div>
    );
  }
}

export default TypeButton;
