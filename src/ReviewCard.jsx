import { faLock, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const ReviewCard = ({ imageSrc = "/orange.jpg", title = "Organic Orange" }) => {
  return (
    <div className="flex flex-col justify-between bg-gray-200 border rounded-lg p-4 mx-2 my-2 md:flex-row md:p-6 lg:flex-none">
      <div className="flex-shrink-0 w-full md:w-48 lg:w-36 h-36 md:h-48 border rounded-full overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={imageSrc}
          alt="Orange"
        />
      </div>
      <div className="flex flex-col md:ml-4 md:mt-0 md:text-left">
        <h4 className="text-lg md:text-xl lg:text-2xl opacity-80 font-semibold">
          {title}
        </h4>
        <div className="flex flex-col items-center md:flex-row md:items-center">
          <p className="text-sm md:text-base font-semibold text-green-500 mt-2 md:mt-4 md:mr-4">
            <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />{" "}
            <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </p>
          <p className="text-sm md:text-base font-semibold text-gray-500 mt-2 md:mt-4">
            $3.12
          </p>
        </div>
        <a
          className="text-sm md:text-base block mt-2 md:mt-4 text-green-600 border border-orange-400 hover:bg-orange-400 hover:text-white px-4 py-3 rounded-full"
          href="#"
        >
          <FontAwesomeIcon icon={faLock} className="mr-2" /> Add to Cart
        </a>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  title: PropTypes.string,
  imageSrc: PropTypes.string,
};

export default ReviewCard;
