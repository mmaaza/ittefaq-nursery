import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration attempt:', formData);
  };

  return (
    <div className="min-h-screen bg-cream-light bg-dotted bg-dotted-sm flex flex-col justify-center items-center px-4 py-12">
      <div className="absolute top-0 right-0 w-36 h-36 bg-moss-light opacity-30 rounded-bl-leaf -z-10"></div>
      <div className="absolute bottom-0 left-0 w-44 h-44 bg-moss-light opacity-30 rounded-tr-leaf -z-10"></div>
      
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <h1 className="font-serif text-4xl text-soil-dark mb-2">Start Your Green Journey</h1>
          <p className="text-soil font-sans">Create an account to join our plant-loving community</p>
        </div>
        
        <div className="bg-cream rounded-natural shadow-soft p-8 mb-6 transition-all duration-300 hover:shadow-hover">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block font-sans text-soil-dark mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-cream-light border border-moss rounded-natural focus:outline-none focus:ring-2 focus:ring-leaf transition-all"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Jane Doe"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block font-sans text-soil-dark mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-cream-light border border-moss rounded-natural focus:outline-none focus:ring-2 focus:ring-leaf transition-all"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="password" className="block font-sans text-soil-dark mb-2">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-3 bg-cream-light border border-moss rounded-natural focus:outline-none focus:ring-2 focus:ring-leaf transition-all"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  minLength="8"
                />
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block font-sans text-soil-dark mb-2">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full px-4 py-3 bg-cream-light border border-moss rounded-natural focus:outline-none focus:ring-2 focus:ring-leaf transition-all"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                />
              </div>
            </div>
            
            <div className="mb-8">
              <label className="flex items-center font-sans text-soil">
                <input type="checkbox" className="mr-2 h-5 w-5 accent-leaf" required />
                I agree to the{' '}
                <a href="#terms" className="text-terracotta hover:text-terracotta-dark mx-1 underline">
                  Terms of Service
                </a>
                {' '}and{' '}
                <a href="#privacy" className="text-terracotta hover:text-terracotta-dark mx-1 underline">
                  Privacy Policy
                </a>
              </label>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-terracotta hover:bg-terracotta-dark text-cream-light font-sans py-3 px-6 rounded-natural transition-all duration-300 shadow-soft hover:shadow-hover"
            >
              Create Account
            </button>
          </form>
        </div>
        
        <div className="text-center">
          <p className="font-sans text-soil">
            Already have an account?{' '}
            <Link to="/login" className="text-terracotta hover:text-terracotta-dark font-medium transition-colors">
              Sign in instead
            </Link>
          </p>
        </div>
      </div>
      
      <div className="mt-8 flex items-center space-x-3">
        <div className="w-3 h-3 rounded-full bg-leaf animate-pulse"></div>
        <div className="h-px w-16 bg-moss"></div>
        <div className="w-2 h-2 rounded-full bg-terracotta"></div>
        <div className="h-px w-16 bg-moss"></div>
        <div className="w-3 h-3 rounded-full bg-leaf-light animate-pulse"></div>
      </div>
    </div>
  );
};

export default Register;
