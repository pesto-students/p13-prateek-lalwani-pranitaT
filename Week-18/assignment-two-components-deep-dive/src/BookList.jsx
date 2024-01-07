import React, { Component, PureComponent } from 'react';
import Book from './Book';
import withLogger from './WithLogger';
import './BookList.css';

const BOOKS = [
  { id: 1, title: 'Book 1', author: 'Author 1', year: 2020 },
  { id: 2, title: 'Book 2', author: 'Author 2', year: 2018 },
  { id: 3, title: 'Book 3', author: 'Author 3', year: 2022 },
  { id: 4, title: 'Book 4', author: 'Author 4', year: 2023 },
];

class BookList extends Component {
  constructor() {
    super();
    this.state = {
      books: BOOKS,
    };
  }

  render() {
    return (
      <ul className="book-list">
        {this.state.books.map((book) => (
          <li key={book.id} className="book-list-item">
            <Book title={book.title} author={book.author} year={book.year} />
          </li>
        ))}
      </ul>
    );
  }
}

// Wrap the BookList component with the WithLogging HOC 
const BookListWithLogger = withLogger(BookList);

export default BookListWithLogger;
