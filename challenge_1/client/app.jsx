import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      selectedList: [],
    }
  }

  componentDidMount() {
    let url = "http://localhost:3000/events"
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
    })
    // $.get("/", (data) => {
    //     console.log("im data", data);
    // })
  }




  render() {
    return <div>hello world</div>
  }
}

export default App;
