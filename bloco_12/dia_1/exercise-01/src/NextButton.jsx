import React from 'react';

class NextButton extends React.Component {
  render () {
    const { next } = this.props;
    return (
      <button onClick={next} className="next-button">Next</button>
    );
  }
}

export default NextButton;