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
      const { message } = await objectJSON.json();
  
      this.setState({
        loading: false,
        imageLink: message,
      });
    });
  }

  componentDidMount() {
    this.fetchDogAPI();
  }

  
  componentDidUpdate() {
    const url = this.state.imageLink;
    localStorage.setItem('lastDog', url);
    const dogType = url.split('/');
    if (dogType && !this.state.loading) alert(dogType[4]);
  }
  

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
