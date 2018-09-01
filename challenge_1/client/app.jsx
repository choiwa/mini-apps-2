import React from 'react';
import ReactPaginate from 'react-paginate';
import $ from 'jquery';
import Events from './events.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      data: [],
      currentPage: 1,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.displayPage = this.displayPage.bind(this);
  }

  componentDidMount() {
    this.displayPage();
  }

  displayPage() {
    // if fetch directly from jsonServer
    let url = `http://localhost:3000/events?q=${this.state.search}&_page=${this.state.currentPage}&_limit=${this.props.perPage}`
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      this.setState({data: data})
    })
  }

  handleSubmit(event) {
    this.displayPage();
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({search: event.target.value});
  }

  handlePageClick(data) {
    //Exposes the current page object as an argument.
    console.log(data.selected + 1)
    this.setState({currentPage: data.selected + 1})
    this.displayPage();
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
        <Events data={this.state.data}/>
        <ReactPaginate previousLabel={"previous"}
               nextLabel={"next"}
               breakLabel={<a href="">...</a>}
               breakClassName={"break-me"}
               pageCount={this.state.pageCount}
               marginPagesDisplayed={2}
               pageRangeDisplayed={5}
               onPageChange={this.handlePageClick}
               containerClassName={"pagination"}
               subContainerClassName={"pages pagination"}
               activeClassName={"active"} />
      </div>
    )
  }
}

export default App;
