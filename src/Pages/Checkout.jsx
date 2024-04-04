const Checkout = () => {
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
        <h1 className="text-5xl text-white font-bold">Check Out</h1>
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
            Check Out{" "}
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mx-16 my-36">
        <div>
          <h1 className="text-custom-black text-5xl font-semibold">
            Billing details
          </h1>
          <div className="mt-10 w-100">

            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row ">

            <label className="text-custom-black text-xl my-3">
              First Name<sup>*</sup>
            </label>
            <input type="text" className="border-2 border-custom-black rounded-xl  p-2 outline-custom-green outline-2" />

            <label className="text-custom-black text-xl my-3 md:ml-8">
              Last Name<sup>*</sup>
            </label>
            <input type="text" className="border-2 border-custom-black rounded-xl  p-2 outline-custom-green outline-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
