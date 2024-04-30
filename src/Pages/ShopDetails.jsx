import {
  faAppleWhole,
  faLock,
  faMagnifyingGlass,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import FeaturedProducts from "../FeaturedProducts";
import SimpleSlider from "../SimpleSlider";
const ShopDetails = () => {
  const [activeMenu, setActiveMenu] = useState("description");
  const currentDate = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };
  let [quantity, setQuantity] = useState(1);
  const handleClick = (operation) => {
    if (operation === "decrement" && quantity > 1) {
      quantity -= 1;
    } else if (operation === "increment") {
      quantity += 1;
    }
    setQuantity(quantity);
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
        <h1 className="text-5xl text-white font-bold">Shop Detail</h1>
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
            Shop Detail{" "}
          </span>
        </div>
      </div>

      <div className="text-custom-black mx-2 md:mx-16 my-16 md:64 flex flex-col md:flex-row">
        <div className="w-full md:w-2/3">
          <div className="flex flex-col md:flex-row">
            <div>
              <img
                src="/brocoli.jpg"
                alt="image"
                className="border w-full h-full rounded-xl"
              />
            </div>
            <div className="ml-0 md:ml-6 mt-6 md:mt-0 ">
              <h6 className="text-2xl font-bold">Brocoli</h6>
              <p className="my-4 text-lg">Category: Vegetables</p>
              <p className="text-xl my-4 font-extrabold">3,35 $</p>
              <p className="text-xl text-custom-orange my-4">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </p>
              <p className="my-4 max-w-96 text-lg">
                The generated Lorem Ipsum is therefore always free from
                repetition injected humour, or non-characteristic words etc.
              </p>
              <p className="my-4 max-w-96 text-lg">
                Susp endisse ultricies nisi vel quam suscipit. Sabertooth
                peacock flounder; chain pickerel hatchetfish, pencilfish
                snailfish
              </p>
              <p className="my-4 text-lg">
                <button
                  className="p-2 mx-1 bg-custom-white font-extrabold rounded-full w-10 h-10 justify-center items-center inline-flex "
                  onClick={() => handleClick("decrement")}
                >
                  -
                </button>{" "}
                {quantity}
                <button
                  className="p-2 mx-1 bg-custom-white font-extrabold rounded-full w-10 h-10 justify-center items-center inline-flex"
                  onClick={() => handleClick("increment")}
                >
                  +
                </button>
              </p>
              <a
                href="#"
                className="flex items-center w-fit border rounded-full border-custom-orange text-custom-green hover:bg-custom-orange transition-all duration-1000 text-lg font-bold py-2 my-3 px-4"
              >
                <FontAwesomeIcon className="mr-2" icon={faLock} />{" "}
                <span className="hover:text-white">Add to Cart</span>
              </a>
            </div>
          </div>
          <div className="my-12">
            <ul className="flex text-lg gap-8 ml-16 cursor-pointer ">
              <li
                className={`text-custom-green ${
                  activeMenu === "description" &&
                  "font-semibold border-custom-orange border-b-4"
                }`}
                onClick={() => handleMenuClick("description")}
              >
                Description
              </li>
              <li
                className={`text-custom-green ${
                  activeMenu === "reviews" &&
                  "font-semibold  border-custom-orange border-b-4"
                }`}
                onClick={() => handleMenuClick("reviews")}
              >
                Reviews
              </li>
            </ul>
            <hr />
            <div className="mt-4">
              {activeMenu === "description" && (
                <div>
                  <p className="my-4 text-lg">
                    The generated Lorem Ipsum is therefore always free from
                    repetition injected humour, or non-characteristic words etc.
                    Susp endisse ultricies nisi vel quam suscipit
                  </p>
                  <p className="my-4 text-lg">
                    Sabertooth peacock flounder; chain pickerel hatchetfish,
                    pencilfish snailfish filefish Antarctic icefish goldeye
                    aholehole trumpetfish pilot fish airbreathing catfish,
                    electric ray sweeper.
                  </p>

                  <table className="my-4 text-lg w-fill md:w-2/4">
                    <tbody>
                      <tr className="bg-custom-white">
                        <td className="px-4 py-2">Weight</td>
                        <td className="px-4 py-2">1 kg</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Country of Origin</td>
                        <td className="px-4 py-2">Agro Farm</td>
                      </tr>
                      <tr className="bg-custom-white">
                        <td className="px-4 py-2">Quality</td>
                        <td className="px-4 py-2">Organic</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Check</td>
                        <td className="px-4 py-2">Healthy</td>
                      </tr>
                      <tr className="bg-custom-white">
                        <td className="px-4 py-2">Min Weight</td>
                        <td className="px-4 py-2">250 kg</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
              {activeMenu === "reviews" && (
                <div>
                  <div className="my-4 flex">
                    <div>
                      <img src="/avatar.jpg" alt="image" />
                    </div>
                    <div className="mx-4">
                      <span>{formattedDate}</span>
                      <div className="flex justify-between items-center">
                        <h6 className="text-xl font-bold my-2">Jason Smith</h6>
                        <p className="text-xl text-custom-orange my-2">
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                        </p>
                      </div>
                      <p>
                        The generated Lorem Ipsum is therefore always free from
                        repetition injected humour, or non-characteristic words
                        etc. Susp endisse ultricies nisi vel quam suscipit
                      </p>
                    </div>
                  </div>
                  <div className="my-4 flex">
                    <div>
                      <img src="/avatar.jpg" alt="image" />
                    </div>
                    <div className="mx-4">
                      <span>{formattedDate}</span>
                      <div className="flex justify-between items-center">
                        <h6 className="text-xl font-bold my-2">Sam Peters</h6>
                        <p className="text-xl text-custom-orange my-2">
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                        </p>
                      </div>
                      <p>
                        The generated Lorem Ipsum is therefore always free from
                        repetition injected humour, or non-characteristic words
                        etc. Susp endisse ultricies nisi vel quam suscipit
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="my-6">
            <h1 className="text-custom-black text-2xl font-bold">
              Leave a Reply
            </h1>
            <div className="my-8 flex flex-col md:flex-row items-center justify-center">
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full md:w-2/4 p-4 my-2 mx-2 text-lg border-b-4 rounded-2xl outline-custom-green outline-2"
              />
              <input
                type="text"
                placeholder="Your Email *"
                className="w-full md:w-2/4 p-4 mx-2 text-lg border-b-4 rounded-2xl outline-custom-green outline-2"
              />
            </div>
            <textarea
              name="Your Review *"
              placeholder="Your Review"
              className="w-full outline-2 outline-custom-green border-b-4 rounded-2xl mx-2 p-4 text-lg"
              cols="10"
              rows="8"
            ></textarea>
          </div>
          <div>
            <div className="w-full flex items-center justify-between">
              <span className="text-xl">Please rate:</span>{" "}
              <span className="-mx-3 md:-ml-96">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </span>
              <button className="text-xl text-custom-green font-semibold hover:text-white hover:bg-custom-orange transition-all duration-1000 my-6 min-w-40 max-w-64 py-4 border border-custom-orange rounded-full">
                Post Comment
              </button>
            </div>
            <div></div>
          </div>
        </div>
        <div className="ml-0 md:ml-24 mt-6">
          <div className="flex justify-between bg-custom-white border rounded-lg w-full md:max-w-96">
            <input
              className="text-xl w-3/4 px-4 rounded-tl-lg rounded-bl-lg outline-custom-green text-custom-black"
              placeholder="keywords"
              type="text"
            />
            <button className="text-2xl flex justify-center items-center p-4">
              <FontAwesomeIcon
                className="text-lg text-custom-black md:text-xl"
                icon={faMagnifyingGlass}
              />
            </button>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl text-custom-black font-semibold my-4">
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
                  Pumpkin
                </li>{" "}
                <span className="ml-40">(5)</span>
              </div>
              <div className="flex my-2 w-full justify-between">
                <li className="text-custom-green hover:text-custom-orange cursor-pointer">
                  <FontAwesomeIcon className="mx-3" icon={faAppleWhole} />
                  Oranges
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
                  Grapes
                </li>{" "}
                <span className="ml-40">(2)</span>
              </div>
            </ul>
          </div>
          <div className="my-4">
            <h2 className="text-2xl md:text-3xl text-custom-black font-semibold my-4">
              Featured products
            </h2>
            <FeaturedProducts />
            <FeaturedProducts ImageSrc="/coriander.jpg" title="Brocolli" />
            <FeaturedProducts ImageSrc="/strawberry.jpg" title="Big Banana" />
            <FeaturedProducts ImageSrc="/potato.jpg" title="Big Banana" />
            <FeaturedProducts ImageSrc="/tomato.jpg" title="Big Banana" />
            <FeaturedProducts ImageSrc="/bell papper.jpg" title="Big Banana" />
          </div>
          <button className="text-xl text-custom-green font-semibold w-full hover:text-white hover:bg-custom-orange transition-all duration-1000 my-6 min-w-40 max-w-64 py-4 border border-custom-orange rounded-full">
            View more
          </button>
          <div className="bg-custom-white max-h-96 my-6 sm:max-w-80 border border-none rounded-xl relative">
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
      </div>

      <h1 className="text-custom-black mx-16 text-2xl md:text-5xl font-bold my-6">
        Related Products
      </h1>
      <div>
        <SimpleSlider />
      </div>
    </>
  );
};

export default ShopDetails;
