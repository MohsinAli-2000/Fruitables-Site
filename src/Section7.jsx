const Section7 = () => {
  return (
    <>
      <div className="flex flex-col  md:flex-row justify-between items-center bg-custom-orange px-16 my-12">
        <div className="md:w-1/2">
          <h3 className="text-4xl md:text-7xl text-white font-bold">
            Fresh Exotic <br /> Fruits
          </h3>
          <p className="text-3xl md:text-5xl opacity-60 font-semibold my-2 md:my-4">
            in Our Store
          </p>
          <p className="text-lg md:text-xl opacity-70 my-2 md:my-4">
            The generated Lorem Ipsum is therefore always free from repetition
            injected humour, or non-characteristic words etc.
          </p>
          <a
            className="text-2xl md:text-3xl border rounded-full px-4 md:px-6 py-2 my-2 md:my-6 hover:bg-custom-green text-custom-black"
            href="#"
          >
            BUY
          </a>
        </div>
        <div className="relative md:mt-4 sm:mt-0 md:w-1/2">
          <div className="absolute top-16 left-16 right-full    z-10 p-20 bg-white rounded-full flex justify-center items-center">
            <span className="absolute text-8xl text-custom-black font-bold right-28">
              1
            </span>
            <span className="absolute text-2xl text-custom-black font-semibold right-24 top-24">
              kg
            </span>
            <span className="text-4xl font-bold absolute top-16 right-12 text-black opacity-70">
              50$
            </span>
          </div>
          <img className="mt-12 md:mt-20" src="/Apple-Bucket.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Section7;
