import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import placeholder image (replace with your actual plant images)
import plantPlaceholder from '../assets/plant-placeholder.png';

const Shop = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeFilters, setActiveFilters] = useState({
    category: 'all',
    price: 'all',
    size: 'all',
    lightRequirement: 'all',
  });
  const [sortOption, setSortOption] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    
    // Mark component as loaded for animations
    setTimeout(() => setIsLoaded(true), 100);
    
    // Mock product data - replace with actual API fetch in production
    const mockProducts = Array(24).fill().map((_, index) => ({
      id: index + 1,
      name: ['Monstera Deliciosa', 'Peace Lily', 'Snake Plant', 'Fiddle Leaf Fig', 'Pothos', 'Spider Plant', 'ZZ Plant', 'Aloe Vera'][index % 8],
      scientificName: `Botanicus example${index + 1}`,
      price: Math.floor(Math.random() * 80) + 20,
      salePrice: index % 5 === 0 ? Math.floor(Math.random() * 40) + 15 : null,
      category: ['indoor', 'outdoor', 'succulent', 'tropical', 'rare'][Math.floor(Math.random() * 5)],
      size: ['small', 'medium', 'large'][Math.floor(Math.random() * 3)],
      image: plantPlaceholder,
      rating: Math.floor(Math.random() * 5) + 1,
      inStock: Math.random() > 0.2,
      lightRequirement: ['low', 'medium', 'bright'][Math.floor(Math.random() * 3)],
      featured: Math.random() > 0.8,
    }));
    
    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    let filtered = [...products];
    
    // Apply category filter
    if (activeFilters.category !== 'all') {
      filtered = filtered.filter(product => product.category === activeFilters.category);
    }
    
    // Apply price filter
    if (activeFilters.price !== 'all') {
      const priceMappings = {
        'under-25': (p) => p.salePrice ? p.salePrice < 25 : p.price < 25,
        '25-50': (p) => {
          const effectivePrice = p.salePrice || p.price;
          return effectivePrice >= 25 && effectivePrice <= 50;
        },
        '50-100': (p) => {
          const effectivePrice = p.salePrice || p.price;
          return effectivePrice > 50 && effectivePrice <= 100;
        },
        'over-100': (p) => {
          const effectivePrice = p.salePrice || p.price;
          return effectivePrice > 100;
        }
      };
      filtered = filtered.filter(priceMappings[activeFilters.price]);
    }
    
    // Apply size filter
    if (activeFilters.size !== 'all') {
      filtered = filtered.filter(product => product.size === activeFilters.size);
    }
    
    // Apply light requirement filter
    if (activeFilters.lightRequirement !== 'all') {
      filtered = filtered.filter(product => product.lightRequirement === activeFilters.lightRequirement);
    }
    
    // Apply sorting
    switch (sortOption) {
      case 'price-low-high':
        filtered.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
        break;
      case 'price-high-low':
        filtered.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
        break;
      case 'name-a-z':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-z-a':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
    
    setFilteredProducts(filtered);
    // Reset to first page when filters change
    setCurrentPage(1);
  }, [products, activeFilters, sortOption]);

  // Paginate products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: value,
    }));
  };

  // Add to cart functionality (implement actual cart logic)
  const handleAddToCart = (product) => {
    console.log(`Added to cart: ${product.name}`);
    // Add your cart logic here
  };

  return (
    <div className="bg-cream-light min-h-screen">
      {/* Shop Header */}
      <div className="bg-moss-light py-16">
        <div className="container mx-auto px-4">
          <h1 
            className="text-4xl md:text-5xl font-serif text-soil-dark text-center mb-4"
            data-aos="fade-up"
          >
            Our Plants Collection
          </h1>
          <p 
            className="text-center text-soil-dark max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Explore our wide variety of carefully selected plants for every space and lifestyle. 
            From low-maintenance succulents to statement tropical specimens.
          </p>
        </div>
      </div>

      {/* Shop Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className="lg:w-1/4">
            <div 
              className={`bg-cream p-6 rounded-natural shadow-soft transition-all duration-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} sticky top-28`}
            >
              <h2 className="text-xl font-serif text-soil-dark mb-6">Filter Plants</h2>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-soil-dark mb-3">Categories</h3>
                <div className="space-y-2">
                  {['all', 'indoor', 'outdoor', 'succulent', 'tropical', 'rare'].map((category) => (
                    <label key={category} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={activeFilters.category === category}
                        onChange={() => handleFilterChange('category', category)}
                        className="form-radio text-leaf-dark focus:ring-leaf-light h-4 w-4"
                      />
                      <span className="ml-2 text-soil capitalize">
                        {category === 'all' ? 'All Categories' : category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Price Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-soil-dark mb-3">Price Range</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under-25', label: 'Under $25' },
                    { value: '25-50', label: '$25 - $50' },
                    { value: '50-100', label: '$50 - $100' },
                    { value: 'over-100', label: 'Over $100' },
                  ].map((price) => (
                    <label key={price.value} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        value={price.value}
                        checked={activeFilters.price === price.value}
                        onChange={() => handleFilterChange('price', price.value)}
                        className="form-radio text-leaf-dark focus:ring-leaf-light h-4 w-4"
                      />
                      <span className="ml-2 text-soil">{price.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Size Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-soil-dark mb-3">Plant Size</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Sizes' },
                    { value: 'small', label: 'Small' },
                    { value: 'medium', label: 'Medium' },
                    { value: 'large', label: 'Large' },
                  ].map((size) => (
                    <label key={size.value} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="size"
                        value={size.value}
                        checked={activeFilters.size === size.value}
                        onChange={() => handleFilterChange('size', size.value)}
                        className="form-radio text-leaf-dark focus:ring-leaf-light h-4 w-4"
                      />
                      <span className="ml-2 text-soil">{size.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Light Requirements Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-soil-dark mb-3">Light Requirements</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Light Levels' },
                    { value: 'low', label: 'Low Light' },
                    { value: 'medium', label: 'Medium Light' },
                    { value: 'bright', label: 'Bright Light' },
                  ].map((light) => (
                    <label key={light.value} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="light"
                        value={light.value}
                        checked={activeFilters.lightRequirement === light.value}
                        onChange={() => handleFilterChange('lightRequirement', light.value)}
                        className="form-radio text-leaf-dark focus:ring-leaf-light h-4 w-4"
                      />
                      <span className="ml-2 text-soil">{light.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Reset Filters */}
              <button
                className="w-full bg-moss-light hover:bg-moss text-soil-dark py-2 px-4 rounded-natural transition-colors"
                onClick={() => setActiveFilters({
                  category: 'all',
                  price: 'all',
                  size: 'all',
                  lightRequirement: 'all',
                })}
              >
                Reset Filters
              </button>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Sort and Results Info */}
            <div 
              className="flex flex-col sm:flex-row justify-between items-center mb-6 pb-4 border-b border-moss-light"
              data-aos="fade-up"
            >
              <p className="text-soil mb-4 sm:mb-0">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'plant' : 'plants'} found
              </p>
              
              <div className="flex items-center">
                <label htmlFor="sort" className="text-soil mr-2">Sort by:</label>
                <select 
                  id="sort" 
                  value={sortOption} 
                  onChange={(e) => setSortOption(e.target.value)}
                  className="bg-cream border border-moss-light rounded-natural py-2 px-3 text-soil focus:outline-none focus:ring-1 focus:ring-leaf"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="name-a-z">Name: A to Z</option>
                  <option value="name-z-a">Name: Z to A</option>
                </select>
              </div>
            </div>
            
            {/* Products Grid */}
            {currentProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentProducts.map((product, index) => (
                  <div 
                    key={product.id}
                    className="bg-white rounded-natural overflow-hidden shadow-soft hover:shadow-hover transition-all group"
                    data-aos="fade-up"
                    data-aos-delay={50 * (index % 6)}
                  >
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="h-64 w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                        />
                        {product.salePrice && (
                          <div className="absolute top-3 left-3 bg-terracotta text-white text-xs font-bold px-3 py-1 rounded-full">
                            Sale
                          </div>
                        )}
                        {!product.inStock && (
                          <div className="absolute inset-0 bg-soil-dark bg-opacity-70 flex items-center justify-center">
                            <span className="text-cream-light font-semibold">Out of Stock</span>
                          </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-soil-dark to-transparent h-16 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-cream-light text-sm">View Details</span>
                        </div>
                      </div>
                    </Link>
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <Link to={`/product/${product.id}`} className="hover:text-leaf-dark transition-colors">
                            <h3 className="font-serif text-soil-dark text-lg">{product.name}</h3>
                          </Link>
                          <p className="text-soil text-sm italic">{product.scientificName}</p>
                        </div>
                        <div className="flex flex-col items-end">
                          {product.salePrice ? (
                            <>
                              <span className="text-terracotta font-bold">${product.salePrice}</span>
                              <span className="text-soil line-through text-sm">${product.price}</span>
                            </>
                          ) : (
                            <span className="text-leaf-dark font-bold">${product.price}</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mt-3">
                        <div className="flex text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill={i < product.rating ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={i < product.rating ? 0 : 2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                          ))}
                        </div>
                        
                        {product.inStock && (
                          <button 
                            onClick={() => handleAddToCart(product)}
                            className="bg-leaf hover:bg-leaf-dark text-white text-sm py-1 px-3 rounded-full transition-colors transform hover:scale-105"
                            aria-label={`Add ${product.name} to cart`}
                          >
                            Add to Cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="bg-moss-light/20 p-8 rounded-natural">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-soil-dark mb-4 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-serif text-soil-dark mb-3">No plants match your filters</h3>
                  <p className="text-soil mb-6">Try changing your filter selections or reset filters to see all plants.</p>
                  <button
                    className="bg-leaf text-white py-2 px-6 rounded-natural hover:bg-leaf-dark transition-colors"
                    onClick={() => setActiveFilters({
                      category: 'all',
                      price: 'all',
                      size: 'all',
                      lightRequirement: 'all',
                    })}
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            )}
            
            {/* Pagination */}
            {filteredProducts.length > productsPerPage && (
              <div className="flex justify-center mt-12">
                <div className="flex rounded-natural overflow-hidden shadow-soft">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 ${currentPage === 1 ? 'bg-moss-light cursor-not-allowed' : 'bg-moss hover:bg-moss-dark'} text-soil-dark transition-colors`}
                  >
                    <span className="sr-only">Previous page</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  {[...Array(totalPages)].map((_, i) => {
                    // Show limited page numbers with ellipsis for better UX
                    if (
                      i === 0 || 
                      i === totalPages - 1 || 
                      (i >= currentPage - 2 && i <= currentPage + 0)
                    ) {
                      return (
                        <button
                          key={i}
                          onClick={() => setCurrentPage(i + 1)}
                          className={`w-10 py-2 ${currentPage === i + 1 ? 'bg-leaf text-white' : 'bg-moss-light hover:bg-moss text-soil-dark'} transition-colors`}
                        >
                          {i + 1}
                        </button>
                      );
                    } else if (i === currentPage + 1) {
                      return <span key={i} className="px-2 py-2 bg-moss-light flex items-center text-soil">...</span>;
                    } else if (i === 1 && currentPage > 3) {
                      return <span key={i} className="px-2 py-2 bg-moss-light flex items-center text-soil">...</span>;
                    } else {
                      return null;
                    }
                  })}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 ${currentPage === totalPages ? 'bg-moss-light cursor-not-allowed' : 'bg-moss hover:bg-moss-dark'} text-soil-dark transition-colors`}
                  >
                    <span className="sr-only">Next page</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Recently Viewed Section - Appears after user has viewed products */}
            <div className="mt-16 pt-8 border-t border-moss-light">
              <h2 className="text-2xl font-serif text-soil-dark mb-6">Shop by Collection</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {['Low Light Plants', 'Pet-Friendly', 'Air Purifiers', 'Beginner Friendly'].map((collection, i) => (
                  <Link 
                    key={collection} 
                    to={`/collection/${collection.toLowerCase().replace(' ', '-')}`}
                    className="bg-moss-light/40 hover:bg-moss-light p-4 rounded-natural text-center transition-colors"
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                  >
                    <span className="text-soil-dark font-serif">{collection}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
