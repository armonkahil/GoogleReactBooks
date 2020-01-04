import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Row from "../components/Row";
import Column from "../components/Column";
import Book from "../components/BookContainer";
import { List } from "../components/List";
import API from '../utils/API'

class Saved extends Component {
  // eslint-disable-next-line
  state = {
    books: []
  };
  componentDidMount() {
    this.loadBooks();
    
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
    console.log(this.state.books)
  };
  render() {
    return (
      <>
        <Jumbotron title="(React) Google Books Saved" lead="Saved Books" />
        <Row>
          <Column>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <Book key={book._id}
                    authors={book.authors}
                    title={book.title}
                    description={book.description}
                    thumbnail={book.image}
                  />
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

export default Saved;
