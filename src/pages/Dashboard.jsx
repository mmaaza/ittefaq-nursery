import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import AOS from "aos";
import "aos/dist/aos.css";

const Dashboard = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
    
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location.pathname]);
  
  // Get current page title based on path
  const getPageTitle = () => {
    const path = location.pathname.split('/').pop();
    switch(path) {
      case 'dashboard':
        return 'Account Overview';
      case 'orders':
        return 'My Orders';
      case 'wishlist':
        return 'My Wishlist';
      case 'addresses':
        return 'My Addresses';
      case 'settings':
        return 'Account Settings';
      default:
        return 'Account Overview';
    }
  };

  return (
    <div className="bg-cream-light min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Mobile menu toggle */}
        <div className="lg:hidden flex justify-between items-center mb-6">
          <h1 className="font-serif text-2xl text-soil-dark">{getPageTitle()}</h1>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="px-4 py-2 bg-moss-light text-soil-dark rounded-natural"
          >
            {mobileMenuOpen ? "Close Menu" : "Menu"}
          </button>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside 
            className={`lg:w-1/4 lg:block transition-all duration-300 ${
              mobileMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <DashboardSidebar />
          </aside>
          
          {/* Main content */}
          <main 
            className="flex-1 bg-white rounded-natural shadow-soft p-6"
            data-aos="fade-up"
          >
            <h1 className="hidden lg:block font-serif text-2xl text-soil-dark mb-6">
              {getPageTitle()}
            </h1>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
