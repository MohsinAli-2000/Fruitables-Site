import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Header = () => {
  const bgimage = {
    backgroundImage:
      'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)) , url("/bgfruits.webp")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "530px",
  };

  return (
    <>
      <div style={bgimage} className="py-10 px-4 lg:px-16 relative">
        <div className="lg:flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 lg:pr-8">
            <p className="text-custom-orange text-lg lg:text-2xl font-semibold mb-2 lg:mb-4">
              100% Organic Foods
            </p>
            <h1 className="text-custom-green text-4xl lg:text-6xl font-extrabold my-4 lg:my-12">
              Organic Veggies &<br /> Fruits Foods
            </h1>
            <div className="flex flex-col lg:flex-row w-full">
              <input
                className="text-lg lg:text-xl border border-custom-orange border-b-2 rounded-tl-full rounded-bl-full py-2 px-4 lg:py-3 lg:px-4 mb-2 lg:mb-0 min-w-8"
                type="text"
                placeholder="Search"
              />
              <button className="text-white text-lg lg:text-xl border border-custom-orange border-b-2 py-2 px-4 lg:px-4 lg:py-3 rounded-tr-full rounded-br-full bg-custom-green hover:bg-custom-orange">
                Submit Now
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <Carousel showThumbs={false}>
              <div className="relative group">
                <img
                  className="w-full h-auto bg-custom-orange border rounded-2xl"
                  src="/Fruits.png"
                  alt="fruits"
                />
                <button className="absolute inset-0 flex items-center justify-center text-white text-lg lg:text-4xl font-bold">
                  Fruits
                </button>
              </div>
              <div className="relative group">
                <img
                  className="w-full h-auto border rounded-2xl"
                  src="/Vegetables.jpg"
                  alt="vegetables"
                />
                <button className="absolute inset-0 flex items-center justify-center text-white text-lg lg:text-4xl font-bold">
                  Vegetables
                </button>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
