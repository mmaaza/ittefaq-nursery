import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { 
    cartItems: contextCartItems, 
    subtotal: contextSubtotal, 
    shipping: contextShipping, 
    total: contextTotal, 
    updateQuantity, 
    removeItem 
  } = useCart();

  // Dummy plant products for display purposes
  const dummyPlants = [
      {
          id: 1,
          name: "Monstera Deliciosa",
          price: 39.99,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
          description: "Swiss Cheese Plant - Easy care, air purifying",
      },
      {
          id: 2,
          name: "Sansevieria Trifasciata",
          price: 24.99,
          quantity: 2,
          image: "https://images.unsplash.com/photo-1656108128439-576cd82c69b7?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Snake Plant - Low light tolerant, air purifying",
      },
      {
          id: 3,
          name: "Ficus Lyrata",
          price: 49.99,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1679860009920-e9dc1311cb2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Fiddle Leaf Fig - Trendy, statement plant",
      },
  ];

  // Use dummy data instead of context for demonstration
  const cartItems = dummyPlants; 
  const subtotal = dummyPlants.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 7.99;
  const total = subtotal + shipping;

  // Mock functions for demonstration
  const handleUpdateQuantity = (id, newQuantity) => {
    console.log(`Update quantity for item ${id} to ${newQuantity}`);
  };

  const handleRemoveItem = (id) => {
    console.log(`Remove item ${id} from cart`);
  };

  return (
    <div className="pt-24 pb-16 bg-cream-light min-h-screen" data-aos="fade-in">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-3xl md:text-4xl text-soil-dark mb-6">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="bg-white rounded-natural p-8 text-center shadow-soft">
            <div className="flex flex-col items-center justify-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-moss-dark mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <h2 className="font-serif text-2xl text-soil-dark mb-3">Your cart is empty</h2>
              <p className="text-soil mb-6 max-w-md">Looks like you haven't added any plants to your cart yet.</p>
              <Link to="/shop" className="bg-leaf text-white px-6 py-3 rounded-natural hover:bg-leaf-dark transition-colors shadow-soft hover:shadow-hover">
                Browse Plants
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-natural p-6 shadow-soft">
                <div className="space-y-6">
                  {cartItems.map(item => (
                    <CartItem 
                      key={item.id} 
                      item={item} 
                      updateQuantity={handleUpdateQuantity} 
                      removeItem={handleRemoveItem} 
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-natural p-6 shadow-soft">
                <h2 className="font-serif text-xl text-soil-dark mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-soil-dark">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-soil-dark">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="border-t border-cream pt-3 flex justify-between font-medium text-lg text-soil-dark">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <Link 
                  to="/checkout"
                  className="w-full bg-leaf text-white py-3 px-6 rounded-natural hover:bg-leaf-dark transition-colors shadow-soft hover:shadow-hover block text-center"
                >
                  Proceed to Checkout
                </Link>
                
                <div className="mt-4">
                  <Link to="/shop" className="text-leaf hover:text-leaf-dark block text-center">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
