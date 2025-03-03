import { Link, NavLink, Outlet } from "react-router-dom";
import AOS from "aos";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.webp";
import { useCart } from "../context/CartContext";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const { cartCount } = useCart(); // Get cart count from context
    const searchRef = useRef(null);
    const searchInputRef = useRef(null);
    const profileDropdownRef = useRef(null);

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800,
        });
    }, []);

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Focus input when search panel opens
    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    // Close search panel when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchOpen(false);
            }
        };

        // Close search panel on ESC key
        const handleEscKey = (event) => {
            if (event.key === 'Escape') {
                setIsSearchOpen(false);
            }
        };

        if (isSearchOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscKey);
        }
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isSearchOpen]);

    // Handle search form submission
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Get search value
        const searchQuery = searchInputRef.current.value;
        // Process search (in a real app, this might navigate to search results page)
        if (searchQuery.trim()) {
            console.log('Searching for:', searchQuery);
            // Navigate to search results page - commented out as it's just a simulation
            // navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
        // Clear search field
        searchInputRef.current.value = '';
        // Close search panel
        setIsSearchOpen(false);
    };

    // Handle clicks outside the profile dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
                setIsProfileDropdownOpen(false);
            }
        };

        if (isProfileDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isProfileDropdownOpen]);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-cream-light shadow-soft py-3"
                    : "bg-transparent py-5"
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            alt="Nursery Logo"
                            className="h-10 w-auto mr-3"
                        />
                        <span className="font-serif text-2xl font-bold text-leaf-dark">
                            Ittefaq Nursery
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-leaf-dark font-semibold border-b-2 border-leaf"
                                    : "text-soil-dark hover:text-leaf transition-colors"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/shop"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-leaf-dark font-semibold border-b-2 border-leaf"
                                    : "text-soil-dark hover:text-leaf transition-colors"
                            }
                        >
                            Shop
                        </NavLink>
                        <NavLink
                            to="/categories"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-leaf-dark font-semibold border-b-2 border-leaf"
                                    : "text-soil-dark hover:text-leaf transition-colors"
                            }
                        >
                            Categories
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-leaf-dark font-semibold border-b-2 border-leaf"
                                    : "text-soil-dark hover:text-leaf transition-colors"
                            }
                        >
                            About
                        </NavLink>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Search */}
                        <button 
                            className="p-2 text-soil-dark hover:text-leaf transition-colors relative"
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            aria-label="Search"
                            aria-expanded={isSearchOpen}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>

                        {/* Cart */}
                        <Link
                            to="/cart"
                            className="p-2 text-soil-dark hover:text-leaf transition-colors relative"
                            aria-label="View cart"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                />
                            </svg>
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-leaf text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        {/* Account with dropdown */}
                        <div className="relative" ref={profileDropdownRef}>
                            <button
                                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                                className="p-2 text-soil-dark hover:text-leaf transition-colors"
                                aria-expanded={isProfileDropdownOpen}
                                aria-label="Account menu"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </button>
                            
                            {/* Profile dropdown */}
                            {isProfileDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-natural shadow-soft py-2 z-50">
                                    <Link 
                                        to="/dashboard" 
                                        className="block px-4 py-2 text-soil-dark hover:bg-moss-light transition-colors"
                                        onClick={() => setIsProfileDropdownOpen(false)}
                                    >
                                        My Dashboard
                                    </Link>
                                    <Link 
                                        to="/dashboard/orders" 
                                        className="block px-4 py-2 text-soil-dark hover:bg-moss-light transition-colors"
                                        onClick={() => setIsProfileDropdownOpen(false)}
                                    >
                                        Orders
                                    </Link>
                                    <Link 
                                        to="/dashboard/wishlist" 
                                        className="block px-4 py-2 text-soil-dark hover:bg-moss-light transition-colors"
                                        onClick={() => setIsProfileDropdownOpen(false)}
                                    >
                                        Wishlist
                                    </Link>
                                    <div className="my-1 border-t border-moss-light"></div>
                                    <Link 
                                        to="/logout" 
                                        className="block px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                                        onClick={() => setIsProfileDropdownOpen(false)}
                                    >
                                        Sign Out
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Mobile menu button */}
                        <button
                            className="md:hidden p-2 text-soil-dark hover:text-leaf focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        >
                            <div className="relative w-6 h-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-6 w-6 absolute top-0 left-0 transform transition-all duration-300 ${
                                        isMenuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                                    }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-6 w-6 absolute top-0 left-0 transform transition-all duration-300 ${
                                        isMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-0"
                                    }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Search Panel */}
                <div
                    ref={searchRef}
                    className={`absolute left-0 right-0 bg-cream-light shadow-soft transform transition-all duration-300 ease-in-out ${
                        isSearchOpen 
                            ? "translate-y-0 opacity-100 h-auto py-6" 
                            : "-translate-y-4 opacity-0 h-0 py-0 overflow-hidden"
                    }`}
                >
                    <div className="container mx-auto px-4">
                        <form onSubmit={handleSearchSubmit} className="relative">
                            <div className="flex items-center rounded-natural border border-moss-light bg-cream overflow-hidden transition-shadow hover:shadow-soft focus-within:shadow-soft">
                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    placeholder="Search for plants, pots, tools..."
                                    className="flex-1 py-3 px-4 bg-transparent text-soil-dark placeholder-soil-light focus:outline-none"
                                    aria-label="Search"
                                />
                                <button
                                    type="submit"
                                    className="px-5 py-3 bg-leaf text-white hover:bg-leaf-dark transition-colors"
                                    aria-label="Submit search"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                            {/* Quick search suggestions */}
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="text-sm text-soil-dark mr-2">Popular:</span>
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (searchInputRef.current) searchInputRef.current.value = "Indoor Plants";
                                    }}
                                    className="px-3 py-1 bg-moss-light text-soil-dark hover:bg-moss hover:text-soil-dark rounded-full text-sm transition-colors"
                                >
                                    Indoor Plants
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (searchInputRef.current) searchInputRef.current.value = "Terracotta Pots";
                                    }}
                                    className="px-3 py-1 bg-moss-light text-soil-dark hover:bg-moss hover:text-soil-dark rounded-full text-sm transition-colors"
                                >
                                    Terracotta Pots
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (searchInputRef.current) searchInputRef.current.value = "Gardening Tools";
                                    }}
                                    className="px-3 py-1 bg-moss-light text-soil-dark hover:bg-moss hover:text-soil-dark rounded-full text-sm transition-colors"
                                >
                                    Gardening Tools
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden absolute left-0 right-0 bg-cream-light shadow-soft transform transition-transform ${
                        isMenuOpen ? "translate-y-0" : "-translate-y-full h-0"
                    } overflow-hidden`}
                >
                    <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-leaf-dark font-semibold border-l-4 border-leaf pl-2"
                                    : "text-soil-dark hover:text-leaf pl-3 transition-colors"
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/shop"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-leaf-dark font-semibold border-l-4 border-leaf pl-2"
                                    : "text-soil-dark hover:text-leaf pl-3 transition-colors"
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Shop
                        </NavLink>
                        <NavLink
                            to="/categories"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-leaf-dark font-semibold border-l-4 border-leaf pl-2"
                                    : "text-soil-dark hover:text-leaf pl-3 transition-colors"
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Categories
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-leaf-dark font-semibold border-l-4 border-leaf pl-2"
                                    : "text-soil-dark hover:text-leaf pl-3 transition-colors"
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
