import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    }

  }

  componentDidMount() {
    $.get('https://api.coindesk.com/v1/bpi/historical/close.json', (data) => {
      this.setState({data: data});
    });

  }
  render() {
    console.log(this.state.data)
    return <div>hello react</div>
  }
}

export default App;
