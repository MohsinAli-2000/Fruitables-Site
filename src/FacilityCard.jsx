import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const FacilityCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:w-1/2 lg:w-1/4 mb-4">
      <div className="flex flex-col items-center justify-center bg-gray-200 border rounded-lg py-6 px-4 my-8 mx-2">
        <div className="bg-orange-500 p-6 rounded-full">
          <FontAwesomeIcon className="text-4xl text-white" icon={icon} />
        </div>
        <h2 className="py-4 text-xl font-semibold opacity-80">{title}</h2>
        <p className="text-lg font-thin opacity-80">{description}</p>
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
