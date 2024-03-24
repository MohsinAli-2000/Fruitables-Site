import PropTypes from "prop-types";

const BonusCard = ({
  imageSrc = "/apple.jpg",
  title = "Fresh Apples",
  description = "20% OFF",
  divBg="bg-orange-400 w-full h-28"
}) => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center w-fit border border-orange-400 rounded-lg mx-2 my-2">
        <img className="w-full h-64 border rounded-tr-lg rounded-tl-lg" src={imageSrc} alt="image" />
        <div className="absolute mt-32  w-fit bg-green-600 text-white text-2xl px-6 p-4 rounded-lg flex flex-col justify-center items-center">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
        <div className={divBg} height={50}></div>
      </div>
    </>
  );
};

BonusCard.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  divBg:PropTypes.string,
};

export default BonusCard;
