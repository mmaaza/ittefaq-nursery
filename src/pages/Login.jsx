import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-cream-light bg-dotted bg-dotted-sm flex flex-col justify-center items-center px-4 py-12">
      <div className="absolute top-0 left-0 w-32 h-32 bg-moss-light opacity-30 rounded-br-leaf -z-10"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-moss-light opacity-30 rounded-tl-leaf -z-10"></div>
      
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-serif text-4xl text-soil-dark mb-2">Welcome Back</h1>
          <p className="text-soil font-sans">Sign in to continue your green journey</p>
        </div>
        
        <div className="bg-cream rounded-natural shadow-soft p-8 mb-6 transition-all duration-300 hover:shadow-hover">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block font-sans text-soil-dark mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-cream-light border border-moss rounded-natural focus:outline-none focus:ring-2 focus:ring-leaf transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="font-sans text-soil-dark">Password</label>
                <a href="#forgot-password" className="font-sans text-sm text-terracotta hover:text-terracotta-dark transition-colors">
                  Forgot Password?
                </a>
              </div>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 bg-cream-light border border-moss rounded-natural focus:outline-none focus:ring-2 focus:ring-leaf transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-terracotta hover:bg-terracotta-dark text-cream-light font-sans py-3 px-6 rounded-natural transition-all duration-300 shadow-soft hover:shadow-hover"
            >
              Sign In
            </button>
          </form>
        </div>
        
        <div className="text-center">
          <p className="font-sans text-soil">
            Don't have an account?{' '}
            <Link to="/register" className="text-terracotta hover:text-terracotta-dark font-medium transition-colors">
              Register here
            </Link>
          </p>
        </div>
      </div>
      
      <div className="mt-12">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-leaf"></span>
          <span className="w-3 h-3 rounded-full bg-leaf-light"></span>
          <span className="w-2 h-2 rounded-full bg-moss"></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
