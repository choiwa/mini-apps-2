import React from 'react';
import ReactPaginate from 'react-paginate';
import $ from 'jquery';
import Events from './events.jsx';

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
    let url = "http://localhost:3000/events?_page=20&_limit=10"
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
    })
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
        <Events />
      </div>
    )
  }
}

export default App;
