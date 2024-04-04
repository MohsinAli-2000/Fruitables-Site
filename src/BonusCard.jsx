import PropTypes from "prop-types";

const BonusCard = ({
  imageSrc = "/apple.jpg",
  title = "Fresh Apples",
  description = "20% OFF",
  divBg = "bg-custom-orange w-full h-28",
  InnerBg = "custom-green",
  InnerTextH5 = "text-white",
  InnerTextP = "text-white",
  custom,
}) => {
  return (
    <>
      <div className={`flex flex-col justify-center items-center w-fit min-w-64 border border-${custom} rounded-lg mx-2 my-2`}>
        <img
          className="w-full h-64 border rounded-tr-lg rounded-tl-lg"
          src={imageSrc}
          alt="image"
        />
        <div
          className={`absolute mt-32  w-fit bg-${InnerBg} text-white text-2xl px-6 p-4 rounded-lg flex flex-col justify-center items-center`}
        >
          <h5 className={`${InnerTextH5}`}>{title}</h5>
          <p className={`${InnerTextP}`}>{description}</p>
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
  divBg: PropTypes.string,
  InnerBg: PropTypes.string,
  InnerTextH5: PropTypes.string,
  InnerTextP: PropTypes.string,
  custom: PropTypes.string,

};

export default BonusCard;
