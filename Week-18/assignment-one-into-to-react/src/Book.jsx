import React from 'react';

// represents an individual book in the book list
function Book(books) {  // receive the book details as props
  return (  // render each book's details
    <div>
    <h3>{books.title}</h3>
    <p>Author: {books.author}</p>
    <p>Year: {books.year}</p>
    </div>
  )
}

export default Book;
