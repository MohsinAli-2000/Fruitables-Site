import Navbar from "./Navbar";
import Header from "./Header";
import FacilityCard from "./FacilityCard";
import {
  faArrowRightArrowLeft,
  faPhone,
  faTruck,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import Topbar from "./Topbar";
import Menu from "./Menu";
import FruitCard from "./FruitCard";
import BonusCard from "./BonusCard";
import VegetableCard from "./VegetableCard";
import Section7 from "./Section7";
import TextSection from "./TextSection";
import ReviewCard from "./ReviewCard";
import Acheivements from "./Acheivements";
import ClientReview from "./ClientReview";
import Footer from "./Footer";
function App() {
  return (
    <>
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
      <div className="flex flex-wrap mx-16 justify-center">
        <FruitCard />
        <FruitCard imageSrc="/grapes.jpg" title="Grapes" />
        <FruitCard imageSrc="/strawberry.jpg" title="Strawberry" />
        <FruitCard imageSrc="/apricots.jpg" title="Apricots" />
        <FruitCard imageSrc="/banana.jpg" title="Banana" />
        <FruitCard imageSrc="/orange.jpg" title="Orange" />
        <FruitCard imageSrc="/grapes.jpg" title="Grapes" />
        <FruitCard imageSrc="/rasberries.jpg" title="Rasberries" />
        <FruitCard imageSrc="/strawberry.jpg" title="Strawberry" />
      </div>
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
      <div className="flex flex-wrap justify-center mx-16 my-4">
      <VegetableCard/>
      <VegetableCard imageSrc = "/potato.jpg"  title = "Potato"/>
      <VegetableCard imageSrc = "/tomato.jpg"  title = "Tomato"/>
      <VegetableCard imageSrc = "/potato.jpg"  title = "Potato"/>
      <VegetableCard imageSrc = "/bell papper.jpg"  title = "Bell Pepper"/>
      <VegetableCard imageSrc = "/tomato.jpg"  title = "Tomato"/>
      </div>
      <Section7/>
      <TextSection/>
      <div className="flex flex-wrap justify-center items-center mx-16 my-6">
      <ReviewCard/>
      <ReviewCard imageSrc="/grapes.jpg" title="Grapes"/>
      <ReviewCard imageSrc="/brocoli.jpg" title="Brocoli"/>
      <ReviewCard imageSrc="/tomato.jpg" title="Tomato"/>
      <ReviewCard imageSrc="/strawberry.jpg" title="Strawberry"/>
      <ReviewCard imageSrc="/rasberries.jpg" title="Rasberries"/>
      </div>
      <Acheivements/>
      <h3 className="text-center text-3xl font-semibold text-green-600 my-4">Our Testimonial</h3>
      <h1 className="text-center text-5xl font-bold opacity-70 my-4">Our Client Saying!</h1>
      <div className="flex flex-wrap mx-16 justify-center items-center">
      <ClientReview/>
      <ClientReview/>
      
      </div>
      <Footer/>
    </>
  );
}

export default App;
