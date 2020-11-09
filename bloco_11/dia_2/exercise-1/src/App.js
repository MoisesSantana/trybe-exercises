import React from 'react';
import './App.css';
import CardList from './CardList.js';
import Data from './Data.js';
import pokeballImg from './pokeball.png';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header>
          <h1>Pokedex</h1>
        </header>
        <main>
          <CardList cards={Data} />
        </main>
        <footer>
          <address className="socialMedia">
            <p>
              <img src={pokeballImg}></img>
              <a href="https://www.linkedin.com/in/moises-santana" target="_blank">LikedIn</a>
            </p>
            <p>
              <img src={pokeballImg}></img>
              <a href="https://www.github.com/MoisesSantana" target="_blank">GitHub</a>
            </p>
          </address>
          <address>
            <p>Icons made by <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
          </address>
        </footer>
      </div>
    );
  }
}

export default App;
