import Slider from "react-slick";
import ClientReview from "./ClientReview";

export default function ClientSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768, 
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480, 
            settings: {
              slidesToShow: 1
            }
          }
        ]
      };
  return (
    <div className="mx-16 my-16">
      <Slider {...settings}>
        <div>
          <ClientReview/> 
        </div>
        <div>
          <ClientReview imageSrc="/potato.jpg" title="Potato" />
        </div>
        <div>
          <ClientReview imageSrc="/tomato.jpg" title="Tomato" />
        </div>
        <div>
          <ClientReview imageSrc="/potato.jpg" title="Potato" />
        </div>
        <div>
          <ClientReview imageSrc="/bell papper.jpg" title="Bell Pepper" />
        </div>
        <div>
          <ClientReview imageSrc="/tomato.jpg" title="Tomato" />
        </div>
      </Slider>
    </div>
  );
}
