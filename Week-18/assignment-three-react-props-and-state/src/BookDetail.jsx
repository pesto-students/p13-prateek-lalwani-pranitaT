import React, { useState } from 'react';

function BookDetail({ title, author, year }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Year: {year}</p>
      
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>

      {showDetails && (
        <div>
          {/* Additional details, such as description or genre */}
          <p>Genre: Fiction</p>
          <p>Description: {title} is a book written by {author} in the year {year}.</p>
        </div>
      )}
    </div>
  );
}

export default BookDetail;
