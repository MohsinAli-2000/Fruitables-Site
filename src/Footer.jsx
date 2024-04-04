import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-black opacity-80 mt-8 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h1 className="text-xl md:text-2xl font-semibold text-custom-green my-1">
              Fruitables
            </h1>
            <span className="text-lg font-semibold text-custom-orange my-1">
              Fresh products
            </span>
          </div>
          <div className="mt-4  md:mt-0 flex flex-col sm:flex-row">
            <input
              className="w-full min-w-10 border border-green-500 border-collapse outline-none rounded-tl-full rounded-bl-full px-4 py-2 text-base md:text-xl mr-0 my-2"
              placeholder="Enter email"
              type="text"
            />
            <button className="w-full sm:w-fit min-w-5 text-white font-semibold hover:bg-custom-orange bg-custom-green rounded-tr-full rounded-br-full px-6 py-2 text-base md:text-xl ml-0 my-2">
              Subscribe Now
            </button>
          </div>

          <div className="flex mt-4 md:mt-0">
            <div className="h-9 w-9 flex justify-center items-center border border-custom-orange rounded-full hover:text-black hover:bg-custom-orange p-2 mx-2 duration-1000">
              <a href="#" className="text-custom-orange hover:text-black">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
            <div className="h-9 w-9 flex justify-center items-center border border-custom-orange rounded-full hover:text-black hover:bg-custom-orange p-2 mx-2">
              <a
                href="#"
                className="text-custom-orange hover:text-black duration-1000"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </div>
            <div className="h-9 w-9 flex justify-center items-center border border-custom-orange rounded-full hover:text-black hover:bg-custom-orange p-2 mx-2">
              <a
                href="#"
                className="text-custom-orange hover:text-black duration-1000"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
            <div className="h-9 w-9 flex justify-center items-center border border-custom-orange rounded-full hover:text-black hover:bg-custom-orange p-2 mx-2">
              <a
                href="#"
                className="text-custom-orange hover:text-black duration-1000"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
        <hr className="border border-b-1 mx-16 my-4 border-custom-orange" />

        {/* Sitemaps */}
        <div className="text-white flex mx-16 justify-between items-center flex-wrap ">
          <div className="max-w-60 mt-4">
            <h5 className="text-2xl opacity-100">Why People Like us!</h5>
            <p className="opacity-60 mt-2 mb-6">
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the like Aldus PageMaker including of Lorem
              Ipsum.
            </p>
            <a
              className="border border-custom-orange text-custom-green font-bold text-lg py-2 px-4 rounded-full hover:text-white hover:bg-custom-orange"
              href="#"
            >
              Read More
            </a>
          </div>
          <div className="flex flex-col max-w-60 mt-4">
            <h5 className="text-2xl opacity-100">Shop Info</h5>
            <a className="opacity-60 hover:text-custom-orange" href="#">
              About Us
            </a>
            <a className="opacity-60 hover:text-custom-orange" href="#">
              Contact Us
            </a>
            <a className="opacity-60 hover:text-custom-orange" href="#">
              Privacy Policy
            </a>
            <a className="opacity-60 hover:text-custom-orange" href="#">
              Terms & Conditions
            </a>
            <a className="opacity-60 hover:text-custom-orange" href="#">
              Returns Policy
            </a>
            <a className="opacity-60 hover:text-custom-orange" href="#">
              FAQs & Help
            </a>
          </div>
          <div className="flex flex-col max-w-60 mt-4">
            <h5 className="text-2xl opacity-100">Account</h5>
            <a href="#" className="opacity-60 hover:text-custom-orange">
              My Account
            </a>
            <a href="#" className="opacity-60 hover:text-custom-orange">
              Shop Details
            </a>
            <a href="#" className="opacity-60 hover:text-custom-orange">
              ShoppingCart
            </a>
            <a href="#" className="opacity-60 hover:text-custom-orange">
              Wishlist
            </a>
            <a href="#" className="opacity-60 hover:text-custom-orange">
              Order History
            </a>
            <a href="#" className="opacity-60 hover:text-custom-orange">
              Intenational Order
            </a>
          </div>
          <div className="flex flex-col max-w-60 mt-4">
            <h5 className="text-2xl opacity-100">Contact</h5>
            <span className="opacity-60">Address: 1429 Netus Rd, NY 48247</span>
            <span className="opacity-60">Email: Example@gmail.com</span>
            <span className="opacity-60">Phone: +0123 4567 8910</span>
            <span className="opacity-60">Payment Accepted</span>
            <span className="mt-6">
              <img src="/payment-methods.png" alt="image" />
            </span>
          </div>
        </div>
        <div className="text-white flex flex-col md:flex-row justify-between items-center my-6 mt-12 mx-4 md:mx-16">
          <span className="text-center md:text-left mb-2 md:mb-0">
            © Fruitables, All rights reserved.
          </span>
          <p className="text-center md:text-right">
            Designed By <span className="text-custom-green">Mohsin Ali</span>{" "}
            Distributed By <span className="text-custom-green">Mohsin Ali</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
