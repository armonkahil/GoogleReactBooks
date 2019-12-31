import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Row from "../components/Row";
import SearchThis from "../components/SearchContainer";
import Column from "../components/Column";
import Book from '../components/BookContainer'
import { List } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API"

class Search extends Component {
  // eslint-disable-next-line
  state = {
    books: [],
    search: ""
  };
  // handle any changes to the input fields
  handleInputChange = event => {
    this.setState({ search: event.target.value });
    console.log(this.state.search)
  };

  handleSubmit = event => {
    console.log('submit button hit')
    event.preventDefault()
    API.getGoogleSearchBooks(this.state.search)
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err))
    console.log(this.state.books)

  }

  render() {
    return (
      <>
        <Jumbotron
          title="(React) Google Books Search"
          lead="Search for and Save Books of Interest"
        />
        <Row>
          <Column>
            <SearchThis handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />
          </Column>
        </Row>
        <Row>
          <Column>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <Book key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </Book>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Column>
        </Row>
      </>
    );
  }
}

export default Search;
