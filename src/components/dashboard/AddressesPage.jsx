import { useState } from "react";

const AddressesPage = () => {
  // Mock addresses data
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "Home",
      isDefault: true,
      name: "John Smith",
      street: "123 Garden Street",
      apartment: "Apt 4B",
      city: "Plant City",
      state: "PC",
      zip: "12345",
      country: "United States",
      phone: "555-123-4567"
    },
    {
      id: 2,
      type: "Office",
      isDefault: false,
      name: "John Smith",
      street: "456 Business Avenue",
      apartment: "Suite 200",
      city: "Commerce City",
      state: "CC",
      zip: "67890",
      country: "United States",
      phone: "555-987-6543"
    }
  ]);
  
  // State for form visibility and editing
  const [showForm, setShowForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [formData, setFormData] = useState({
    type: "Home",
    name: "",
    street: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
    phone: "",
    isDefault: false
  });
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };
  
  // Open form for new address
  const handleAddNewAddress = () => {
    setEditingAddress(null);
    setFormData({
      type: "Home",
      name: "",
      street: "",
      apartment: "",
      city: "",
      state: "",
      zip: "",
      country: "United States",
      phone: "",
      isDefault: false
    });
    setShowForm(true);
  };
  
  // Open form for editing
  const handleEditAddress = (address) => {
    setEditingAddress(address.id);
    setFormData({
      ...address
    });
    setShowForm(true);
  };
  
  // Delete address
  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter(address => address.id !== id));
  };
  
  // Set address as default
  const handleSetDefault = (id) => {
    setAddresses(addresses.map(address => ({
      ...address,
      isDefault: address.id === id
    })));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // If setting a new default address, update all other addresses
    if (formData.isDefault) {
      setAddresses(addresses.map(address => ({
        ...address,
        isDefault: false
      })));
    }
    
    if (editingAddress) {
      // Update existing address
      setAddresses(addresses.map(address => 
        address.id === editingAddress ? { ...formData, id: address.id } : address
      ));
    } else {
      // Add new address
      const newId = Math.max(0, ...addresses.map(a => a.id)) + 1;
      setAddresses([...addresses, { ...formData, id: newId }]);
    }
    
    // Reset form
    setShowForm(false);
    setEditingAddress(null);
  };

  return (
    <div>
      {/* Page header */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-soil">Manage your delivery addresses</p>
        <button 
          onClick={handleAddNewAddress}
          className="px-4 py-2 bg-leaf text-white rounded-natural hover:bg-leaf-dark transition-colors"
        >
          Add New Address
        </button>
      </div>
      
      {/* Address form */}
      {showForm && (
        <div className="bg-cream-light p-6 rounded-natural mb-8 border border-moss-light" data-aos="fade-down">
          <h3 className="font-serif text-xl text-soil-dark mb-4">
            {editingAddress ? 'Edit Address' : 'Add New Address'}
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="type" className="block text-sm text-soil mb-1">Address Type</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-moss-light rounded-natural focus:outline-none focus:ring-1 focus:ring-leaf"
                >
                  <option value="Home">Home</option>
                  <option value="Office">Office</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="name" className="block text-sm text-soil mb-1">Full Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-moss-light rounded-natural focus:outline-none focus:ring-1 focus:ring-leaf"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="street" className="block text-sm text-soil mb-1">Street Address</label>
              <input
                id="street"
                type="text"
                name="street"
                value={formData.street}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-moss-light rounded-natural focus:outline-none focus:ring-1 focus:ring-leaf"
                required
              />
            </div>
            
            <div>
              <label htmlFor="apartment" className="block text-sm text-soil mb-1">
                Apartment, Suite, etc. (optional)
              </label>
              <input
                id="apartment"
                type="text"
                name="apartment"
                value={formData.apartment}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-moss-light rounded-natural focus:outline-none focus:ring-1 focus:ring-leaf"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm text-soil mb-1">City</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-moss-light rounded-natural focus:outline-none focus:ring-1 focus:ring-leaf"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="state" className="block text-sm text-soil mb-1">State/Province</label>
                <input
                  id="state"
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-moss-light rounded-natural focus:outline-none focus:ring-1 focus:ring-leaf"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="zip" className="block text-sm text-soil mb-1">ZIP/Postal Code</label>
                <input
                  id="zip"
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-moss-light rounded-natural focus:outline-none focus:ring-1 focus:ring-leaf"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="country" className="block text-sm text-soil mb-1">Country</label>
                <input
                  id="country"
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-moss-light rounded-natural focus:outline-none focus:ring-1 focus:ring-leaf"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm text-soil mb-1">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-moss-light rounded-natural focus:outline-none focus:ring-1 focus:ring-leaf"
                  required
                />
              </div>
            </div>
            
            <div className="flex items-center">
              <input
                id="isDefault"
                type="checkbox"
                name="isDefault"
                checked={formData.isDefault}
                onChange={handleInputChange}
                className="h-4 w-4 text-leaf focus:ring-leaf border-moss-light rounded"
              />
              <label htmlFor="isDefault" className="ml-2 text-soil">
                Set as default address
              </label>
            </div>
            
            <div className="flex justify-end space-x-3 pt-2">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 border border-moss-light text-soil-dark rounded-natural hover:bg-cream transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-leaf text-white rounded-natural hover:bg-leaf-dark transition-colors"
              >
                {editingAddress ? 'Update Address' : 'Add Address'}
              </button>
            </div>
          </form>
        </div>
      )}
      
      {/* Address list */}
      <div className="space-y-4">
        {addresses.length === 0 ? (
          <div className="text-center py-12 bg-cream-light rounded-natural">
            <p className="text-soil mb-4">You don't have any saved addresses yet.</p>
            <button 
              onClick={handleAddNewAddress}
              className="px-4 py-2 bg-leaf text-white rounded-natural hover:bg-leaf-dark transition-colors"
            >
              Add Your First Address
            </button>
          </div>
        ) : (
          addresses.map(address => (
            <div 
              key={address.id} 
              className="border border-moss-light rounded-natural p-5 relative hover:shadow-hover transition-shadow"
              data-aos="fade-up"
            >
              {address.isDefault && (
                <span className="absolute top-3 right-3 bg-leaf-light text-leaf-dark text-xs px-2 py-1 rounded-full">
                  Default
                </span>
              )}
              
              <div className="flex justify-between items-start">
                <h3 className="font-serif text-lg text-soil-dark">{address.type}</h3>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleEditAddress(address)}
                    className="text-leaf hover:text-leaf-dark transition-colors"
                  >
                    Edit
                  </button>
                  {!address.isDefault && (
                    <>
                      <span className="text-soil-light">|</span>
                      <button 
                        onClick={() => handleDeleteAddress(address.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
              
              <div className="mt-2 space-y-1 text-soil">
                <p className="font-medium text-soil-dark">{address.name}</p>
                <p>{address.street}</p>
                {address.apartment && <p>{address.apartment}</p>}
                <p>{address.city}, {address.state} {address.zip}</p>
                <p>{address.country}</p>
                <p className="mt-2">{address.phone}</p>
              </div>
              
              {!address.isDefault && (
                <button 
                  onClick={() => handleSetDefault(address.id)}
                  className="mt-4 px-3 py-1 border border-moss text-soil-dark rounded-full text-sm hover:bg-moss-light transition-colors"
                >
                  Set as Default
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AddressesPage;
