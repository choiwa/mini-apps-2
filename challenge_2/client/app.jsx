import React from 'react';
import $ from 'jquery';
import RC2 from 'react-chartjs2';
import Chart from './chart.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      labels: [],
      values: [],
    }
  }

  componentDidMount() {
    $.get('https://api.coindesk.com/v1/bpi/historical/close.json', null, (data) => {
      var data = JSON.parse(data);
      this.setState({data: data.bpi, labels: Object.keys(data.bpi), values: Object.values(data.bpi)});
    });

  }
  render() {
    return (
      <div>
        <Chart labels={this.state.labels} values={this.state.values}/>
      </div>
    )
  }
}

export default App;
