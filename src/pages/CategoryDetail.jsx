import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import placeholder image (replace with your actual plant images)
import plantPlaceholder from '../assets/outdoor-plant.jpg';

const CategoryDetail = () => {
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState('featured');
  const [activeFilters, setActiveFilters] = useState({
    price: 'all',
    size: 'all',
    lightRequirement: 'all',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    // Scroll to top when category changes
    window.scrollTo(0, 0);
    
    // Mark component as loaded for animations
    setTimeout(() => setIsLoaded(true), 100);

    // Mock categories data - replace with actual API fetch in production
    const categories = {
      indoor: {
        name: 'Indoor Plants',
        description: 'Perfect plants for beautifying your home, office, or any indoor space. From air-purifying varieties to low-light tolerant species.',
        longDescription: 'Indoor plants add life to any space while purifying the air and creating a more relaxing atmosphere. Our diverse collection includes easy-care varieties that thrive in low light conditions, statement plants that create a bold impression, and trailing varieties perfect for shelves and hanging planters. Each plant is carefully nurtured to ensure it thrives in your indoor environment.',
        image: plantPlaceholder,
        bannerImage: plantPlaceholder,
        features: ['Air Purifying', 'Low Maintenance', 'Shade Tolerant'],
        careLevel: 'Beginner to Moderate',
        popular: ['Monstera Deliciosa', 'Snake Plant', 'Pothos', 'ZZ Plant']
      },
      outdoor: {
        name: 'Outdoor Plants',
        description: 'Hardy plants that thrive in your garden, patio, or balcony. Choose from flowering plants, shrubs, and more.',
        longDescription: 'Transform your outdoor space with our selection of beautiful and resilient outdoor plants. Whether you have a sprawling garden, a modest patio, or a small balcony, we have plants that will bring color, texture, and life to your space. Our outdoor collection includes flowering perennials, ornamental grasses, shrubs, and seasonal favorites.',
        image: plantPlaceholder,
        bannerImage: plantPlaceholder,
        features: ['Sun Loving', 'Weather Resistant', 'Seasonal Blooms'],
        careLevel: 'Moderate',
        popular: ['Lavender', 'Hydrangea', 'Ferns', 'Ornamental Grasses']
      },
      succulent: {
        name: 'Succulents & Cacti',
        description: 'Water-storing plants in beautiful shapes and sizes. Perfect for beginners or busy plant parents.',
        longDescription: 'Our collection of succulents and cacti offers incredible diversity in shapes, colors, and textures. These water-wise plants are perfect for beginners and busy plant parents alike, as they require minimal watering and care. Succulents store water in their leaves, making them drought-tolerant and low-maintenance, while still providing year-round beauty.',
        image: plantPlaceholder,
        bannerImage: plantPlaceholder,
        features: ['Drought Resistant', 'Minimal Care', 'Unique Shapes'],
        careLevel: 'Easy',
        popular: ['Echeveria', 'Aloe Vera', 'Barrel Cactus', 'String of Pearls']
      },
      tropical: {
        name: 'Tropical Plants',
        description: 'Lush, vibrant plants that create a tropical oasis in your home. Statement pieces with beautiful foliage.',
        longDescription: 'Bring the exotic beauty of the tropics into your home with our collection of tropical plants. Known for their dramatic foliage, vibrant colors, and impressive size, these plants make stunning statement pieces. While they may require a bit more care with specific humidity and light needs, the visual impact they create makes it well worth the effort.',
        image: plantPlaceholder,
        bannerImage: plantPlaceholder,
        features: ['Humidity Loving', 'Bold Foliage', 'Colorful Varieties'],
        careLevel: 'Moderate to Expert',
        popular: ['Bird of Paradise', 'Calathea', 'Anthurium', 'Elephant Ear']
      },
      rare: {
        name: 'Rare Finds',
        description: 'Unique and hard-to-find specimens for the discerning plant collector. Limited availability.',
        longDescription: 'For the plant enthusiast looking to add something extraordinary to their collection, our rare finds category features unique and hard-to-find specimens. These botanical treasures include variegated varieties, uncommon species, and limited-edition plants that make exceptional conversation pieces and will be the envy of fellow plant lovers.',
        image: plantPlaceholder,
        bannerImage: plantPlaceholder,
        features: ['Collector Items', 'Limited Stock', 'Conversation Pieces'],
        careLevel: 'Varies (Beginner to Expert)',
        popular: ['Variegated Monstera', 'Pink Princess Philodendron', 'Alocasia Dragon Scale', 'Hoya Carnosa Compacta']
      }
    };

    // Get the current category data
    const currentCategory = categories[id];
    setCategory(currentCategory);
    
    // Mock product data for this category
    const mockProducts = Array(16).fill().map((_, index) => ({
      id: index + 1,
      name: ['Monstera Deliciosa', 'Peace Lily', 'Snake Plant', 'Fiddle Leaf Fig', 'Pothos', 'Spider Plant', 'ZZ Plant', 'Aloe Vera'][index % 8],
      scientificName: `Botanicus example${index + 1}`,
      price: Math.floor(Math.random() * 80) + 20,
      salePrice: index % 5 === 0 ? Math.floor(Math.random() * 40) + 15 : null,
      category: id,
      size: ['small', 'medium', 'large'][Math.floor(Math.random() * 3)],
      image: plantPlaceholder,
      rating: Math.floor(Math.random() * 5) + 1,
      inStock: Math.random() > 0.2,
      lightRequirement: ['low', 'medium', 'bright'][Math.floor(Math.random() * 3)],
      featured: Math.random() > 0.8,
    }));
    
    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, [id]);

  // Apply filters and sorting
  useEffect(() => {
    if (!products.length) return;
    
    let filtered = [...products];
    
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

  // Pagination
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

  // Loading state
  if (!category) {
    return (
      <div className="container mx-auto px-4 py-20 flex justify-center items-center min-h-[60vh]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-32 w-32 bg-moss-light/50 rounded-full mb-4"></div>
          <div className="text-soil-dark text-xl">Loading category...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream-light min-h-screen">
      {/* Category Banner */}
      <div 
        className="bg-center bg-cover relative h-72 md:h-96"
        style={{ backgroundImage: `url(${category.bannerImage})` }}
      >
        <div className="absolute inset-0 bg-soil-dark bg-opacity-50"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-serif text-cream-light mb-4">
              {category.name}
            </h1>
            <p className="text-cream-light max-w-2xl mx-auto">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Category Description */}
      <div className="bg-moss-light/10 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-6 justify-center" data-aos="fade-up">
              {category.features.map(feature => (
                <span 
                  key={feature}
                  className="bg-moss-light text-soil-dark px-3 py-1 rounded-full text-sm"
                >
                  {feature}
                </span>
              ))}
              <span className="bg-leaf-light text-soil-dark px-3 py-1 rounded-full text-sm">
                {category.careLevel} Care
              </span>
            </div>
            
            <p 
              className="text-soil-dark text-center mb-8 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {category.longDescription}
            </p>
            
            {/* Popular in this category */}
            <div 
              className="bg-cream rounded-natural p-6 shadow-soft mt-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-serif text-soil-dark mb-3 text-center">Popular in {category.name}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.popular.map(item => (
                  <Link 
                    key={item}
                    to={`/search?query=${encodeURIComponent(item)}`}
                    className="bg-white hover:bg-moss-light transition-colors px-3 py-2 rounded-natural text-sm text-soil-dark"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 
          className="text-3xl font-serif text-soil-dark text-center mb-12"
          data-aos="fade-up"
        >
          Browse Our {category.name}
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className="lg:w-1/4">
            <div 
              className={`bg-cream p-6 rounded-natural shadow-soft transition-all duration-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} sticky top-28`}
            >
              <h3 className="text-xl font-serif text-soil-dark mb-6">Filter {category.name}</h3>
              
              {/* Price Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-soil-dark mb-3">Price Range</h4>
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
                <h4 className="font-semibold text-soil-dark mb-3">Plant Size</h4>
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
                <h4 className="font-semibold text-soil-dark mb-3">Light Requirements</h4>
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
                            className="bg-leaf hover:bg-leaf-dark text-white text-sm py-1 px-3 rounded-full transition-colors"
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
                  
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-10 py-2 ${currentPage === i + 1 ? 'bg-leaf text-white' : 'bg-moss-light hover:bg-moss text-soil-dark'} transition-colors`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;


