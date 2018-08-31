import React from 'react';
import Entry from './entry.jsx';

class Events extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        {this.props.data.map((entry, i) => <Entry key={i} data={entry}/>)}
      </div>
    )
  }
}

export default Events;
