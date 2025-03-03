import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from "react-router-dom";

const RootLayout = () => {
 

  return (
    <div className="flex flex-col min-h-screen bg-cream-light">
      {/* Header */}
      <Header/>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer/>

    </div>
  );
};

export default RootLayout;
