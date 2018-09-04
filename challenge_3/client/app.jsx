import React from 'react';
import Square from './square.jsx';
import ScoreBoard from './scoreBoard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      currentBall: 0,
      totalScores: [],
      addPointsTracker: [],
    }

    this.renderSquare = this.renderSquare.bind(this);
    this.handleScore = this.handleScore.bind(this);


  }

  renderSquare(i) {
    // this will change the state of App.jsx
    return <Square value={i} onClick={()=>this.handleScore(i)}/>;
  }

  handleScore(score) {
    var total = this.state.totalScores;
    var tracker = total.length - 1;
    if (isStrike(score)) {
      total.push([10]);
    }
    this.setState({totalScores: total})
    this.setState({addPointsTracker: [tracker + 1, tracker + 2]});
  }

  isStrike(score, currentBall) {
    if (score === 10 && currentBall === 0) {
      return true;
    }
    return false;
  }

  isSpare(twoTries) {
    if (twoTries[0] + twoTries[1] === 10) {
      return true;
    }

    return false;
  }



  render() {
    return (
      <div>
        <div>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div>
          {this.renderSquare(9)}
          {this.renderSquare(10)}
        </div>
        <p></p>
        <div>
          <ScoreBoard value={this.state.score}/>
        </div>
      </div>
    )
  }
}

export default App;
