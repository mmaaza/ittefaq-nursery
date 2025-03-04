import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Categories from './pages/Categories';
import CategoryDetail from './pages/CategoryDetail';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import { CartProvider } from './context/CartContext';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import AccountOverview from "./components/dashboard/AccountOverview";
import OrdersPage from "./components/dashboard/OrdersPage";
import WishlistPage from "./components/dashboard/WishlistPage";
import AddressesPage from "./components/dashboard/AddressesPage";
import SettingsPage from "./components/dashboard/SettingsPage";
import './index.css';

function App() {
  return (
    <CartProvider>
      <Router>
            <Routes>
              <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                
                {/* Authentication routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                {/* Shop and Categories routes */}
                <Route path="/shop" element={<Shop />} />
                <Route path="/categories" element={<Categories />} />
                
                {/* Category detail route */}
                <Route path="/category/:id" element={<CategoryDetail />} />
                
                {/* Product details route */}
                <Route path="/product/:id" element={<ProductDetails />} />
                
                {/* About route */}
                <Route path="/about" element={<About />} />
                
                {/* Cart and Checkout routes */}
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                
                {/* Dashboard Routes */}
                <Route path="/dashboard" element={<Dashboard />}>
                  <Route index element={<AccountOverview />} />
                  <Route path="orders" element={<OrdersPage />} />
                  <Route path="wishlist" element={<WishlistPage />} />
                  <Route path="addresses" element={<AddressesPage />} />
                  <Route path="settings" element={<SettingsPage />} />
                </Route>
                
                {/* Default 404 page */}
                <Route path="*" element={<div className="container mx-auto px-4 py-20 text-center"><h1 className="text-4xl font-serif text-soil-dark mb-4">Page Not Found</h1><p className="mb-8">The page you're looking for doesn't exist.</p><Link to="/" className="bg-leaf text-white py-2 px-6 rounded-natural">Back to Home</Link></div>} />
              </Route>
            </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
