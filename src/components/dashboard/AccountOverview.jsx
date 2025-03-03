import { Link } from "react-router-dom";

const AccountOverview = () => {
  // Mock data
  const user = {
    name: "John Smith",
    email: "john.smith@example.com",
    memberSince: "January 2023",
    rewardPoints: 120
  };
  
  const recentOrders = [
    {
      id: "ORD-24601",
      date: "Feb 15, 2023",
      status: "Delivered",
      total: "$78.95",
      items: 3
    },
    {
      id: "ORD-24587",
      date: "Jan 29, 2023",
      status: "Processing",
      total: "$42.50",
      items: 1
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome section */}
      <div className="bg-moss-light p-6 rounded-natural" data-aos="fade-up">
        <h2 className="font-serif text-xl text-soil-dark mb-2">Welcome back, {user.name}!</h2>
        <p className="text-soil mb-4">Member since {user.memberSince}</p>
        <div className="flex items-center">
          <div className="bg-leaf text-white px-3 py-1 rounded-full text-sm">
            {user.rewardPoints} Reward Points
          </div>
          <Link to="/dashboard/rewards" className="ml-3 text-leaf hover:text-leaf-dark transition-colors">
            View Benefits
          </Link>
        </div>
      </div>
      
      {/* Quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-aos="fade-up" data-aos-delay="100">
        <div className="bg-cream p-4 rounded-natural text-center hover:shadow-hover transition-shadow">
          <div className="w-12 h-12 bg-moss-light rounded-full flex items-center justify-center mx-auto mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-leaf" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h3 className="font-serif text-lg text-soil-dark mb-1">Orders</h3>
          <p className="text-2xl font-bold text-leaf">5</p>
          <Link to="/dashboard/orders" className="text-sm text-soil hover:text-soil-dark transition-colors">
            View All Orders
          </Link>
        </div>
        
        <div className="bg-cream p-4 rounded-natural text-center hover:shadow-hover transition-shadow">
          <div className="w-12 h-12 bg-moss-light rounded-full flex items-center justify-center mx-auto mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-leaf" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="font-serif text-lg text-soil-dark mb-1">Wishlist</h3>
          <p className="text-2xl font-bold text-leaf">8</p>
          <Link to="/dashboard/wishlist" className="text-sm text-soil hover:text-soil-dark transition-colors">
            View Wishlist
          </Link>
        </div>
        
        <div className="bg-cream p-4 rounded-natural text-center hover:shadow-hover transition-shadow">
          <div className="w-12 h-12 bg-moss-light rounded-full flex items-center justify-center mx-auto mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-leaf" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <h3 className="font-serif text-lg text-soil-dark mb-1">Saved Cards</h3>
          <p className="text-2xl font-bold text-leaf">2</p>
          <Link to="/dashboard/payment-methods" className="text-sm text-soil hover:text-soil-dark transition-colors">
            Manage Cards
          </Link>
        </div>
      </div>
      
      {/* Recent orders */}
      <div className="bg-white border border-moss-light rounded-natural" data-aos="fade-up" data-aos-delay="200">
        <div className="flex justify-between items-center p-4 border-b border-moss-light">
          <h3 className="font-serif text-lg text-soil-dark">Recent Orders</h3>
          <Link to="/dashboard/orders" className="text-leaf hover:text-leaf-dark transition-colors">
            View All
          </Link>
        </div>
        
        <div className="divide-y divide-moss-light">
          {recentOrders.map(order => (
            <div key={order.id} className="p-4 hover:bg-cream-light transition-colors">
              <div className="flex flex-wrap justify-between items-center">
                <div>
                  <h4 className="font-semibold text-soil-dark mb-1">{order.id}</h4>
                  <p className="text-sm text-soil">{order.date}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                    order.status === 'Delivered' ? 'bg-moss-light text-leaf-dark' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <p className="text-soil">
                  <span className="font-semibold">{order.items}</span> items
                </p>
                <div className="flex items-center">
                  <span className="font-semibold text-soil-dark mr-4">{order.total}</span>
                  <Link to={`/dashboard/orders/${order.id}`} className="text-leaf hover:text-leaf-dark transition-colors">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
          
          {recentOrders.length === 0 && (
            <div className="p-6 text-center text-soil">
              <p>No recent orders found.</p>
              <Link to="/shop" className="mt-2 inline-block px-4 py-2 bg-leaf text-white rounded-natural hover:bg-leaf-dark transition-colors">
                Start Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
      
      {/* Saved addresses preview */}
      <div className="bg-white border border-moss-light rounded-natural p-4" data-aos="fade-up" data-aos-delay="300">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-serif text-lg text-soil-dark">Default Address</h3>
          <Link to="/dashboard/addresses" className="text-leaf hover:text-leaf-dark transition-colors">
            Manage Addresses
          </Link>
        </div>
        
        <div className="bg-cream-light p-4 rounded-natural">
          <p className="font-semibold text-soil-dark">Home</p>
          <address className="text-soil not-italic">
            123 Garden Street<br />
            Apt 4B<br />
            Plant City, PC 12345<br />
            United States
          </address>
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;
