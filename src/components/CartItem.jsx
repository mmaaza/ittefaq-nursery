import React from 'react';

const CartItem = ({ item, updateQuantity, removeItem }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center border-b border-cream pb-6 last:border-0 last:pb-0 hover:bg-cream-light hover:rounded-natural transition-all p-3">
      <div className="w-full sm:w-24 h-24 rounded-natural overflow-hidden mb-4 sm:mb-0 sm:mr-4 shadow-soft">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform hover:scale-105" />
      </div>
      
      <div className="flex-grow">
        <h3 className="font-serif text-soil-dark text-lg mb-1">{item.name}</h3>
        <p className="text-terracotta font-medium mb-2">${item.price?.toFixed(2)}</p>
        <p className="text-soil text-sm mb-3">{item.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center border border-cream rounded-natural overflow-hidden shadow-soft">
            <button 
              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} 
              className="px-3 py-1 text-soil-dark hover:text-white hover:bg-leaf transition-colors"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="px-3 py-1 text-soil-dark bg-cream-light">{item.quantity}</span>
            <button 
              onClick={() => updateQuantity(item.id, item.quantity + 1)} 
              className="px-3 py-1 text-soil-dark hover:text-white hover:bg-leaf transition-colors"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          
          <button 
            onClick={() => removeItem(item.id)} 
            className="text-soil hover:text-terracotta transition-colors p-2 hover:bg-cream-light rounded-full"
            aria-label="Remove item"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
