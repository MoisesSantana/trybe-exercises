import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetchDogAPI = this.fetchDogAPI.bind(this);

    this.state = {
      loading: true,
      imageLink: '',
    };
  }
  
  fetchDogAPI() {
    this.setState({ loading: true }, async () => {
      const objectJSON = await fetch('https://dog.ceo/api/breeds/image/random');
      const { message, status } = await objectJSON.json();
  
      if (status === 'success') {
        return (
          this.setState({
            loading: false,
            imageLink: message,
          })
        );
      } else {
        return 'ERRO'
      }
    });
  }

  componentDidMount() {
    this.fetchDogAPI();
  }

  /*
  componentDidUpdate() {
    this.fetchDogAPI();
  }
  */

  shouldComponentUpdate(_nextProps, nextState) {
    const link = nextState.imageLink;
    return !link.includes('terrier');
  }

  render() {
    const { loading, imageLink } = this.state;
    const loadingElement = <span>Loading...</span>
    const imageElement = <img src={imageLink} />
    return (
      <div className="App">
        <h1>Doguinho</h1>
        <div>{loading ? loadingElement : imageElement}</div>
        <button onClick={this.fetchDogAPI}>🐶</button>
      </div>
    );
  }
}

export default App;
