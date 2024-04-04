import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NotFound = () => {
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
      <h1 className="text-5xl text-white font-bold">404-Page</h1>
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
          404-Page{" "}
        </span>
      </div>
    </div>


    <div className="flex flex-col justify-center mx-96 gap-y-4 items-center my-36">
        <h2 className="text-custom-orange text-8xl"><FontAwesomeIcon icon={faTriangleExclamation} /></h2>
        <h3 className="text-custom-black text-8xl font-extrabold">404</h3>
        <p className="text-custom-black text-4xl font-bold">Page Not Found</p>
        <p className="text-custom-black text-xl text-center">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
        <a href="/" className="text-custom-black text-xl font-semibold border border-custom-orange px-6 py-4 hover:text-white hover:bg-custom-orange rounded-full">Go Back To Home</a>
    </div>
  </>
  )
}

export default NotFound
