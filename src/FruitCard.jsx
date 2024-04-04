import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const FruitCard = ({
  imageSrc = "/rasberries.jpg",
  title = "Raspberry",
  altText = "Image",
<<<<<<< HEAD
  category = "Fruit",
}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center rounded-lg my-6 mx-2 sm:mx-1 md:mx-2 lg:mx-3 min-w-64 sm:max-w-sm md:max-w-md lg:max-w-md hover:scale-110 hover:shadow-xl bg-white transition-transform duration-1000 overflow-hidden relative">
        <div className="w-full h-fit">
          <img
            className="w-full rounded-t-xl hover:scale-110 transition-transform duration-1000 border-r-0 border-l-0"
            height={100}
            src={imageSrc}
            alt={altText}
          />
        </div>
        <div className="h-full  border border-custom-orange border-t-0 rounded-b-xl pt-8">
          <span className="absolute top-2 left-2 z-10 opacity-100 bg-custom-orange text-white p-1 px-6 rounded text-xl font-semibold transition-transform duration-600">
            {category}
          </span>
          <h2 className="text-3xl text-custom-black text-center font-semibold -mt-3">
            {title}
          </h2>
          <p className="text-lg opacity-85 text-center my-2 px-2 sm:px-4 md:px-6 lg:px-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
            eiusmod te incididunt
          </p>
          <div className="flex flex-col justify-start w-full px-2 sm:px-4 md:px-6 lg:px-8 mt-8">
            <p className="text-lg text-custom-black font-semibold">$4.99/Kg</p>
            <a
              href="#"
              className="flex items-center w-fit border rounded-full border-custom-orange text-custom-green hover:bg-custom-orange font-bold py-2 my-3 px-4"
            >
              <FontAwesomeIcon className="mr-2" icon={faLock} />{" "}
              <span className="hover:text-white">Add to Cart</span>
            </a>
          </div>
=======
  category,
}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center border border-orange-400 rounded-xl my-6 mx-2 sm:mx-1 md:mx-2 lg:mx-3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-72 hover:scale-105 hover:shadow-xl bg-gray-100 transition-transform duration-600 relative">
        <img
          className="w-full rounded-tl-lg rounded-tr-lg hover:scale-105 transition-transform duration-600"
          height={100}
          src={imageSrc}
          alt={altText}
        />
        <span className="absolute top-2 left-2 z-10 opacity-100 bg-orange-400 text-white p-1 px-6 rounded text-xl font-semibold transition-transform duration-600">
          {category}
        </span>
        <h2 className="text-3xl opacity-80 font-semibold mt-2">{title}</h2>
        <p className="text-lg opacity-85 text-center my-2 px-2 sm:px-4 md:px-6 lg:px-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod
          te incididunt
        </p>
        <div className="flex flex-col justify-start w-full px-2 sm:px-4 md:px-6 lg:px-8">
          <p className="text-lg mt-3 font-semibold">$4.99/Kg</p>
          <a
            href="#"
            className="flex items-center w-fit border rounded-full border-orange-400 text-green-500 font-bold py-2 my-3 px-4"
          >
            <FontAwesomeIcon className="mr-2" icon={faLock} /> Add to Cart
          </a>
>>>>>>> d03ba62456b92e8c47336ae64948dded1b1a2bfc
        </div>
      </div>
    </>
  );
};

FruitCard.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  altText: PropTypes.string,
  category: PropTypes.string,
};

export default FruitCard;
