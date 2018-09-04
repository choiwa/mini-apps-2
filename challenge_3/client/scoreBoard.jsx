import React from 'react';
import Frame from './frame.jsx';
import Scores from './scores.jsx'

class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      frames: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      currentScore: this.props.value,
    }
  }

  handleScore() {
    this.setState({currentScore: this.props.value});
  }

  render() {
    return (
      <div>
        <table width="400">
          <tbody>
            <tr>
              <th>Frame</th>
                {this.state.frames.map((frame, i) =>
                  <Frame key={i} num={frame} />
                )}
                <th>Final Score</th>
            </tr>
            <tr>
              <th>Player 1</th>
              <Scores score={this.state.currentScore}/>
            </tr>
          </tbody>
        </table>
      </div>

    )
  }
}

export default ScoreBoard;
