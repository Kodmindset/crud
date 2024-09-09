import PropTypes from 'prop-types';
import BookSingleCard from './BookSingleCard';

const BooksCard = ({ books }) => {
  // Check if books is an array and not empty
  if (!Array.isArray(books) || books.length === 0) {
    return <p>No books available.</p>;
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};

// Add prop type validation
BooksCard.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,   // Ensure _id is a string and required
      title: PropTypes.string.isRequired, // Ensure title is a string and required
      author: PropTypes.string.isRequired, // Ensure author is a string and required
      publishYear: PropTypes.number,      // publishYear is a number, but it's optional
    })
  ).isRequired, // books array is required
};

export default BooksCard;
