import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      selectedList: [],
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // if fetch directly from jsonServer
    // let url = "http://localhost:3000/events"
    // fetch(url)
    // .then(resp => resp.json())
    // .then(data => {
    //   console.log(data);
    // })
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({search: event.target.value});
  }

  render() {
    console.log(this.state.search)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search Event:
            <input value={this.state.search} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default App;
