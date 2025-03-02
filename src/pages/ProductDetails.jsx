import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import placeholder images (replace with your actual plant images)
import plantPlaceholder from '../assets/plant-placeholder.png';
import plantDetail1 from '../assets/plant-placeholder.png';
import plantDetail2 from '../assets/plant-placeholder.png';
import plantDetail3 from "../assets/plant-placeholder.png";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mainImage, setMainImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Simulate API call to fetch product details
    const fetchProductDetails = async () => {
      setIsLoading(true);
      try {
        // Replace with actual API call in production
        // const response = await fetch(`/api/products/${id}`);
        // const data = await response.json();

        // Simulated data for demo purposes
        const mockProduct = {
          id: parseInt(id),
          name: "Monstera Deliciosa",
          scientificName: "Monstera deliciosa",
          price: 49.99,
          salePrice: null,
          description: "The Monstera Deliciosa, also known as the Swiss Cheese Plant, is famous for its quirky natural leaf holes. These tropical plants are easy to care for and bring a jungle feel to any space.",
          features: [
            "Air purifying",
            "Pet friendly",
            "Low maintenance",
            "Tropical appearance"
          ],
          careInstructions: {
            light: "Medium to bright indirect light. Can tolerate some shade.",
            water: "Water when the top 2-3 inches of soil is dry. Reduce watering in winter.",
            humidity: "Enjoys higher humidity but adapts to normal room humidity.",
            temperature: "Thrives between 65-85°F (18-29°C). Keep away from cold drafts.",
            soil: "Well-draining potting mix rich in organic matter.",
            fertilizer: "Feed with balanced liquid fertilizer monthly during growing season."
          },
          images: [
            plantDetail1,
            plantDetail2,
            plantDetail3,
            plantPlaceholder
          ],
          stock: 15,
          rating: 4.8,
          reviewCount: 124,
          category: "indoor",
          potSize: "6 inches",
          plantHeight: "12-16 inches",
          lightRequirement: "medium",
          difficulty: "beginner"
        };

        setProduct(mockProduct);
        setMainImage(mockProduct.images[0]);
        
        // Generate mock related products
        const mockRelated = [1, 2, 3, 4].map(num => ({
          id: num + 100,
          name: ["Snake Plant", "Peace Lily", "ZZ Plant", "Fiddle Leaf Fig"][num - 1],
          price: 20 + num * 5,
          image: plantPlaceholder,
          category: ["indoor", "outdoor", "succulent", "indoor"][num - 1],
          rating: 4 + (num % 2) * 0.5,
        }));
        
        setRelatedProducts(mockRelated);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= (product?.stock || 100)) {
      setQuantity(value);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    if (quantity < (product?.stock || 100)) {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    // Implement cart functionality
    console.log(`Added ${quantity} of ${product?.name} to cart`);
    // You can show a success message or update cart state here
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-20 flex justify-center items-center min-h-[60vh]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-32 w-32 bg-moss-light/50 rounded-full mb-4"></div>
          <div className="text-soil-dark text-xl">Loading plant details...</div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-serif text-soil-dark mb-4">Product Not Found</h1>
        <p className="text-soil mb-8">We couldn't find the plant you're looking for.</p>
        <Link to="/shop" className="bg-leaf text-white py-2 px-6 rounded-natural hover:bg-leaf-dark transition-colors">
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-cream-light min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="bg-moss-light/30 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="text-soil-dark hover:text-leaf inline-flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-soil" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <Link to="/shop" className="ml-1 text-soil-dark hover:text-leaf md:ml-2">Shop</Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-soil" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <Link to={`/category/${product.category}`} className="ml-1 text-soil-dark hover:text-leaf md:ml-2 capitalize">{product.category} Plants</Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-soil" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-1 text-soil-dark font-medium md:ml-2 truncate max-w-[150px]">{product.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Images */}
          <div data-aos="fade-right">
            <div className="mb-4 aspect-square bg-white rounded-natural overflow-hidden shadow-soft">
              <img 
                src={mainImage} 
                alt={product.name} 
                className="w-full h-full object-contain p-6"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, index) => (
                <button 
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`aspect-square bg-white rounded-md overflow-hidden border-2 transition-colors ${mainImage === img ? 'border-leaf' : 'border-transparent hover:border-moss-light'}`}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div data-aos="fade-left">
            <h1 className="text-3xl font-serif text-soil-dark mb-2">{product.name}</h1>
            <p className="text-soil italic mb-4">{product.scientificName}</p>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-500 mr-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill={i < Math.floor(product.rating) ? "currentColor" : "none"} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={i < Math.floor(product.rating) ? 0 : 1} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                {product.rating % 1 > 0 && (
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute top-0 left-0 text-yellow-500 overflow-hidden" style={{ clipPath: `inset(0 ${100 - (product.rating % 1) * 100}% 0 0)` }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                )}
              </div>
              <span className="text-soil">{product.rating} ({product.reviewCount} reviews)</span>
            </div>
            
            {/* Price */}
            <div className="mb-6">
              {product.salePrice ? (
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-terracotta">${product.salePrice}</span>
                  <span className="text-lg text-soil line-through">${product.price}</span>
                  <span className="bg-terracotta text-white text-xs font-bold px-2 py-1 rounded-full ml-2">
                    SALE
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-bold text-leaf-dark">${product.price}</span>
              )}
            </div>

            {/* Quick Features */}
            <div className="mb-6">
              <h3 className="text-soil-dark font-semibold mb-2">Features:</h3>
              <ul className="grid grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-soil">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-leaf mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Stock Status */}
            <div className="mb-6">
              {product.stock > 0 ? (
                <div className="flex items-center">
                  <span className="inline-block h-3 w-3 rounded-full bg-green-500 mr-2"></span>
                  <span className="text-soil-dark">In Stock ({product.stock} available)</span>
                </div>
              ) : (
                <div className="flex items-center">
                  <span className="inline-block h-3 w-3 rounded-full bg-red-500 mr-2"></span>
                  <span className="text-soil-dark">Out of Stock</span>
                </div>
              )}
            </div>
            
            {/* Quantity and Add to Cart */}
            {product.stock > 0 && (
              <div className="mb-8">
                <div className="flex items-center">
                  <div className="mr-4">
                    <label htmlFor="quantity" className="block text-soil-dark mb-1">Quantity:</label>
                    <div className="custom-number-input h-10 w-32">
                      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1 border border-moss">
                        <button 
                          onClick={decrementQuantity} 
                          className="bg-moss-light text-soil-dark hover:text-soil-dark hover:bg-moss h-full w-20 rounded-l outline-none flex items-center justify-center"
                        >
                          <span className="m-auto text-2xl">−</span>
                        </button>
                        <input 
                          type="number" 
                          id="quantity"
                          className="focus:outline-none text-center w-full bg-cream-light font-semibold text-md hover:text-soil-dark focus:text-soil-dark md:text-base text-soil-dark" 
                          name="quantity" 
                          value={quantity}
                          onChange={handleQuantityChange}
                          min="1"
                          max={product.stock}
                        />
                        <button 
                          onClick={incrementQuantity}
                          className="bg-moss-light text-soil-dark hover:text-soil-dark hover:bg-moss h-full w-20 rounded-r flex items-center justify-center"
                        >
                          <span className="m-auto text-2xl">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-leaf hover:bg-leaf-dark text-white py-3 px-6 rounded-natural transition-colors font-semibold flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            )}
            
            {/* Product Specs */}
            <div className="bg-moss-light/20 rounded-natural p-6">
              <h3 className="text-lg font-serif text-soil-dark mb-4">Quick Specs</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-soil text-sm">Pot Size</p>
                  <p className="text-soil-dark font-medium">{product.potSize}</p>
                </div>
                <div>
                  <p className="text-soil text-sm">Plant Height</p>
                  <p className="text-soil-dark font-medium">{product.plantHeight}</p>
                </div>
                <div>
                  <p className="text-soil text-sm">Light Needs</p>
                  <p className="text-soil-dark font-medium capitalize">{product.lightRequirement} Light</p>
                </div>
                <div>
                  <p className="text-soil text-sm">Difficulty</p>
                  <p className="text-soil-dark font-medium capitalize">{product.difficulty}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-16">
          <div className="border-b border-moss-light">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`py-4 px-1 inline-flex items-center font-medium text-sm border-b-2 ${activeTab === 'description' ? 'border-leaf text-leaf-dark' : 'border-transparent text-soil hover:text-soil-dark hover:border-moss-light'}`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('care')}
                className={`py-4 px-1 inline-flex items-center font-medium text-sm border-b-2 ${activeTab === 'care' ? 'border-leaf text-leaf-dark' : 'border-transparent text-soil hover:text-soil-dark hover:border-moss-light'}`}
              >
                Care Instructions
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 px-1 inline-flex items-center font-medium text-sm border-b-2 ${activeTab === 'reviews' ? 'border-leaf text-leaf-dark' : 'border-transparent text-soil hover:text-soil-dark hover:border-moss-light'}`}
              >
                Reviews ({product.reviewCount})
              </button>
            </nav>
          </div>
          
          {/* Tab Content */}
          <div className="py-8">
            {activeTab === 'description' && (
              <div data-aos="fade-up">
                <h2 className="text-2xl font-serif text-soil-dark mb-4">About {product.name}</h2>
                <p className="text-soil mb-6">{product.description}</p>
                <p className="text-soil">
                  The Monstera Deliciosa is native to the tropical forests of southern Mexico and is one of the most popular houseplants worldwide. Its iconic split leaves and ease of care have made it a favorite among plant enthusiasts and interior designers alike. As it matures, the leaves develop their characteristic holes (called fenestrations) which allow light to pass through and help the plant withstand strong winds in its natural habitat.
                </p>
                <p className="text-soil mt-4">
                  Not only is the Monstera visually stunning, but it's also an excellent air purifier, helping to improve indoor air quality by removing toxins. With proper care, your Monstera can grow quite large and become a stunning focal point in any room.
                </p>
              </div>
            )}
            
            {activeTab === 'care' && (
              <div data-aos="fade-up">
                <h2 className="text-2xl font-serif text-soil-dark mb-6">Care Instructions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-natural shadow-soft p-6">
                    <div className="flex items-start mb-4">
                      <div className="bg-leaf/10 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-leaf" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-soil-dark">Light</h3>
                        <p className="text-soil">{product.careInstructions.light}</p>
                      </div>
                    </div>
                    <div className="flex items-start mb-4">
                      <div className="bg-leaf/10 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-leaf" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-soil-dark">Water</h3>
                        <p className="text-soil">{product.careInstructions.water}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-leaf/10 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-leaf" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-soil-dark">Temperature</h3>
                        <p className="text-soil">{product.careInstructions.temperature}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-natural shadow-soft p-6">
                    <div className="flex items-start mb-4">
                      <div className="bg-leaf/10 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-leaf" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-soil-dark">Humidity</h3>
                        <p className="text-soil">{product.careInstructions.humidity}</p>
                      </div>
                    </div>
                    <div className="flex items-start mb-4">
                      <div className="bg-leaf/10 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-leaf" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-soil-dark">Soil</h3>
                        <p className="text-soil">{product.careInstructions.soil}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-leaf/10 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-leaf" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-soil-dark">Fertilizer</h3>
                        <p className="text-soil">{product.careInstructions.fertilizer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div data-aos="fade-up">
                <h2 className="text-2xl font-serif text-soil-dark mb-6">Customer Reviews</h2>
                <div className="space-y-6">
                  {/* Mock reviews */}
                  <div className="bg-white rounded-natural shadow-soft p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-500 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill={i < 4 ? "currentColor" : "none"} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={i < 4 ? 0 : 1} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-soil-dark">4.0</span>
                    </div>
                    <p className="text-soil mb-4">"Beautiful plant! Arrived in perfect condition and looks amazing in my living room."</p>
                    <p className="text-soil-dark font-medium">- Jane Doe</p>
                  </div>
                  
                  <div className="bg-white rounded-natural shadow-soft p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-500 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill={i < 5 ? "currentColor" : "none"} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={i < 5 ? 0 : 1} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-soil-dark">5.0</span>
                    </div>
                    <p className="text-soil mb-4">"Absolutely love my Monstera! It's thriving and has already grown new leaves."</p>
                    <p className="text-soil-dark font-medium">- John Smith</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
