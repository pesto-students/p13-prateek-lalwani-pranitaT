import React, {Component} from 'react';
import Book from './Book';
import './BookList.css'

// an array of book objects
const BOOKS = [
    { title: 'Book 1', author: 'Author 1', year: 2020 },
    { title: 'Book 2', author: 'Author 2', year: 2018 },
    { title: 'Book 3', author: 'Author 3', year: 2022 },
    { title: 'Book 4', author: 'Author 4', year: 2023 },
  ];

// implementation of the BookList
// responsible for rendering the list of books
class BookList extends Component{

    constructor(){
        super()
        this. state ={
            books: BOOKS
        }
    }

    render(){
        return (
            <ul className="book-list">
                {   // Iterate over the books array and render a Book component for each book, 
                    // passing the book details as props
                    this.state.books.map((book) =>
                    <li key={book.id} className="book-list-item">
                    <Book title={book.title} author={book.author} year={book.year} />
                  </li>
                )}
            </ul>
        )
    }

}

export default BookList