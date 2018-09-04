import React from 'react';
import Score from './score.jsx';

class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      frames: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    }
  }

  render() {
    return (
      <div>
        <table width="400">
          <tr>
            <th>Frame</th>
          {this.state.frames.map((frame) =>
            <Score score={frame} />
          )}
          </tr>
        </table>
      </div>

    )
  }
}

export default ScoreBoard;
