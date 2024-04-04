import PropTypes from "prop-types";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const FeaturedProducts = ({ ImageSrc = "/apple.jpg", title = "Apple" }) => {
  return (
    <>
      <div className="flex items-center my-2">
        <div>
          <img
            src={ImageSrc}
            alt="image"
            width={100}
            height={100}
            className="bg-custom-white rounded-lg"
          />
        </div>
        <div className="ml-4">
          <h3 className="text-xl text-custom-black font-semibold">{title}</h3>
          <p className="text-custom-orange text-xl">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </p>
          <p className="text-custom-black text-lg font-bold">
            2.99 $ <span className="text-custom-red line-through">4.11 $</span>
          </p>
        </div>
      </div>
    </>
  );
};

FeaturedProducts.propTypes = {
  ImageSrc: PropTypes.string,
  title: PropTypes.string,
};

export default FeaturedProducts;
