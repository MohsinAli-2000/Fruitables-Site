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
      <div className="w-full bg-black opacity-80 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h1 className="text-xl md:text-2xl font-semibold text-green-500 my-1">
              Fruitables
            </h1>
            <span className="text-lg font-semibold text-orange-400 my-1">
              Fresh products
            </span>
          </div>
          <div className="mt-4 md:mt-0 flex">
            <input
              className="max-w-80 border border-green-500 rounded-tl-full rounded-bl-full px-4 py-2 text-base md:text-xl"
              placeholder="Enter email"
              type="text"
            />
            <button className="w-fit text-white font-semibold hover:bg-orange-400 bg-green-500 rounded-tr-full rounded-br-full px-6 py-2 text-base md:text-xl ml-2 md:ml-4">
              Subscribe Now
            </button>
          </div>
          <div className="flex mt-4 md:mt-0">
            <div>
              <a
                href="#"
                className="text-orange-400 mx-1 border border-orange-400 p-2 rounded-full hover:text-black hover:bg-orange-400"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-orange-400 mx-1 border border-orange-400 p-2 rounded-full hover:text-black hover:bg-orange-400"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-orange-400 mx-1 border border-orange-400 p-2 rounded-full hover:text-black hover:bg-orange-400"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-orange-400 mx-1 border border-orange-400 p-2 rounded-full hover:text-black hover:bg-orange-400"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
        <hr className="border border-b-1 mx-16 my-4 border-orange-400" />

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
              className="border border-orange-400 text-green-500 font-bold text-lg py-2 px-4 rounded-full hover:text-white hover:bg-orange-400"
              href="#"
            >
              Read More
            </a>
          </div>
          <div className="flex flex-col max-w-60 mt-4">
            <h5 className="text-2xl opacity-100">Shop Info</h5>
            <a className="opacity-60 hover:text-orange-400" href="#">
              About Us
            </a>
            <a className="opacity-60 hover:text-orange-400" href="#">
              Contact Us
            </a>
            <a className="opacity-60 hover:text-orange-400" href="#">
              Privacy Policy
            </a>
            <a className="opacity-60 hover:text-orange-400" href="#">
              Terms & Conditions
            </a>
            <a className="opacity-60 hover:text-orange-400" href="#">
              Returns Policy
            </a>
            <a className="opacity-60 hover:text-orange-400" href="#">
              FAQs & Help
            </a>
          </div>
          <div className="flex flex-col max-w-60 mt-4">
            <h5 className="text-2xl opacity-100">Account</h5>
            <a href="#" className="opacity-60 hover:text-orange-400">My Account</a>
            <a href="#" className="opacity-60 hover:text-orange-400">Shop Details</a>
            <a href="#" className="opacity-60 hover:text-orange-400">ShoppingCart</a>
            <a href="#" className="opacity-60 hover:text-orange-400">Wishlist</a>
            <a href="#" className="opacity-60 hover:text-orange-400">Order History</a>
            <a href="#" className="opacity-60 hover:text-orange-400">Intenational Order</a>
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
            Designed By <span className="text-green-500">Mohsin Ali</span>{" "}
            Distributed By <span className="text-green-500">Mohsin Ali</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
