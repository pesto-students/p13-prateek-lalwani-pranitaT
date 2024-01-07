import React, { useState } from 'react';
import withLogger from './WithLogger';
import './BookList.css';
import BookDetail from './BookDetail';
import BookForm from './BookForm';


const BookList = () => {
    const [books, setBooks] = useState([]);
  
    const addBook = (newBook) => {
      // Add the new book to the existing books array
      setBooks([...books, newBook]);
    };

    const deleteBook = () => {
      if (books.length > 0) {
        // Filter out the first book in the array
        const updatedBooks = books.slice(1);
    
        // Update the state with the new array of books
        setBooks(updatedBooks);
      }
    };
  
    return (
      <div className="book">

        {/* Pass the addBook function as a prop to the Form component */}
        <BookForm addBook={addBook} deleteBook={deleteBook} />

        <div className="book-details">
          {books.length > 0 ? (
            <ul className="book-list">
              {books.map((book, index) => (
                <li key={index} className="book-list-item">
                  <BookDetail title={book.title} author={book.author} year={book.year} />
                </li>
              ))}
            </ul>
          ) : (
            <p className='no-data'>No books available. Please add some books.</p>
          )}
        </div>

      </div>
    );
};
  
// Wrap the BookList component with the WithLogging HOC 
const BookListWithLogger = withLogger(BookList);

export default BookListWithLogger;
