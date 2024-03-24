import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const AcheivementCard = ({ title = "SATISFIED CUSTOMERS", Rate = "1963" }) => {
  return (
    <div className="flex flex-col w-fit max-w-48 justify-center items-center rounded-lg mx-2 my-2 px-4 py-6 bg-white">
      <FontAwesomeIcon
        className="my-4 text-6xl text-orange-400"
        icon={faUsers}
      />
      <h4 className="my-4 text-3xl break-words font-semibold text-green-600">
        {title}
      </h4>
      <span className="my-4 text-3xl font-bold opacity-70">{Rate}</span>
    </div>
  );
};

AcheivementCard.propTypes = {
  title: PropTypes.string,
  Rate: PropTypes.string,
};

export default AcheivementCard;
