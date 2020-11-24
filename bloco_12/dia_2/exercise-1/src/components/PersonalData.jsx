import React from 'react'

class PersonalData extends React.Component {
  constructor() {
    super();

    this.upperCase = this.upperCase.bind(this);
    this.removeSpecialCaractere = this.removeSpecialCaractere.bind(this);
    this.firstCharactereCanotBeANumber = this.firstCharactereCanotBeANumber.bind(this);
    this.updateValue = this.updateValue.bind(this);

    this.state = {
      nameValue: '',
      addressValue: '',
      cityValue: '',
    };

  }
  
  upperCase({ target }) {
    const beforeChange = target.value
    this.setState({ nameValue: beforeChange.toUpperCase() });
  }

  removeSpecialCaractere({ target }) {
    const beforeChange = target.value;
    this.setState({ addressValue: beforeChange.replace(/[^a-zA-Z0-9]/g, '')})
  }

  firstCharactereCanotBeANumber({ target }) {
    const beforeChange = target.value;
    const firstCharactere = beforeChange[0];
    const firstCharactereInt = parseInt(firstCharactere);
    if (!isNaN(firstCharactereInt)) this.setState({ cityValue: ''});
  }
 
  updateValue({ target }) {
    const currentValue = target.value;
    this.setState({ cityValue: currentValue});
  }

  render() {
    
    return(
      <fieldset>
        <legend>Personal Data</legend>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            id="name"
            maxLength="40"
            value={this.state.nameValue}
            onChange={this.upperCase}
            required
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            id="email"
            maxLength="50"
            required
          />
        </label>
        <label htmlFor="cpf">
          CPF:
          <input
            type="text"
            name="cpf"
            id="cpf"
            maxLength="11"
            required
          />
        </label>
        <label htmlFor="address">
          Address:
          <input
            type="text"
            name="address"
            id="address"
            maxLength="200"
            value={this.state.addressValue}
            onChange={this.removeSpecialCaractere}
            required
          />
        </label>
        <label htmlFor="city">
          City:
          <input
            type="text"
            name="city"
            id="city"
            maxLength="28"
            value={this.state.cityValue}
            onChange={this.updateValue}
            onBlur={this.firstCharactereCanotBeANumber}
            required
          />
        </label>
        <label htmlFor="state">
          <select name="state" id="state">

          </select>
        </label>
      </fieldset>
    );
  }
}

export default PersonalData;
