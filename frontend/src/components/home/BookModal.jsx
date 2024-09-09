import { FaBookOpen } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import PropTypes from "prop-types"; // Import PropTypes

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
<div 
onClick={(event) =>event.stopPropagation()}

className="w-[600px] max-w-full has-[400px] bg-white rounded-xl p-4 flex flex-col relative "
>
  <AiOutlineClose
  className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
  onClick={onClose}
/>
<h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
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
      <p className="mt-4">Clean Code by Robert C. Martin</p>
      <p className="mt-2">This book offers practical advice on writing clean,
         maintainable, and efficient code. It covers essential coding principles,
          best practices, and common pitfalls, helping developers 
        produce high-quality software that is easy to read and understand.</p>
</div>

    </div>
  );
};

// Add prop type validation
BookModal.propTypes = {
  book: PropTypes.shape({
    _id: PropTypes.string.isRequired,   // Ensure _id is a string and required
    title: PropTypes.string.isRequired, // Ensure title is a string and required
    author: PropTypes.string.isRequired, // Ensure author is a string and required
    publishYear: PropTypes.number,      // publishYear is a number, but it's optional
  }).isRequired, // book prop is required
  onClose: PropTypes.func.isRequired  
};

export default BookModal;
