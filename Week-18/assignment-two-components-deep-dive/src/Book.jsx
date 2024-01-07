import React, { PureComponent } from 'react';
import BookDetail from './BookDetail';

// Book is a Pure component that performs a shallow comparison of their props and state
// prevents unnecessary re-renders, resulting in better performance
class Book extends PureComponent {
  render() {  // receive the book details as props
    const {title, author, year} = this.props
  
    return (  // renders a single book's details
      <BookDetail title={title} author={author} year={year}/>
    )
  }
}

export default Book;
