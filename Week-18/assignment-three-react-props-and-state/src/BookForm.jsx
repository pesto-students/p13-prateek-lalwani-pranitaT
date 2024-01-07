import React, { useState } from 'react';
import './BookForm.css'

const BookForm = ({ addBook, deleteBook }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    year: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDelete = () => {
    // Call the deleteBook function passed as a prop to delete the book
    deleteBook();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    if (formData.title.trim() === '' || formData.author.trim() === '' || formData.year.trim() === '') {
      // Handle the case where any of the required fields are empty
      console.log("All fields are required. Please fill in all the fields.");
      return;
    }

    // Create a new book object
    const newBook = {
      title: formData.title,
      author: formData.author,
      year: formData.year,
    };

    // Call the addBook function passed as a prop to add the new book
    addBook(newBook);

    // Reset the form fields
    setFormData({
        title: '',
        author: '',
        year: '',
    });
  };

  return (
  <form onSubmit={handleSubmit}>
    <label>
      Title:
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        required
        pattern=".*\S+.*"
        title="Title cannot be empty"
      />
    </label>

    <label>
      Author:
      <input
        type="text"
        name="author"
        value={formData.author}
        onChange={handleInputChange}
        required
        pattern=".*\S+.*"
        title="Author cannot be empty"
      />
    </label>

    <label>
      Year:
      <input
        type="text"
        name="year"
        value={formData.year}
        onChange={handleInputChange}
        required
        pattern="\d{4}"
        title="Please enter a valid four-digit year"
      />
    </label>
    
    <button type="submit">Submit</button>
    <button type="button" onClick={handleDelete}>Delete</button>
  
  </form>
  );
};

export default BookForm;
