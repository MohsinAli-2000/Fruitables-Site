import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ClientReview = () => {
  return (
    <div className="w-full md:max-w-xl bg-gray-200 rounded-lg p-4 md:p-6 my-2 md:my-4 mx-2 md:mx-4">
      <p className="text-base md:text-lg lg:text-xl opacity-60 break-words mb-2 md:mb-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus,
        numquam sapiente
      </p>
      <hr className="border-t border-orange-400 my-2 md:my-3" />
      <div className="flex flex-col md:flex-row items-center md:items-start mt-2 md:mt-3">
        <img className="rounded-lg w-24 h-24 md:w-32 md:h-32 mr-0 md:mr-6 mb-2 md:mb-0" src="/Client-image.jpg" alt="image" />
        <div className="flex flex-col">
          <span className="text-lg md:text-xl lg:text-2xl font-semibold opacity-70 my-2 md:my-4">
            Client Name
          </span>
          <span className="text-base md:text-lg lg:text-xl font-semibold opacity-50 my-1 md:my-2">
            Profession
          </span>
          <div className="text-green-600 flex items-center">
            <FontAwesomeIcon icon={faStar} className="mr-1" />
            <FontAwesomeIcon icon={faStar} className="mr-1" />
            <FontAwesomeIcon icon={faStar} className="mr-1" />
            <FontAwesomeIcon icon={faStar} className="mr-1" />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
