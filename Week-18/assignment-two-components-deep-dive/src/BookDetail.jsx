import React from 'react';

function BookDetail({ title, author, year }) {  // receive the book details as props
    return (  // renders a single book's details
    <div>
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Year: {year}</p>
    </div>
  );
}

export default BookDetail;
