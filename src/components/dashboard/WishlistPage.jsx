import { useState } from "react";
import { Link } from "react-router-dom";

const WishlistPage = () => {
  // Mock wishlist data
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Fiddle Leaf Fig",
      image: "https://placehold.co/100x100/E9F5DB/5A8642?text=Plant",
      price: "$42.50",
      stock: true
    },
    {
      id: 2,
      name: "Hanging Ceramic Planter",
      image: "https://placehold.co/100x100/E9F5DB/5A8642?text=Planter",
      price: "$24.99",
      stock: true
    },
    {
      id: 3,
      name: "Premium Potting Soil",
      image: "https://placehold.co/100x100/E9F5DB/5A8642?text=Soil",
      price: "$19.95",
      stock: false
    },
    {
      id: 4,
      name: "Brass Plant Mister",
      image: "https://placehold.co/100x100/E9F5DB/5A8642?text=Mister",
      price: "$18.50",
      stock: true
    }
  ]);

  // Remove from wishlist
  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  // Clear entire wishlist
  const clearWishlist = () => {
    setWishlistItems([]);
  };

  return (
    <div>
      {/* Wishlist header */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-soil">
          {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} in your wishlist
        </p>
        {wishlistItems.length > 0 && (
          <button 
            onClick={clearWishlist}
            className="text-sm text-red-600 hover:text-red-800 transition-colors"
          >
            Clear Wishlist
          </button>
        )}
      </div>

      {/* Wishlist items */}
      {wishlistItems.length === 0 ? (
        <div className="text-center py-12 bg-cream-light rounded-natural" data-aos="fade-up">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-soil opacity-50 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <h3 className="font-serif text-xl text-soil-dark mb-3">Your wishlist is empty</h3>
          <p className="text-soil mb-6">Find something you love and add it to your wishlist</p>
          <Link to="/shop" className="px-6 py-2 bg-leaf text-white rounded-natural hover:bg-leaf-dark transition-colors">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid gap-4">
          {wishlistItems.map(item => (
            <div 
              key={item.id} 
              className="flex flex-col sm:flex-row items-center justify-between border border-moss-light rounded-natural p-4 hover:bg-cream-light transition-colors"
              data-aos="fade-up"
            >
              <div className="flex flex-col sm:flex-row items-center">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-natural mb-3 sm:mb-0 sm:mr-4"
                />
                <div className="text-center sm:text-left">
                  <h3 className="font-medium text-soil-dark">{item.name}</h3>
                  <p className="font-serif text-leaf-dark text-lg">{item.price}</p>
                  <p className={item.stock ? "text-sm text-leaf" : "text-sm text-red-500"}>
                    {item.stock ? "In Stock" : "Out of Stock"}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row mt-4 sm:mt-0 w-full sm:w-auto gap-2">
                <button 
                  className={`px-4 py-2 rounded-natural ${
                    item.stock 
                      ? "bg-leaf text-white hover:bg-leaf-dark" 
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  } transition-colors`}
                  disabled={!item.stock}
                >
                  Add to Cart
                </button>
                <button 
                  onClick={() => removeFromWishlist(item.id)}
                  className="px-4 py-2 border border-red-300 text-red-600 rounded-natural hover:bg-red-50 transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
