import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faAnglesRight,
  faAppleWhole,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import FeaturedProducts from "../FeaturedProducts";
import FruitCard from "../FruitCard";

const Shop = () => {
  const [rangeValue, setRangeValue] = useState(10);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  return (
    <>
      <div
        className="w-full max-h-52 flex flex-col justify-center items-center"
        style={{
          backgroundImage: 'url("/fruit-banner.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "150px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-5xl text-white font-bold">Shop</h1>
        <div className="my-3 text-xl">
          <span className="text-custom-green hover:text-green-600 cursor-pointer mx-2">
            Home
          </span>
          /
          <span className="text-custom-green hover:text-green-600 cursor-pointer mx-2">
            Pages
          </span>
          /{" "}
          <span className="text-white hover:text-green-600 cursor-pointer mx-2">
            Shop{" "}
          </span>
        </div>
      </div>

      <div className="mx-4 md:mx-16">
        {" "}
        {/* Adjusted margin for smaller screens */}
        <h1 className="text-3xl text-left lg:text-5xl text-custom-black font-semibold mt-12 lg:mt-24">
          {" "}
          {/* Adjusted top margin for smaller screens */}
          Fresh fruits shop
        </h1>
        <div className="my-4 lg:flex items-center justify-between">
          <div className="flex justify-between bg-custom-white border rounded-lg w-full md:max-w-96">
            {" "}
            {/* Adjusted width for smaller screens */}
            <input
              className="text-xl w-3/4 px-4 rounded-tl-lg rounded-bl-lg outline-custom-green text-custom-black"
              placeholder="keywords"
              type="text"
            />
            <button className="text-2xl p-4">
              <FontAwesomeIcon
                className="text-lg text-custom-black md:text-xl"
                icon={faMagnifyingGlass}
              />
            </button>
          </div>
          <div className="flex justify-between bg-custom-white my-4 p-4 w-full md:max-w-96">
            {" "}
            {/* Adjusted width for smaller screens */}
            <span className="text-xl text-custom-black">Default Setting: </span>
            <select className="text-lg bg-custom-white border-none outline-none">
              <option value="nothing">Nothing</option>
              <option value="popularity">Popularity</option>
              <option value="organic">Organic</option>
              <option value="fantastic">Fantastic</option>
            </select>
          </div>
        </div>
        {/* Shop Page */}
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="flex flex-col w-full md:w-1/3 mr-0 md:mr-4">
            <div className="flex lg:flex-row my-2 max-w-80">
              <div>
                <h2 className="text-3xl text-custom-black font-semibold my-4">
                  Categories
                </h2>
                <ul className="text-xl">
                  <div className="flex my-2 w-full justify-between">
                    <li className="text-custom-green hover:text-custom-orange cursor-pointer">
                      <FontAwesomeIcon className="mx-3" icon={faAppleWhole} />
                      Apples
                    </li>{" "}
                    <span className="ml-40">(1)</span>
                  </div>
                  <div className="flex my-2 w-full justify-between">
                    <li className="text-custom-green hover:text-custom-orange cursor-pointer">
                      <FontAwesomeIcon className="mx-3" icon={faAppleWhole} />
                      Oranges
                    </li>{" "}
                    <span className="ml-40">(5)</span>
                  </div>
                  <div className="flex my-2 w-full justify-between">
                    <li className="text-custom-green hover:text-custom-orange cursor-pointer">
                      <FontAwesomeIcon className="mx-3" icon={faAppleWhole} />
                      Grapes
                    </li>{" "}
                    <span className="ml-40">(3)</span>
                  </div>
                  <div className="flex my-2 w-full justify-between">
                    <li className="text-custom-green hover:text-custom-orange cursor-pointer">
                      <FontAwesomeIcon className="mx-3" icon={faAppleWhole} />
                      Strawberries
                    </li>{" "}
                    <span className="ml-40">(6)</span>
                  </div>
                  <div className="flex my-2 w-full justify-between">
                    <li className="text-custom-green hover:text-custom-orange cursor-pointer">
                      <FontAwesomeIcon className="mx-3" icon={faAppleWhole} />
                      Banana
                    </li>{" "}
                    <span className="ml-40">(2)</span>
                  </div>
                </ul>
              </div>
            </div>
            <div className="my-6 max-w-80">
              <h2 className="text-3xl text-custom-black font-semibold my-4">
                Price
              </h2>
              <input
                type="range"
                min="0"
                max="500"
                value={rangeValue}
                onChange={handleRangeChange}
                className="appearance-none w-full bg-gray-200 rounded-full outline-none overflow-hidden"
              />
              <p className="text-custom-black text-xl">{rangeValue}</p>
            </div>
            <div className="my-6 max-w-80 flex flex-col justify-start text-lg text-custom-black">
              <h2 className="text-3xl text-custom-black font-semibold my-4">
                Additional
              </h2>
              <label>
                <input type="radio" className="mx-2" name="option" />
                Organic
              </label>
              <label>
                <input type="radio" className="mx-2" name="option" />
                Fresh
              </label>
              <label>
                <input type="radio" className="mx-2" name="option" />
                Expired
              </label>
              <label>
                <input type="radio" className="mx-2" name="option" />
                Sales
              </label>
              <label>
                <input type="radio" className="mx-2" name="option" />
                Discount
              </label>
            </div>
            <div className="my-6">
              <h2 className="text-3xl text-custom-black font-semibold my-4">
                Featured products
              </h2>
              <FeaturedProducts />
              <FeaturedProducts ImageSrc="/brocoli.jpg" title="Brocolli" />
              <FeaturedProducts ImageSrc="/strawberry.jpg" title="Big Banana" />
            </div>
            <a
              href="#"
              className="text-custom-green text-xl max-w-80 text-center my-10 border border-custom-orange px-16 py-3 rounded-full hover:bg-custom-orange hover:text-white"
            >
              View more
            </a>
            <div className="bg-custom-white max-h-96 my-12 sm:max-w-80 border border-none rounded-xl relative">
              <img
                src="/ShopCard-image.jpg"
                className="rounded-xl h-full"
                alt="image"
              />
              <h4 className="text-custom-orange text-3xl font-bold absolute bottom-0 left-40 top-32  md:left-36 md:top-24 lg:left-44  lg:top-28 right-0 p-4">
                Fresh Fruits Banner
              </h4>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-wrap w-full md:w-2/3 mt-48 sm:mt-0 ml-0 md:ml-1">
            <div className="w-full md:w-1/2 lg:w-1/3 mb-4 lg:mb-0 lg:mt-0">
              <FruitCard />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mb-4 lg:mb-0 lg:mt-0">
              <FruitCard imageSrc="/grapes.jpg" title="Grapes" />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mb-4 lg:mb-0 lg:mt-0">
              <FruitCard />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mb-4 lg:mb-0 lg:mt-0">
              <FruitCard imageSrc="/grapes.jpg" title="Grapes" />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mb-4 lg:mb-0 lg:mt-0">
              <FruitCard />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mb-4 lg:mb-0 lg:mt-0">
              <FruitCard imageSrc="/grapes.jpg" title="Grapes" />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mb-4 lg:mb-0 lg:mt-0">
              <FruitCard />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mb-4 lg:mb-0 lg:mt-0">
              <FruitCard imageSrc="/grapes.jpg" title="Grapes" />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mb-4 lg:mb-0 lg:mt-0">
              <FruitCard />
            </div>
            <div className="flex mx-16 md:mx-80 mt-6  max-w-48 justify-center items-center gap-1">
              {" "}
              {/* Adjusted margin for smaller screens */}
              <a
                href="#"
                className="text-custom-black hover:bg-custom-green border border-custom-orange rounded-xl p-3 cursor-pointer "
              >
                <FontAwesomeIcon icon={faAnglesLeft} />
              </a>
              <a
                href="#"
                className="text-xl border border-custom-orange bg-custom-green text-white rounded-xl p-3"
              >
                1
              </a>
              <a
                href="#"
                className="text-xl border border-custom-orange hover:bg-custom-green hover:text-white rounded-xl p-3"
              >
                2
              </a>
              <a
                href="#"
                className="text-xl border border-custom-orange hover:bg-custom-green hover:text-white rounded-xl p-3"
              >
                3
              </a>
              <a
                href="#"
                className="text-xl border border-custom-orange hover:bg-custom-green hover:text-white rounded-xl p-3"
              >
                4
              </a>
              <a
                href="#"
                className="text-xl border border-custom-orange hover:bg-custom-green hover:text-white rounded-xl p-3"
              >
                5
              </a>
              <a
                href="#"
                className="text-xl border border-custom-orange hover:bg-custom-green hover:text-white rounded-xl p-3"
              >
                6
              </a>
              <a
                href="#"
                className="text-custom-black hover:bg-custom-green border border-custom-orange rounded-xl p-3 cursor-pointer"
              >
                <FontAwesomeIcon icon={faAnglesRight} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
