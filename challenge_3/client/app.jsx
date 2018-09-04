import React from 'react';
import Square from './square.jsx';
import ScoreBoard from './scoreBoard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSquare(i) {
    return <Square value={i} />;
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
          <ScoreBoard />
        </div>
      </div>
    )
  }
}

export default App;
