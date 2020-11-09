import React from 'react';
import './App.css';
import CardList from './CardList.js';
import Data from './Data.js';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header>
          <h1>Pokedex</h1>
        </header>
        <main>
          <CardList card={Data} />
        </main>
        <footer>
          <address>
            <p>Icons made by <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
          </address>
        </footer>
      </div>
    );
  }
}

export default App;
