import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetchDogAPI = this.fetchDogAPI.bind(this);

    this.state = {
      imageLink: '',
    };
  }
  
  async fetchDogAPI() {
    const objectJSON = await fetch('https://dog.ceo/api/breeds/image/random');
    const { message } = await objectJSON.json();

    this.setState({
      imageLink: message,
    });
  }

  componentDidMount() {
    this.fetchDogAPI();
  }
  
  render() {
    return (
      <div className="App">
        <img src={this.state.imageLink} />
      </div>
    );
  }
}

export default App;
