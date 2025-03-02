import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import images (replace with your actual images)
import aboutHero from '../assets/outdoor-plant.jpg';
import teamMember1 from '../assets/plant-placeholder.png';
import teamMember2 from '../assets/plant-placeholder.png';
import teamMember3 from '../assets/plant-placeholder.png';
import greenhouse from '../assets/plant-placeholder.png';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-cream-light min-h-screen">
      {/* Hero Section */}
      <div className="bg-cover bg-center relative h-[70vh]" style={{ backgroundImage: `url(${aboutHero})` }}>
        <div className="absolute inset-0 bg-soil-dark bg-opacity-50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-cream-light font-bold mb-6">
              Our Passion for Plants
            </h1>
            <p className="text-cream-light text-xl mb-8">
              Bringing nature's beauty into your homes since 2010.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-cream-light to-transparent"></div>
      </div>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-serif text-soil-dark mb-6">Our Story</h2>
            <p className="text-soil mb-4 leading-relaxed">
              Ittefaq Nursery began with a simple love for plants and a desire to share that passion with others. Founded in 2010 by gardening enthusiasts Sarah and Michael Thompson, our nursery started as a small greenhouse in the countryside with just a few dozen plant varieties.
            </p>
            <p className="text-soil mb-4 leading-relaxed">
              Over the years, we've grown into a thriving plant haven, offering hundreds of species from around the world. Our mission has remained the same: to connect people with the perfect plants for their spaces and provide the knowledge needed to help them thrive.
            </p>
            <p className="text-soil leading-relaxed">
              Today, our team of horticulturists and plant lovers continues to source the healthiest, most beautiful plants while providing exceptional customer service and expert guidance to plant parents of all experience levels.
            </p>
          </div>
          <div className="rounded-natural overflow-hidden shadow-soft" data-aos="fade-left">
            <img 
              src={greenhouse} 
              alt="Our Greenhouse" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-moss-light/20 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-soil-dark text-center mb-12" data-aos="fade-up">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div 
              className="bg-cream rounded-natural p-6 shadow-soft text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-moss/30 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-leaf-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-soil-dark mb-3">Quality</h3>
              <p className="text-soil">
                We prioritize the health and vitality of every plant in our care, ensuring you receive only the best specimens for your home or garden.
              </p>
            </div>
            
            {/* Value 2 */}
            <div 
              className="bg-cream rounded-natural p-6 shadow-soft text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-moss/30 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-leaf-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-soil-dark mb-3">Education</h3>
              <p className="text-soil">
                We believe in empowering plant owners with knowledge, offering detailed care guides and ongoing support for all your plant needs.
              </p>
            </div>
            
            {/* Value 3 */}
            <div 
              className="bg-cream rounded-natural p-6 shadow-soft text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-moss/30 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-leaf-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-soil-dark mb-3">Sustainability</h3>
              <p className="text-soil">
                From eco-friendly packaging to responsible growing practices, we're committed to minimizing our environmental footprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-serif text-soil-dark text-center mb-12" data-aos="fade-up">
          Meet Our Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Team Member 1 */}
          <div 
            className="bg-white rounded-natural overflow-hidden shadow-soft text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="h-64 overflow-hidden">
              <img 
                src={teamMember1} 
                alt="Sarah Thompson" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif text-soil-dark mb-1">Sarah Thompson</h3>
              <p className="text-leaf-dark font-medium mb-3">Co-Founder & Plant Specialist</p>
              <p className="text-soil mb-4">
                With over 20 years of experience in horticulture, Sarah leads our plant selection and care education programs.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-soil hover:text-leaf-dark transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#" className="text-soil hover:text-leaf-dark transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="#" className="text-soil hover:text-leaf-dark transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Team Member 2 */}
          <div 
            className="bg-white rounded-natural overflow-hidden shadow-soft text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="h-64 overflow-hidden">
              <img 
                src={teamMember2} 
                alt="Michael Thompson" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif text-soil-dark mb-1">Michael Thompson</h3>
              <p className="text-leaf-dark font-medium mb-3">Co-Founder & Operations</p>
              <p className="text-soil mb-4">
                Michael ensures our nursery runs smoothly, overseeing quality control and sustainable practices across all operations.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-soil hover:text-leaf-dark transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#" className="text-soil hover:text-leaf-dark transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="#" className="text-soil hover:text-leaf-dark transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Team Member 3 */}
          <div 
            className="bg-white rounded-natural overflow-hidden shadow-soft text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="h-64 overflow-hidden">
              <img 
                src={teamMember3} 
                alt="Elisa Rodriguez" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif text-soil-dark mb-1">Elisa Rodriguez</h3>
              <p className="text-leaf-dark font-medium mb-3">Head Horticulturist</p>
              <p className="text-soil mb-4">
                Elisa brings her botanical expertise to curate our plant selection and develop care protocols for optimal plant health.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-soil hover:text-leaf-dark transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#" className="text-soil hover:text-leaf-dark transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="#" className="text-soil hover:text-leaf-dark transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-leaf-pattern bg-cover relative py-16">
        <div className="absolute inset-0 bg-soil-dark bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-serif text-cream-light mb-6">Ready to Start Your Plant Journey?</h2>
          <p className="text-cream-light max-w-2xl mx-auto mb-8">
            Whether you're a seasoned plant parent or just beginning, we're here to help you find the perfect green companions for your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/shop" 
              className="bg-leaf hover:bg-leaf-dark text-white py-3 px-8 rounded-natural transition-colors text-center"
            >
              Shop Our Plants
            </Link>
            <Link 
              to="/care-guides" 
              className="bg-cream text-soil-dark py-3 px-8 rounded-natural hover:bg-cream-dark transition-colors text-center"
            >
              Read Care Guides
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
