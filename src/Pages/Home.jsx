import Header from "../Header";
import FacilityCard from "../FacilityCard";
import {
  faArrowRightArrowLeft,
  faCarSide,
  faPhone,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "../Menu";
import BonusCard from "../BonusCard";
import SimpleSlider from "../SimpleSlider";
import Section7 from "../Section7";
import TextSection from "../TextSection";
import ReviewCard from "../ReviewCard";
import Acheivements from "../Acheivements";
import ClientSlider from "../ClientSlider";

const Home = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-wrap md:flex-row relative ">
          <Header />
          <FacilityCard
            icon={faCarSide}
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
          <BonusCard
            InnerBg="custom-green"
            InnerTextH5="text-white"
            InnerTextP="text-custom-black"
            custom="custom-orange"
          />
          <BonusCard
            imageSrc="/brocoli.jpg"
            title="Exotic Vegetables"
            description="Discount 30$"
            divBg="bg-custom-black w-full h-28"
            InnerBg="white"
            InnerTextH5="text-custom-green"
            InnerTextP="text-custom-black"
            custom="custom-black"
          />
          <BonusCard
            imageSrc="/strawberry.jpg"
            title="Tasty Fruits"
            description="Free delivery"
            divBg="bg-custom-green w-full h-28"
            InnerBg="custom-orange"
            InnerTextH5="text-white"
            InnerTextP="text-custom-black"
            custom="custom-green"
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
        <h3 className="text-center text-3xl font-semibold text-custom-green my-4">
          Our Testimonial
        </h3>
        <h1 className="text-center text-5xl font-bold opacity-70 my-4">
          Our Client Saying!
        </h1>
      </div>
      <ClientSlider />
    </>
  );
};

export default Home;
