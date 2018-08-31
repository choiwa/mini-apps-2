import React from 'react';
import Entry from './entry.jsx';

class Events extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
    }
  }

  render() {
    return(
      <div>
        <Entry />
      </div>
    )
  }
}

export default Events;
