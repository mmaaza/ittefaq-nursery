import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import category images (replace with your actual images)
import indoorImage from '../assets/indoor-plant.jpg';
import outdoorImage from '../assets/outdoor-plant.jpg';
import succulentImage from '../assets/succulent.jpg';
import tropicalImage from '../assets/plant-placeholder.png';
import rareImage from '../assets/rare-plant.jpg';
import accessoriesImage from '../assets/plant-placeholder.png';

const Categories = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Category data
  const categories = [
    {
      id: 'indoor',
      name: 'Indoor Plants',
      image: indoorImage,
      description: 'Perfect plants for beautifying your home, office, or any indoor space. From air-purifying varieties to low-light tolerant species.',
      items: 42,
      color: 'bg-leaf-light',
      features: ['Low Maintenance', 'Air Purifying', 'Shade Tolerant']
    },
    {
      id: 'outdoor',
      name: 'Outdoor Plants',
      image: outdoorImage,
      description: 'Hardy plants that thrive in your garden, patio, or balcony. Choose from flowering plants, shrubs, and more.',
      items: 38,
      color: 'bg-moss',
      features: ['Sun Loving', 'Weather Resistant', 'Seasonal Blooms']
    },
    {
      id: 'succulent',
      name: 'Succulents & Cacti',
      image: succulentImage,
      description: 'Water-storing plants in beautiful shapes and sizes. Perfect for beginners or busy plant parents.',
      items: 29,
      color: 'bg-terracotta-light',
      features: ['Drought Resistant', 'Minimal Care', 'Unique Shapes']
    },
    {
      id: 'tropical',
      name: 'Tropical Plants',
      image: tropicalImage,
      description: 'Lush, vibrant plants that create a tropical oasis in your home. Statement pieces with beautiful foliage.',
      items: 24,
      color: 'bg-leaf',
      features: ['Humidity Loving', 'Bold Foliage', 'Colorful Varieties']
    },
    {
      id: 'rare',
      name: 'Rare Finds',
      image: rareImage,
      description: 'Unique and hard-to-find specimens for the discerning plant collector. Limited availability.',
      items: 15,
      color: 'bg-soil-light',
      features: ['Collector Items', 'Limited Stock', 'Conversation Pieces']
    },
    {
      id: 'accessories',
      name: 'Plant Accessories',
      image: accessoriesImage,
      description: 'Everything your plants need: decorative pots, plant food, tools, and care essentials.',
      items: 33,
      color: 'bg-moss-light',
      features: ['Decorative Pots', 'Care Tools', 'Plant Food']
    },
  ];

  return (
    <div className="bg-cream-light min-h-screen">
      {/* Categories Header */}
      <div className="bg-leaf-pattern bg-cover py-16 relative">
        <div className="absolute inset-0 bg-soil-dark bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 
            className="text-4xl md:text-5xl font-serif text-cream-light text-center mb-4"
            data-aos="fade-up"
          >
            Plant Categories
          </h1>
          <p 
            className="text-center text-cream-light max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Browse our collections organized by plant type to find exactly what you're looking for.
            Each category features carefully selected plants to suit different environments and care levels.
          </p>
        </div>
      </div>

      {/* Categories Main Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group"
            >
              <Link to={`/category/${category.id}`} className="block">
                <div className="bg-white rounded-natural overflow-hidden shadow-soft hover:shadow-hover transition-all h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute top-3 right-3 ${category.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      {category.items} products
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-soil-dark to-transparent opacity-60"></div>
                    <h2 className="absolute bottom-4 left-4 text-2xl font-serif text-cream-light z-10 transition-transform group-hover:translate-x-2">
                      {category.name}
                      <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-moss-light transition-all duration-300"></div>
                    </h2>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-soil mb-4">{category.description}</p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.features.map(feature => (
                        <span 
                          key={feature} 
                          className={`${category.color} bg-opacity-20 text-soil-dark text-xs px-3 py-1 rounded-full`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-soil">{category.items} items</span>
                      <span className="text-leaf-dark group-hover:text-leaf flex items-center font-semibold transition-colors">
                        Explore
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Plant Care Levels Section */}
      <div className="bg-moss-light py-16">
        <div className="container mx-auto px-4">
          <h2 
            className="text-3xl font-serif text-soil-dark text-center mb-12"
            data-aos="fade-up"
          >
            Find Plants by Care Level
          </h2>
          
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Beginner Friendly */}
            <div className="bg-cream rounded-natural p-6 text-center shadow-soft hover:shadow-hover transition-all duration-300">
              <div className="bg-moss-dark h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cream-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-soil-dark mb-2">Beginner Friendly</h3>
              <p className="text-soil mb-4">Low-maintenance plants that are perfect for new plant parents. Resilient and forgiving.</p>
              <Link 
                to="/care-level/beginner" 
                className="text-leaf-dark hover:text-leaf font-semibold inline-flex items-center transition-colors"
              >
                View Collection
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            {/* Moderate Care */}
            <div className="bg-cream rounded-natural p-6 text-center shadow-soft hover:shadow-hover transition-all duration-300">
              <div className="bg-moss h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cream-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-soil-dark mb-2">Moderate Care</h3>
              <p className="text-soil mb-4">Plants that need a bit more attention but reward you with beautiful growth and displays.</p>
              <Link 
                to="/care-level/moderate" 
                className="text-leaf-dark hover:text-leaf font-semibold inline-flex items-center transition-colors"
              >
                View Collection
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            {/* Expert Level */}
            <div className="bg-cream rounded-natural p-6 text-center shadow-soft hover:shadow-hover transition-all duration-300">
              <div className="bg-leaf-dark h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cream-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-soil-dark mb-2">Expert Level</h3>
              <p className="text-soil mb-4">For experienced plant parents. These beauties require specific conditions and regular care.</p>
              <Link 
                to="/care-level/expert" 
                className="text-leaf-dark hover:text-leaf font-semibold inline-flex items-center transition-colors"
              >
                View Collection
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Environment-based Categories */}
      <div className="container mx-auto px-4 py-16">
        <h2 
          className="text-3xl font-serif text-soil-dark text-center mb-16"
          data-aos="fade-up"
        >
          Shop by Environment
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Low Light Areas */}
          <div 
            className="bg-moss-light/30 rounded-natural overflow-hidden shadow-soft group"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-moss-dark bg-opacity-20">
                  {/* Add image here */}
                </div>
              </div>
              <div className="p-6 md:w-1/2">
                <h3 className="text-xl font-serif text-soil-dark mb-3">Low Light Areas</h3>
                <p className="text-soil mb-4">Perfect plants for rooms with minimal natural sunlight, north-facing windows, or spaces away from windows.</p>
                <Link 
                  to="/environment/low-light" 
                  className="inline-flex items-center text-leaf-dark font-semibold group-hover:text-leaf transition-colors"
                >
                  Shop Low Light Plants
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Bright Spaces */}
          <div 
            className="bg-moss-light/30 rounded-natural overflow-hidden shadow-soft group"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-moss-dark bg-opacity-20">
                  {/* Add image here */}
                </div>
              </div>
              <div className="p-6 md:w-1/2">
                <h3 className="text-xl font-serif text-soil-dark mb-3">Bright Spaces</h3>
                <p className="text-soil mb-4">Sun-loving plants that thrive in rooms with plenty of natural light and south or west facing windows.</p>
                <Link 
                  to="/environment/bright-light" 
                  className="inline-flex items-center text-leaf-dark font-semibold group-hover:text-leaf transition-colors"
                >
                  Shop Bright Light Plants
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Pet-Friendly */}
          <div 
            className="bg-moss-light/30 rounded-natural overflow-hidden shadow-soft group"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-moss-dark bg-opacity-20">
                  {/* Add image here */}
                </div>
              </div>
              <div className="p-6 md:w-1/2">
                <h3 className="text-xl font-serif text-soil-dark mb-3">Pet-Friendly Plants</h3>
                <p className="text-soil mb-4">Non-toxic plant options that are safe for homes with cats, dogs, and other curious pets.</p>
                <Link 
                  to="/collection/pet-friendly" 
                  className="inline-flex items-center text-leaf-dark font-semibold group-hover:text-leaf transition-colors"
                >
                  Shop Pet-Friendly Plants
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Air-Purifying */}
          <div 
            className="bg-moss-light/30 rounded-natural overflow-hidden shadow-soft group"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-moss-dark bg-opacity-20">
                  {/* Add image here */}
                </div>
              </div>
              <div className="p-6 md:w-1/2">
                <h3 className="text-xl font-serif text-soil-dark mb-3">Air-Purifying Plants</h3>
                <p className="text-soil mb-4">Plants known for removing toxins and improving air quality in your home or office.</p>
                <Link 
                  to="/collection/air-purifying" 
                  className="inline-flex items-center text-leaf-dark font-semibold group-hover:text-leaf transition-colors"
                >
                  Shop Air-Purifying Plants
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Plant Care & Support CTA */}
      <div className="bg-cream py-16">
        <div className="container mx-auto px-4">
          <div 
            className="bg-leaf bg-opacity-10 rounded-natural p-8 md:p-12 relative overflow-hidden max-w-5xl mx-auto"
            data-aos="fade-up"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-moss-light rounded-full opacity-50 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-moss-light rounded-full opacity-50 translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-serif text-soil-dark mb-4 text-center">Need Help Choosing the Right Plants?</h2>
              <p className="text-center text-soil max-w-2xl mx-auto mb-8">
                Our plant experts are here to help you select the perfect plants for your space and lifestyle. 
                Get personalized recommendations and care advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/plant-quiz" 
                  className="bg-leaf text-white py-3 px-6 rounded-natural hover:bg-leaf-dark transition-colors text-center"
                >
                  Take Plant Quiz
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-cream text-soil-dark py-3 px-6 rounded-natural hover:bg-cream-dark transition-colors text-center"
                >
                  Contact Our Experts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
