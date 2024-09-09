import { Link } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import PropTypes from "prop-types"; // Import PropTypes
import { useState } from "react";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      key={book._id}
      className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-2xl"
    >
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
        {book.publishYear || "Unknown Year"}
      </h2>
      <h4 className="my-2 text-gray-500">{book._id || "Unknown ID"}</h4>
      <div className="flex justify-start items-center gap-x-2">
        <FaBookOpen className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.title || "Unknown Title"}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.author || "Unknown Author"}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-2 p-4">
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

// Add prop type validation
BookSingleCard.propTypes = {
  book: PropTypes.shape({
    _id: PropTypes.string.isRequired, // Ensure _id is a string and required
    title: PropTypes.string.isRequired, // Ensure title is a string and required
    author: PropTypes.string.isRequired, // Ensure author is a string and required
    publishYear: PropTypes.number, // publishYear is a number, but it's optional
  }).isRequired, // book prop is required
};

export default BookSingleCard;
