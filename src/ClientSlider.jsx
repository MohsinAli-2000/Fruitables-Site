import Slider from "react-slick";
import ClientReview from "./ClientReview";

export default function ClientSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 3 slides initially
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Medium devices (tablets)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Small devices (landscape phones)
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // Extra small devices (portrait phones)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-16 my-16">
      <Slider {...settings}>
        <div className="px-2">
          <ClientReview />
        </div>
        <div className="px-2">
          <ClientReview imageSrc="/potato.jpg" title="Potato" />
        </div>
        <div className="px-2">
          <ClientReview imageSrc="/tomato.jpg" title="Tomato" />
        </div>
        <div className="px-2">
          <ClientReview imageSrc="/potato.jpg" title="Potato" />
        </div>
        <div className="px-2">
          <ClientReview imageSrc="/bell papper.jpg" title="Bell Pepper" />
        </div>
        <div className="px-2">
          <ClientReview imageSrc="/tomato.jpg" title="Tomato" />
        </div>
      </Slider>
    </div>
  );
}
