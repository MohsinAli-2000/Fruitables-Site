import ClientSlider from "../ClientSlider";

const Testimonials = () => {
  return (
    <>
      <div
        className="w-full max-h-52 flex flex-col justify-center items-center"
        style={{
          backgroundImage: 'url("/fruit-banner.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "150px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-5xl text-white font-bold">Testimonials</h1>
        <div className="my-3 text-xl">
          <span className="text-custom-green hover:text-green-600 cursor-pointer mx-2">
            Home
          </span>
          /
          <span className="text-custom-green hover:text-green-600 cursor-pointer mx-2">
            Pages
          </span>
          /{" "}
          <span className="text-white hover:text-green-600 cursor-pointer mx-2">
            Testimonails{" "}
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mx-16 gap-y-4 my-36">
        <h3 className="text-custom-green text-3xl font-semibold">
          Our Testimonial
        </h3>
        <h1 className="text-custom-black text-5xl font-extrabold">
          Our Client Saying!
        </h1>
      </div>
      <div>
        <ClientSlider />
      </div>
    </>
  );
};

export default Testimonials;