import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const AcheivementCard = ({ title = "SATISFIED CUSTOMERS", Rate = "1963" }) => {
  return (
    <div className="flex flex-col items-center justify-center mx-2 my-2 p-4 bg-white rounded-lg shadow-lg min-w-64 min-h-96">
      <FontAwesomeIcon className="text-6xl text-custom-orange " icon={faUsers} />
      <h4 className="my-16 text-xl md:text-2xl lg:text-2xl font-semibold text-custom-green">
        {title}
      </h4>
      <span className="mt-4 text-xl md:text2xl lg:text-3xl font-bold opacity-70">
        {Rate}
      </span>
    </div>
  );
};

AcheivementCard.propTypes = {
  title: PropTypes.string,
  Rate: PropTypes.string,
};

export default AcheivementCard;
