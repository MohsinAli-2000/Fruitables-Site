

const ShopDetails = () => {
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
        <h1 className="text-5xl text-white font-bold">Shop Detail</h1>
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
            Shop Detail{" "}
          </span>
        </div>
      </div>
    </>
  )
}

export default ShopDetails
