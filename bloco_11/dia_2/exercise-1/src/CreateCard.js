import React from 'react';

class CreateCard extends React.Component {
  render () {
    const { name, type, averageWeight, image, moreInfo} = this.props.infos;
    const valuesOfAverageWeight = Object.values(averageWeight);

    return (
      <div className="card">
        <p>Name: {name} <br /> Type: {type} <br /> Weight: {valuesOfAverageWeight[0]}{valuesOfAverageWeight[1]} <br /> Wiki: <a href={moreInfo} target="_blank">Here</a></p>
        <div>
          <img src={image} alt="pokemon"></img>
        </div>
      </div>
    );
  }
}

export default CreateCard;
