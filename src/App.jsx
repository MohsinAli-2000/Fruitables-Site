import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./Topbar";
<<<<<<< HEAD
import Navbar from "./Navbar";
import Shop from "./Pages/Shop";
import Home from "./Pages/Home";
import ShopDetails from "./Pages/ShopDetails";
=======
import Menu from "./Menu";

import BonusCard from "./BonusCard";

import Section7 from "./Section7";
import TextSection from "./TextSection";
import ReviewCard from "./ReviewCard";
import Acheivements from "./Acheivements";

>>>>>>> d03ba62456b92e8c47336ae64948dded1b1a2bfc
import Footer from "./Footer";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Testimonials from "./Pages/Testimonials";
import Notfound from "./Pages/NotFound";
import Contact from "./Pages/Contact";
function App() {
  return (
    <>
<<<<<<< HEAD
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
        <Footer />
      </Router>
=======
      <Topbar />
      <Navbar />
      <Header />
      <div className="flex flex-wrap md:flex-row relative sm:mt-96 mt-32  lg:mt-2 mx-16">
        <FacilityCard
          icon={faTruck}
          title="Free Shipping"
          description="Free on order over $300"
          className="md:w-1/4  w-full mb-4 md:mb-0"
        />
        <FacilityCard
          icon={faUserShield}
          title="Security Payment"
          description="100% Secure Payment"
          className="md:w-1/4 w-full mb-4 md:mb-0"
        />
        <FacilityCard
          icon={faArrowRightArrowLeft}
          title="30 day Return"
          description="30 day Money back guarantee"
          className="md:w-1/4  w-full mb-4 md:mb-0"
        />
        <FacilityCard
          icon={faPhone}
          title="24/7 Support"
          description="Support every time fast"
          className="md:w-1/4  w-full mb-4 md:mb-0"
        />
      </div>
      <Menu />

      <div className="flex flex-wrap justify-center items-center my-4 mx-16">
        <BonusCard />
        <BonusCard
          imageSrc="/brocoli.jpg"
          title="Exotic Vegetables"
          description="Discount 30$"
          divBg="bg-gray-200 w-full h-28"
        />
        <BonusCard
          imageSrc="/strawberry.jpg"
          title="Tasty Fruits"
          description="Free delivery"
          divBg="bg-green-600 w-full h-28"
        />
      </div>
      <h3 className="mx-16 text-3xl lg:text-4xl font-semibold opacity-70 break-words">
        Fresh Organic Vegetables
      </h3>

      <SimpleSlider />

      <Section7 />
      <TextSection />
      <div className="flex flex-wrap justify-center items-center mx-16 my-6">
        <ReviewCard />
        <ReviewCard imageSrc="/grapes.jpg" title="Grapes" />
        <ReviewCard imageSrc="/brocoli.jpg" title="Brocoli" />
        <ReviewCard imageSrc="/tomato.jpg" title="Tomato" />
        <ReviewCard imageSrc="/strawberry.jpg" title="Strawberry" />
        <ReviewCard imageSrc="/rasberries.jpg" title="Rasberries" />
      </div>
      <Acheivements />
      <h3 className="text-center text-3xl font-semibold text-green-600 my-4">
        Our Testimonial
      </h3>
      <h1 className="text-center text-5xl font-bold opacity-70 my-4">
        Our Client Saying!
      </h1>

      <ClientSlider />

      <Footer />
>>>>>>> d03ba62456b92e8c47336ae64948dded1b1a2bfc
    </>
  );
}

export default App;
