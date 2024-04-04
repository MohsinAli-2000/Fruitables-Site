import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const FacilityCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full px-3 mt-4 md:w-1/2 lg:w-3/12 mb-4">
      <div className="flex flex-col items-center justify-center bg-custom-white rounded-lg h-full w-full py-6 px-4 my-8">
        <div className="bg-custom-orange p-6 rounded-full">
          <FontAwesomeIcon
            className="text-4xl lg:text-5xl  text-white"
            icon={icon}
          />
        </div>
        <h2 className="py-4 text-xl font-semibold text-custom-black">
          {title}
        </h2>
        <p className="text-lg font-light text-custom-black ">{description}</p>
      </div>
    </div>
  );
};

FacilityCard.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

FacilityCard.defaultProps = {
  icon: faTruck,
};

export default FacilityCard;
