import { useState } from "react";
import { Link } from "react-router-dom";

const OrdersPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  // Mock orders data
  const orders = [
    {
      id: "ORD-24601",
      date: "Feb 15, 2023",
      status: "Delivered",
      total: "$78.95",
      items: [
        { id: 1, name: "Monstera Deliciosa", quantity: 1, price: "$39.99" },
        { id: 2, name: "Terracotta Pot (Medium)", quantity: 2, price: "$19.49" }
      ]
    },
    {
      id: "ORD-24587",
      date: "Jan 29, 2023",
      status: "Processing",
      total: "$42.50",
      items: [
        { id: 3, name: "Fiddle Leaf Fig", quantity: 1, price: "$42.50" }
      ]
    },
    {
      id: "ORD-24498",
      date: "Dec 18, 2022",
      status: "Cancelled",
      total: "$65.25",
      items: [
        { id: 4, name: "Snake Plant", quantity: 2, price: "$24.99" },
        { id: 5, name: "Hanging Planter", quantity: 1, price: "$15.27" }
      ]
    }
  ];
  
  // Filter orders based on active tab
  const filteredOrders = orders.filter(order => {
    if (activeTab === "all") return true;
    return order.status.toLowerCase() === activeTab.toLowerCase();
  });

  return (
    <div className="space-y-6">
      {/* Tab navigation */}
      <div className="flex border-b border-moss-light">
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "all" 
              ? "text-leaf-dark border-b-2 border-leaf" 
              : "text-soil hover:text-soil-dark"
          }`}
          onClick={() => setActiveTab("all")}
        >
          All Orders
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "processing" 
              ? "text-leaf-dark border-b-2 border-leaf" 
              : "text-soil hover:text-soil-dark"
          }`}
          onClick={() => setActiveTab("processing")}
        >
          Processing
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "delivered" 
              ? "text-leaf-dark border-b-2 border-leaf" 
              : "text-soil hover:text-soil-dark"
          }`}
          onClick={() => setActiveTab("delivered")}
        >
          Delivered
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "cancelled" 
              ? "text-leaf-dark border-b-2 border-leaf" 
              : "text-soil hover:text-soil-dark"
          }`}
          onClick={() => setActiveTab("cancelled")}
        >
          Cancelled
        </button>
      </div>
      
      {/* Orders list */}
      <div className="space-y-4">
        {filteredOrders.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-soil mb-4">No orders found in this category.</p>
            <Link to="/shop" className="px-4 py-2 bg-leaf text-white rounded-natural hover:bg-leaf-dark transition-colors">
              Continue Shopping
            </Link>
          </div>
        ) : (
          filteredOrders.map(order => (
            <div key={order.id} className="bg-white border border-moss-light rounded-natural overflow-hidden" data-aos="fade-up">
              <div className="p-4 bg-cream-light flex flex-wrap justify-between items-center">
                <div>
                  <p className="text-sm text-soil">Order placed</p>
                  <p className="font-medium text-soil-dark">{order.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-soil">Order #</p>
                  <p className="font-medium text-soil-dark">{order.id}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-sm text-soil">Total</p>
                  <p className="font-medium text-soil-dark">{order.total}</p>
                </div>
                <div className="w-full md:w-auto mt-2 md:mt-0">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs ${
                    order.status === 'Delivered' ? 'bg-moss-light text-leaf-dark' : 
                    order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
              
              <div className="p-4 divide-y divide-moss-light">
                {order.items.map(item => (
                  <div key={item.id} className="py-3 flex justify-between items-center">
                    <div>
                      <p className="font-medium text-soil-dark">{item.name}</p>
                      <p className="text-sm text-soil">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-soil-dark">{item.price}</p>
                  </div>
                ))}
              </div>
              
              <div className="p-4 bg-cream-light border-t border-moss-light flex justify-between items-center">
                <Link 
                  to={`/dashboard/orders/${order.id}`} 
                  className="text-leaf hover:text-leaf-dark transition-colors"
                >
                  View Order Details
                </Link>
                
                {order.status === "Delivered" && (
                  <button className="px-3 py-1 bg-moss-light text-leaf-dark rounded-natural text-sm hover:bg-moss transition-colors">
                    Buy Again
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
