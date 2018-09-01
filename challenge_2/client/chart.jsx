import RC2 from 'react-chartjs2';
import React from 'react';

const Chart = (props) => {
  var data = {
    labels: props.labels,
    datasets: [{
      label: "Cryptocurrency Charting Tool",
      data: props.values,
    }]
  }
  console.log(props.labels)
  return (
    <div>
      <RC2 data={data} type='line' />
    </div>
  )
}

export default Chart;
