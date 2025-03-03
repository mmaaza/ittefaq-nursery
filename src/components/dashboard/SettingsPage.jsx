import { useState } from "react";

const SettingsPage = () => {
    // Mock user data
    const [userInfo, setUserInfo] = useState({
        firstName: "John",
        lastName: "Smith",
        email: "john.smith@example.com",
        phone: "555-123-4567",
        notifications: {
            orderUpdates: true,
            promotions: false,
            newsletter: true,
            stockAlerts: true,
        },
    });

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    // Handle notification toggle
    const handleNotificationToggle = (e) => {
        const { name, checked } = e.target;
        setUserInfo((prevInfo) => ({
            ...prevInfo,
            notifications: {
                ...prevInfo.notifications,
                [name]: checked,
            },
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Process form submission (e.g., send data to server)
        console.log("User info updated:", userInfo);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label
                            htmlFor="firstName"
                            className="block text-soil-dark mb-2"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={userInfo.firstName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-moss-light rounded-natural focus:outline-none focus:ring-2 focus:ring-leaf"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="lastName"
                            className="block text-soil-dark mb-2"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={userInfo.lastName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-moss-light rounded-natural focus:outline-none focus:ring-2 focus:ring-leaf"
                        />
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="block text-soil-dark mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={userInfo.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-moss-light rounded-natural focus:outline-none focus:ring-2 focus:ring-leaf"
                    />
                </div>
                <div>
                    <label
                        htmlFor="phone"
                        className="block text-soil-dark mb-2"
                    >
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={userInfo.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-moss-light rounded-natural focus:outline-none focus:ring-2 focus:ring-leaf"
                    />
                </div>
                <div>
                    <h3 className="font-serif text-lg text-soil-dark mb-4">
                        Notifications
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="orderUpdates"
                                name="orderUpdates"
                                checked={userInfo.notifications.orderUpdates}
                                onChange={handleNotificationToggle}
                                className="mr-2"
                            />
                            <label
                                htmlFor="orderUpdates"
                                className="text-soil-dark"
                            >
                                Order Updates
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="promotions"
                                name="promotions"
                                checked={userInfo.notifications.promotions}
                                onChange={handleNotificationToggle}
                                className="mr-2"
                            />
                            <label
                                htmlFor="promotions"
                                className="text-soil-dark"
                            >
                                Promotions
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="newsletter"
                                name="newsletter"
                                checked={userInfo.notifications.newsletter}
                                onChange={handleNotificationToggle}
                                className="mr-2"
                            />
                            <label
                                htmlFor="newsletter"
                                className="text-soil-dark"
                            >
                                Newsletter
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="stockAlerts"
                                name="stockAlerts"
                                checked={userInfo.notifications.stockAlerts}
                                onChange={handleNotificationToggle}
                                className="mr-2"
                            />
                            <label
                                htmlFor="stockAlerts"
                                className="text-soil-dark"
                            >
                                Stock Alerts
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="px-6 py-3 bg-leaf text-white rounded-natural hover:bg-leaf-dark transition-colors"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SettingsPage;
