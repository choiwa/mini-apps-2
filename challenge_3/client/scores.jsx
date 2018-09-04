import React from 'react';

class Scores extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scores: [],
      currentScore: this.props.score,
    }
  }

  render() {
    return (
      <div>{this.state.currentScore}</div>
    )
  }
}

export default Scores;
