import { faLock, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
const ReviewCard = ({ imageSrc = "/orange.jpg", title = "Organic Orange" }) => {
  return (
    <div className="relative flex justify-between items-center w-fit bg-gray-200 border rounded-lg p-4 mx-2 my-2">
      <div className="flex-shrink-0 w-36 h-36 border rounded-full overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={imageSrc}
          alt="Orange"
        />
      </div>
      <div className="ml-4">
        <h4 className="text-2xl opacity-80 font-semibold">{title}</h4>
        <div className="flex flex-col items-center">
          <p className="text-green-500 my-4">
            <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />{" "}
            <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </p>
          <p className="text-xl font-semibold text-gray-500">3.12 $</p>
        </div>
        <a
          className="text-2xl block mt-2 text-green-600 border border-orange-400 hover:bg-orange-400 hover:text-white px-4 py-3 rounded-full"
          href="#"
        >
          <FontAwesomeIcon icon={faLock} /> Add to Cart
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
