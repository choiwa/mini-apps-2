import React from 'react';

class Square extends React.Component {
  handleScore(i) {
    console.log("hello!!!")
    this.setState({score: i});
  }
  render() {
    return (
      <button onClick={this.props.onClick}>{this.props.value}</button>
    )
  }
}

export default Square;
