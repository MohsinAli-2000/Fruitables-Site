import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const AcheivementCard = ({ title = "SATISFIED CUSTOMERS", Rate = "1963" }) => {
  return (
    <div className="flex flex-col items-center justify-center mx-2 my-2 p-4 bg-white rounded-lg shadow-lg">
      <FontAwesomeIcon className="text-4xl text-orange-400" icon={faUsers} />
      <h4 className="mt-4 text-lg md:text-xl lg:text-2xl font-semibold text-green-600">{title}</h4>
      <span className="mt-4 text-lg md:text-xl lg:text-2xl font-bold opacity-70">{Rate}</span>
    </div>
  );
};

AcheivementCard.propTypes = {
  title: PropTypes.string,
  Rate: PropTypes.string,
};

export default AcheivementCard;
