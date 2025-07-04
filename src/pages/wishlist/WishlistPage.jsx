import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromWishlist, clearWishlist } from "../../redux/features/wishlist/wishlistSlice";
import { getImgUrl } from "../../utils/getImgUrl";
import { AiFillHeart } from "react-icons/ai";

const WishlistPage = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  if (wishlistItems.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold mb-4">Your wishlist is empty</h2>
        <Link to="/books" className="text-blue-600 underline">Browse Books</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Wishlist</h2>
        <button
          onClick={() => dispatch(clearWishlist())}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Clear Wishlist
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {wishlistItems.map((book) => (
          <div key={book._id} className="border rounded-lg p-4 relative bg-white shadow">
            <Link to={`/books/${book._id}`}>
              <img
                src={getImgUrl(book.coverImage)}
                alt={book.title}
                className="w-full h-48 object-cover rounded mb-3"
              />
              <h3 className="text-lg font-semibold mb-1">{book.title}</h3>
            </Link>
            <p className="text-gray-600 mb-2">{book.author}</p>
            <p className="font-medium mb-2">${book.newPrice}</p>
            <button
              onClick={() => dispatch(removeFromWishlist(book._id))}
              className="absolute top-2 right-2 text-xl text-red-500 bg-white rounded-full p-1 shadow hover:scale-110 transition"
              aria-label="Remove from wishlist"
            >
              <AiFillHeart />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage; 