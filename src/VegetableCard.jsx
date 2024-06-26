import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const VegetableCard = ({
  imageSrc = "/coriander.jpg",
  title = "Coriander",
  altText = "Image",
}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center border border-custom-green rounded-lg my-6 mx-2 min-w-60 sm:mx-1 md:mx-2 lg:mx-3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm hover:scale-110 hover:shadow-xl bg-gray-100 transition-transform duration-1000 overflow-hidden relative">
        <img
          className="w-full rounded-tl-lg rounded-tr-lg hover:scale-110 transition-transform duration-1000"
          height={100}
          src={imageSrc}
          alt={altText}
        />
        <span className="absolute top-2 right-2 z-10 opacity-100 bg-custom-green text-white p-1 px-6 rounded text-xl font-semibold transition-transform duration-600">
          Vegetable
        </span>
        <h2 className="text-3xl opacity-80 font-semibold mt-2">{title}</h2>
        <p className="text-lg opacity-85 text-center my-2 px-2 sm:px-4 md:px-6 lg:px-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod
          te incididunt
        </p>
        <div className="flex flex-col justify-start w-full px-2 sm:px-4 md:px-6 lg:px-8">
          <p className="text-lg mt-3 font-semibold">$7.99/Kg</p>
          <a
            href="#"
            className="flex items-center w-fit border rounded-full border-custom-green text-custom-green hover:bg-custom-orange font-bold py-2 my-3 px-4"
          >
            <FontAwesomeIcon className="mr-2" icon={faLock} />{" "}
            <span className="hover:text-white">Add to Cart</span>
          </a>
        </div>
      </div>
    </>
  );
};

VegetableCard.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  altText: PropTypes.string,
};

export default VegetableCard;
