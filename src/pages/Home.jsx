import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import product images
import heroImage from '../assets/hero-plants.jpg';
import indoorPlant from '../assets/indoor-plant.jpg';
import outdoorPlant from '../assets/outdoor-plant.jpg';
import succulentPlant from '../assets/succulent.jpg';
import rarePlant from '../assets/rare-plant.jpg';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: false,
    });

    // Mark as loaded for entrance animations
    setTimeout(() => setIsLoaded(true), 100);

    // Refresh AOS on window resize
    window.addEventListener('resize', () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <div className="bg-cream-light min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${isLoaded ? 'scale-100 blur-0' : 'scale-110 blur-md'}`} 
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-leaf-dark bg-opacity-30"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl" data-aos="fade-right">
            <h1 className="text-5xl md:text-6xl font-serif text-cream-light font-bold mb-6">
              Bring Nature <br/><span className="text-moss-light">Into Your Home</span>
            </h1>
            <p className="text-cream-light text-xl mb-8">
              Discover our curated collection of indoor and outdoor plants to transform your space.
            </p>
            <Link to="/shop" className="inline-block bg-leaf text-cream-light text-lg font-semibold py-3 px-8 rounded-natural transition-transform hover:translate-y-[-4px] hover:shadow-hover">
              Shop Plants
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-cream-light to-transparent"></div>
      </section>

      {/* Bento Grid Categories Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-serif text-soil-dark text-center mb-16" data-aos="fade-up">
          Explore Our <span className="text-leaf-dark">Plant Collections</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large featured tile */}
          <div 
            className="lg:col-span-2 lg:row-span-2 rounded-natural overflow-hidden shadow-soft transition-all duration-300 hover:shadow-hover group relative"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="aspect-[16/9] lg:aspect-square bg-cover bg-center" style={{ backgroundImage: `url(${indoorPlant})` }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-soil-dark to-transparent opacity-60 transition-opacity group-hover:opacity-50"></div>
            <div className="absolute bottom-0 left-0 p-6 text-cream-light">
              <h3 className="text-3xl font-serif mb-2 transform transition-transform group-hover:translate-x-2">Indoor Plants</h3>
              <p className="max-w-md mb-4 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">Perfect for adding life and color to any room in your home.</p>
              <Link to="/category/indoor" className="text-moss-light font-semibold flex items-center gap-2">
                Explore Collection
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Outdoor plants tile */}
          <div 
            className="rounded-natural overflow-hidden shadow-soft transition-all duration-300 hover:shadow-hover group relative"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${outdoorPlant})` }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-soil-dark to-transparent opacity-60 transition-opacity group-hover:opacity-50"></div>
            <div className="absolute bottom-0 left-0 p-6 text-cream-light">
              <h3 className="text-2xl font-serif mb-1 transform transition-transform group-hover:translate-x-1">Outdoor Plants</h3>
              <Link to="/category/outdoor" className="text-moss-light font-semibold flex items-center gap-1">
                Explore
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Succulents tile */}
          <div 
            className="rounded-natural overflow-hidden shadow-soft transition-all duration-300 hover:shadow-hover group relative"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${succulentPlant})` }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-soil-dark to-transparent opacity-60 transition-opacity group-hover:opacity-50"></div>
            <div className="absolute bottom-0 left-0 p-6 text-cream-light">
              <h3 className="text-2xl font-serif mb-1 transform transition-transform group-hover:translate-x-1">Succulents</h3>
              <Link to="/category/succulents" className="text-moss-light font-semibold flex items-center gap-1">
                Explore
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Rare plants tile */}
          <div 
            className="rounded-natural overflow-hidden shadow-soft transition-all duration-300 hover:shadow-hover group relative"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${rarePlant})` }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-soil-dark to-transparent opacity-60 transition-opacity group-hover:opacity-50"></div>
            <div className="absolute bottom-0 left-0 p-6 text-cream-light">
              <h3 className="text-2xl font-serif mb-1 transform transition-transform group-hover:translate-x-1">Rare Finds</h3>
              <Link to="/category/rare" className="text-moss-light font-semibold flex items-center gap-1">
                Explore
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-dotted bg-dotted-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Prop 1 */}
            <div 
              className="bg-cream-light rounded-natural p-8 shadow-soft hover:shadow-hover transition-all text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-moss-light h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-leaf-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-soil-dark mb-2">Expertly Grown</h3>
              <p className="text-soil">Our plants are nurtured by expert horticulturists in ideal conditions.</p>
            </div>

            {/* Value Prop 2 */}
            <div 
              className="bg-cream-light rounded-natural p-8 shadow-soft hover:shadow-hover transition-all text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-moss-light h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-leaf-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-soil-dark mb-2">Carefully Shipped</h3>
              <p className="text-soil">Secure packaging ensures your plants arrive healthy and happy.</p>
            </div>

            {/* Value Prop 3 */}
            <div 
              className="bg-cream-light rounded-natural p-8 shadow-soft hover:shadow-hover transition-all text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-moss-light h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-leaf-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-soil-dark mb-2">Detailed Care Guides</h3>
              <p className="text-soil">Every plant comes with personalized care instructions for long-term success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Plants Section */}
      <section className="py-20 bg-cream-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-soil-dark mb-3 text-center" data-aos="fade-up">
            Trending Plants
          </h2>
          <p className="text-center text-soil mb-12 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Our most popular plants that customers are loving right now
          </p>

          {/* Plant cards - can be connected to actual product data */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i}
                className="bg-white rounded-natural overflow-hidden shadow-soft group hover:shadow-hover transition-all"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="relative overflow-hidden">
                  <div className="h-64 bg-moss-light"></div>
                  <div className="absolute top-3 right-3 bg-leaf text-white text-xs font-bold px-3 py-1 rounded-full">
                    Best Seller
                  </div>
                  <button className="absolute bottom-0 w-full bg-leaf-dark text-white py-2 transform translate-y-full group-hover:translate-y-0 transition-transform">
                    Add to Cart
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-soil-dark text-lg">Monstera Deliciosa</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-leaf-dark font-bold">$39.99</span>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12" data-aos="fade-up">
            <Link to="/shop" className="inline-block bg-leaf text-cream-light text-lg font-semibold py-3 px-8 rounded-natural transition-transform hover:translate-y-[-4px] hover:shadow-hover">
              View All Plants
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-leaf-pattern bg-cover relative">
        <div className="absolute inset-0 bg-soil-dark bg-opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif text-cream-light mb-12 text-center" data-aos="fade-up">
            What Our Customers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div 
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-6 rounded-natural border border-cream-light border-opacity-20"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-moss-light mr-4"></div>
                <div>
                  <h4 className="text-cream-light font-serif">Sarah T.</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-cream-light italic">
                "My plants arrived in perfect condition! The packaging was eco-friendly and the care guide has been so helpful."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div 
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-6 rounded-natural border border-cream-light border-opacity-20"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-moss-light mr-4"></div>
                <div>
                  <h4 className="text-cream-light font-serif">Michael R.</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-cream-light italic">
                "I've ordered from many plant shops online, but this nursery's quality is unmatched. My fiddle leaf fig is thriving!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div 
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-6 rounded-natural border border-cream-light border-opacity-20"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-moss-light mr-4"></div>
                <div>
                  <h4 className="text-cream-light font-serif">Jessica K.</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-cream-light italic">
                "The customer service was amazing! When I had questions about care, they responded quickly with expert advice."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-cream-light">
        <div className="container mx-auto px-4">
          <div 
            className="bg-moss-light rounded-leaf p-8 md:p-12 shadow-soft max-w-4xl mx-auto relative overflow-hidden"
            data-aos="fade-up"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-leaf rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-leaf rounded-full opacity-20 translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif text-soil-dark mb-4 text-center">
                Join Our Green Community
              </h2>
              <p className="text-center text-soil-dark mb-8 max-w-md mx-auto">
                Subscribe to our newsletter for plant care tips, special offers, and first access to new arrivals.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-3 rounded-natural focus:ring-2 focus:ring-leaf focus:outline-none"
                />
                <button 
                  type="submit"
                  className="bg-leaf hover:bg-leaf-dark text-white font-semibold py-3 px-6 rounded-natural transition-colors"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-center text-soil text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
