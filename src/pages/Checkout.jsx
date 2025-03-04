import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const [step, setStep] = useState(1); // 1: shipping, 2: payment, 3: review
  const { cartItems: contextCartItems, subtotal: contextSubtotal, shipping: contextShipping, total: contextTotal } = useCart();

  // Dummy plant products for display purposes (same as Cart.jsx)
  const dummyPlants = [
    {
        id: 1,
        name: "Monstera Deliciosa",
        price: 39.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        name: "Sansevieria Trifasciata",
        price: 24.99,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1656108128439-576cd82c69b7?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 3,
        name: "Ficus Lyrata",
        price: 49.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1679860009920-e9dc1311cb2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // Use dummy data instead of context for demonstration
  const cartItems = dummyPlants; 
  const subtotal = dummyPlants.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 7.99;
  const total = subtotal + shipping;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    paymentMethod: 'creditCard',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    } else {
      // Process order submission
      console.log('Order submitted!', formData);
      alert('Order placed successfully! Thank you for your purchase.');
    }
  };

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="bg-white rounded-natural p-6 shadow-soft" data-aos="fade-up">
            <h2 className="font-serif text-2xl text-soil-dark mb-6">Shipping Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-soil-dark mb-2" htmlFor="firstName">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-moss rounded-natural focus:outline-none focus:ring-2 focus:ring-leaf-light"
                    required
                  />
                </div>
                <div>
                  <label className="block text-soil-dark mb-2" htmlFor="lastName">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-moss rounded-natural focus:outline-none focus:ring-2 focus:ring-leaf-light"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-soil-dark mb-2" htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-moss rounded-natural focus:outline-none focus:ring-2 focus:ring-leaf-light"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-soil-dark mb-2" htmlFor="address">Address</label>
                  <input 
                    type="text" 
                    id="address" 
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-moss rounded-natural focus:outline-none focus:ring-2 focus:ring-leaf-light"
                    required
                  />
                </div>
                <div>
                  <label className="block text-soil-dark mb-2" htmlFor="city">City</label>
                  <input 
                    type="text" 
                    id="city" 
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-moss rounded-natural focus:outline-none focus:ring-2 focus:ring-leaf-light"
                    required
                  />
                </div>
                <div>
                  <label className="block text-soil-dark mb-2" htmlFor="state">State/Province</label>
                  <input 
                    type="text" 
                    id="state" 
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-moss rounded-natural focus:outline-none focus:ring-2 focus:ring-leaf-light"
                    required
                  />
                </div>
                <div>
                  <label className="block text-soil-dark mb-2" htmlFor="zipCode">ZIP/Postal Code</label>
                  <input 
                    type="text" 
                    id="zipCode" 
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-moss rounded-natural focus:outline-none focus:ring-2 focus:ring-leaf-light"
                    required
                  />
                </div>
                <div>
                  <label className="block text-soil-dark mb-2" htmlFor="country">Country</label>
                  <select 
                    id="country" 
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-moss rounded-natural focus:outline-none focus:ring-2 focus:ring-leaf-light"
                    required
                  >
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-8 flex justify-between">
                <Link to="/cart" className="text-soil-dark hover:text-soil flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to Cart
                </Link>
                <button 
                  type="submit" 
                  className="bg-leaf text-white py-2 px-6 rounded-natural hover:bg-leaf-dark transition-colors shadow-soft hover:shadow-hover"
                >
                  Continue to Payment
                </button>
              </div>
            </form>
          </div>
        );
      case 2:
        return (
          <div className="bg-white rounded-natural p-6 shadow-soft" data-aos="fade-up">
            <h2 className="font-serif text-2xl text-soil-dark mb-6">Payment Method</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <input 
                    type="radio" 
                    id="creditCard" 
                    name="paymentMethod" 
                    value="creditCard"
                    checked={formData.paymentMethod === 'creditCard'}
                    onChange={handleInputChange}
                    className="h-5 w-5 text-leaf focus:ring-leaf-light"
                  />
                  <label htmlFor="creditCard" className="text-soil-dark flex items-center">
                    Credit Card
                    <div className="ml-3 flex space-x-2">
                      <svg className="h-8 w-auto" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="6" fill="#1A1F71"/>
                        <path d="M18 30H15L12 18H15L18 30Z" fill="white"/>
                        <path d="M33 18L30.5 26L29.7 22.8L28.2 18H25L28.5 30H31.5L36 18H33Z" fill="white"/>
                        <path d="M22.5 18C21 18 19 18.4 19 20.5C19 24 24 23.5 24 25.5C24 26.5 23 27 21.5 27C20 27 18.5 26.5 18.5 26.5L18 29C18 29 19.5 29.5 21.5 29.5C24 29.5 27 28.5 27 25.5C27 22 22 22.5 22 20.5C22 19.5 23 19 24.5 19C26 19 27.5 19.5 27.5 19.5L28 17C28 17 26 18 22.5 18Z" fill="white"/>
                      </svg>
                      <svg className="h-8 w-auto" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="6" fill="#EB001B" fillOpacity="0.1"/>
                        <path d="M32 24C32 20 29.5 16.5 26 15V33C29.5 31.5 32 28 32 24Z" fill="#EB001B"/>
                        <path d="M17 24C17 28 19.5 31.5 23 33V15C19.5 16.5 17 20 17 24Z" fill="#F79E1B"/>
                        <path d="M26 15C25 15 24 15 23 15V33C24 33 25 33 26 33C30 32 33 28.5 33 24C33 19.5 30 16 26 15Z" fill="#FF5F00"/>
                      </svg>
                    </div>
                  </label>
                </div>
                <div className="flex items-center space-x-4">
                  <input 
                    type="radio" 
                    id="paypal" 
                    name="paymentMethod" 
                    value="paypal"
                    checked={formData.paymentMethod === 'paypal'}
                    onChange={handleInputChange}
                    className="h-5 w-5 text-leaf focus:ring-leaf-light" 
                  />
                  <label htmlFor="paypal" className="text-soil-dark flex items-center">
                    PayPal
                    <svg className="ml-3 h-6 w-auto" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 5.5H14C17.5 5.5 19 7 18.5 9.5C18 12.5 15.5 14.5 12.5 14.5H10.5C10 14.5 9.5 15 9.5 15.5L8.5 20H5L7.5 5.5Z" fill="#002987"/>
                      <path d="M35.5 5.5H42C45.5 5.5 47 7 46.5 9.5C46 12.5 43.5 14.5 40.5 14.5H38.5C38 14.5 37.5 15 37.5 15.5L36.5 20H33L35.5 5.5Z" fill="#0085CC"/>
                      <path d="M21.5 0H28C31.5 0 33 1.5 32.5 4C32 7 29.5 9 26.5 9H24.5C24 9 23.5 9.5 23.5 10L22.5 14.5H19L21.5 0Z" fill="#00186A"/>
                    </svg>
                  </label>
                </div>
              </div>
              
              {formData.paymentMethod === 'creditCard' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-soil-dark mb-2" htmlFor="cardNumber">Card Number</label>
                    <input 
                      type="text" 
                      id="cardNumber" 
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-2 border border-moss rounded-natural focus:outline-none focus:ring-2 focus:ring-leaf-light"
                    />
                  </div>
                  <div>
                    <label className="block text-soil-dark mb-2" htmlFor="cardName">Name on Card</label>
                    <input 
                      type="text" 
                      id="cardName" 
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-moss rounded-natural focus:outline-none focus:ring-2 focus:ring-leaf-light"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-soil-dark mb-2" htmlFor="expiryDate">Expiry Date</label>
                      <input 
                        type="text" 
                        id="expiryDate" 
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        className="w-full px-4 py-2 border border-moss rounded-natural focus:outline-none focus:ring-2 focus:ring-leaf-light"
                      />
                    </div>
                    <div>
                      <label className="block text-soil-dark mb-2" htmlFor="cvv">Security Code</label>
                      <input 
                        type="text" 
                        id="cvv" 
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="CVV"
                        className="w-full px-4 py-2 border border-moss rounded-natural focus:outline-none focus:ring-2 focus:ring-leaf-light"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 flex justify-between">
                <button 
                  type="button" 
                  onClick={goBack}
                  className="text-soil-dark hover:text-soil flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to Shipping
                </button>
                <button 
                  type="submit" 
                  className="bg-leaf text-white py-2 px-6 rounded-natural hover:bg-leaf-dark transition-colors shadow-soft hover:shadow-hover"
                >
                  Review Order
                </button>
              </div>
            </form>
          </div>
        );
      case 3:
        return (
          <div className="bg-white rounded-natural p-6 shadow-soft" data-aos="fade-up">
            <h2 className="font-serif text-2xl text-soil-dark mb-6">Review Your Order</h2>
            
            <div className="mb-8">
              <h3 className="font-serif text-xl text-soil-dark mb-3">Shipping Details</h3>
              <div className="bg-cream rounded-natural p-4">
                <p className="text-soil-dark">{formData.firstName} {formData.lastName}</p>
                <p className="text-soil-dark">{formData.address}</p>
                <p className="text-soil-dark">{formData.city}, {formData.state} {formData.zipCode}</p>
                <p className="text-soil-dark">{formData.country}</p>
                <p className="text-soil-dark mt-2">{formData.email}</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="font-serif text-xl text-soil-dark mb-3">Payment Method</h3>
              <div className="bg-cream rounded-natural p-4">
                {formData.paymentMethod === 'creditCard' ? (
                  <div className="flex items-center">
                    <div className="mr-3">
                      <svg className="h-8 w-auto" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="6" fill="#1A1F71"/>
                        <path d="M18 30H15L12 18H15L18 30Z" fill="white"/>
                        <path d="M33 18L30.5 26L29.7 22.8L28.2 18H25L28.5 30H31.5L36 18H33Z" fill="white"/>
                        <path d="M22.5 18C21 18 19 18.4 19 20.5C19 24 24 23.5 24 25.5C24 26.5 23 27 21.5 27C20 27 18.5 26.5 18.5 26.5L18 29C18 29 19.5 29.5 21.5 29.5C24 29.5 27 28.5 27 25.5C27 22 22 22.5 22 20.5C22 19.5 23 19 24.5 19C26 19 27.5 19.5 27.5 19.5L28 17C28 17 26 18 22.5 18Z" fill="white"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-soil-dark">Credit Card ending in {formData.cardNumber.slice(-4)}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <svg className="mr-3 h-6 w-auto" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 5.5H14C17.5 5.5 19 7 18.5 9.5C18 12.5 15.5 14.5 12.5 14.5H10.5C10 14.5 9.5 15 9.5 15.5L8.5 20H5L7.5 5.5Z" fill="#002987"/>
                      <path d="M35.5 5.5H42C45.5 5.5 47 7 46.5 9.5C46 12.5 43.5 14.5 40.5 14.5H38.5C38 14.5 37.5 15 37.5 15.5L36.5 20H33L35.5 5.5Z" fill="#0085CC"/>
                      <path d="M21.5 0H28C31.5 0 33 1.5 32.5 4C32 7 29.5 9 26.5 9H24.5C24 9 23.5 9.5 23.5 10L22.5 14.5H19L21.5 0Z" fill="#00186A"/>
                    </svg>
                    <p className="text-soil-dark">PayPal</p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="font-serif text-xl text-soil-dark mb-3">Order Summary</h3>
              <div className="space-y-4 mb-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center border-b border-cream pb-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded-natural mr-4" 
                    />
                    <div className="flex-1">
                      <h4 className="text-soil-dark font-medium">{item.name}</h4>
                      <p className="text-sm text-soil">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-soil-dark font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-cream rounded-natural p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-soil-dark">Subtotal</span>
                  <span className="text-soil-dark">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-soil-dark">Shipping</span>
                  <span className="text-soil-dark">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between font-medium text-lg pt-2 border-t border-moss-light">
                  <span className="text-soil-dark">Total</span>
                  <span className="text-soil-dark">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    className="h-5 w-5 mt-1 text-leaf focus:ring-leaf-light"
                    required 
                  />
                  <label htmlFor="terms" className="ml-2 text-soil-dark">
                    I agree to the <a href="#" className="text-leaf hover:underline">Terms and Conditions</a> and <a href="#" className="text-leaf hover:underline">Privacy Policy</a>
                  </label>
                </div>
              </div>
              
              <div className="mt-8 flex justify-between">
                <button 
                  type="button" 
                  onClick={goBack}
                  className="text-soil-dark hover:text-soil flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to Payment
                </button>
                <button 
                  type="submit" 
                  className="bg-terracotta text-white py-3 px-8 rounded-natural hover:bg-terracotta-dark transition-colors shadow-soft hover:shadow-hover"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pt-24 pb-16 bg-cream-light min-h-screen" data-aos="fade-in">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-3xl md:text-4xl text-soil-dark mb-6">Checkout</h1>
        
        <div className="mb-8">
          <div className="flex items-center justify-center">
            <div className={`h-1 w-full max-w-xs ${step >= 1 ? 'bg-leaf' : 'bg-moss-light'} rounded`}></div>
            <div className={`h-8 w-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-leaf text-white' : 'bg-moss-light text-soil'} mx-2`}>1</div>
            <div className={`h-1 w-full max-w-xs ${step >= 2 ? 'bg-leaf' : 'bg-moss-light'} rounded`}></div>
            <div className={`h-8 w-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-leaf text-white' : 'bg-moss-light text-soil'} mx-2`}>2</div>
            <div className={`h-1 w-full max-w-xs ${step >= 3 ? 'bg-leaf' : 'bg-moss-light'} rounded`}></div>
            <div className={`h-8 w-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-leaf text-white' : 'bg-moss-light text-soil'} mx-2`}>3</div>
            <div className={`h-1 w-full max-w-xs bg-moss-light rounded`}></div>
          </div>
          <div className="flex justify-center mt-2">
            <div className="text-center px-4">
              <span className={`text-sm ${step === 1 ? 'text-soil-dark font-medium' : 'text-soil'}`}>Shipping</span>
            </div>
            <div className="text-center px-4">
              <span className={`text-sm ${step === 2 ? 'text-soil-dark font-medium' : 'text-soil'}`}>Payment</span>
            </div>
            <div className="text-center px-4">
              <span className={`text-sm ${step === 3 ? 'text-soil-dark font-medium' : 'text-soil'}`}>Review</span>
            </div>
          </div>
        </div>
        
        {renderStep()}
      </div>
    </div>
  );
};

export default Checkout;
