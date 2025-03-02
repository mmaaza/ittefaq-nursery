import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Categories from './pages/Categories';
import CategoryDetail from './pages/CategoryDetail';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import './index.css';

// Import other pages as needed
// import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          
          {/* Shop and Categories routes */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/categories" element={<Categories />} />
          
          {/* Category detail route */}
          <Route path="/category/:id" element={<CategoryDetail />} />
          
          {/* Product details route */}
          <Route path="/product/:id" element={<ProductDetails />} />
          
          {/* About route */}
          <Route path="/about" element={<About />} />
          
          {/* Add additional routes as needed */}
          {/* <Route path="/cart" element={<Cart />} /> */}
          
          {/* Default 404 page */}
          <Route path="*" element={<div className="container mx-auto px-4 py-20 text-center"><h1 className="text-4xl font-serif text-soil-dark mb-4">Page Not Found</h1><p className="mb-8">The page you're looking for doesn't exist.</p><Link to="/" className="bg-leaf text-white py-2 px-6 rounded-natural">Back to Home</Link></div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
