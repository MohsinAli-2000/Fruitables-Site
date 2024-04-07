import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Shop from "./Pages/Shop";
import Home from "./Pages/Home";
import ShopDetails from "./Pages/ShopDetails";
import Footer from "./Footer";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Testimonials from "./Pages/Testimonials";
import Notfound from "./Pages/NotFound";
import Contact from "./Pages/Contact";
import GoTop from "./GoTop";

function App() {
  return (
    <>
      <Router>
        <Topbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop-details" element={<ShopDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/404-page" element={<Notfound />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <GoTop />
        <Footer />
      </Router>
    </>
  );
}

export default App;
