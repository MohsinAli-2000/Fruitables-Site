import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";
const FacilityCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-0 md:w-6/12 w-full md:mb-0 mb-4">
      <div className="flex flex-col items-center justify-center bg-gray-200 border rounded-lg w-full py-6 px-14 my-8 md:mx-2">
        <div className="bg-orange-500 p-12 border rounded-full">
          <FontAwesomeIcon className="text-5xl text-white" icon={icon} />
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
