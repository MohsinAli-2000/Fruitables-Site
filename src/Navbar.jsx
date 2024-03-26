import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faLock,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [Dropdown, setDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="mx-4 lg:mx-16  z-20 bg-white p-2 sticky top-0">          
        {/* Navbar for small devices */}
        <div className="flex justify-between items-center mt-3 lg:mt-5 mb-3 lg:mb-5 lg:hidden relative">
          <h1 className="text-green-500 cursor-pointer text-4xl lg:text-5xl font-extrabold">
            Fruitables
          </h1>
          <button onClick={toggleMenu}>
            <FontAwesomeIcon
              className="cursor-pointer text-green-500 text-2xl"
              icon={faBars}
            />
          </button>
          {isOpen && (
            <div className="text-lg opacity-80 absolute left-0 w-full top-full">
              <ul className="bg-gray-100 opacity-100 transition-opacity duration-300 ease-in-out rounded-md text-black p-2 lg:p-4">
                <li className="mr-2 lg:mr-6 cursor-pointer text-green-500">
                  Home
                </li>
                <li className="mr-2 lg:mr-6 cursor-pointer hover:text-green-500">
                  Shop
                </li>
                <li className="mr-2 lg:mr-6 cursor-pointer hover:text-green-500">
                  Shop Details
                </li>
                <li className="mr-2 lg:mr-6 cursor-pointer hover:text-green-500">
                  <div
                    className="mx-4 lg:mx-16 relative z-50"
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    Pages <FontAwesomeIcon icon={faCaretDown} />
                    {Dropdown && (
                      <div className="text-lg opacity-80 absolute left-0 w-full top-full z-40">
                        {" "}
                        {/* Set z-index for the dropdown menu */}
                        <ul className="bg-gray-100 opacity-100 transition-opacity duration-300 ease-in-out rounded-md text-black p-2 lg:p-4 z-50">
                          <li className="cursor-pointer hover:text-green-500 hover:bg-orange-400">
                            <a href="#">Cart</a>
                          </li>
                          <li className="cursor-pointer hover:text-green-500 hover:bg-orange-400">
                            <a href="#">Checkout</a>
                          </li>
                          <li className="cursor-pointer hover:text-green-500 hover:bg-orange-400">
                            <a href="#">Testimonials</a>
                          </li>
                          <li className="cursor-pointer hover:text-green-500 hover:bg-orange-400">
                            <a href="#">404 page</a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </li>
                <li className="mr-2 lg:mr-6 hover:text-green-500">Contact</li>
              </ul>
            </div>
          )}
        </div>
        {/* Navbar for large devices */}
        <div className="hidden lg:flex items-center justify-between mt-3 lg:mt-5 mb-3 lg:mb-5 relative z-20">
          <h1 className="text-green-500 cursor-pointer text-4xl lg:text-5xl font-extrabold">
            Fruitables
          </h1>
          <div className="text-lg cursor-pointer opacity-80">
            <ul className="flex">
              <li className="mr-2 lg:mr-6 text-green-500">Home</li>
              <li className="mr-2 lg:mr-6 hover:text-green-500">Shop</li>
              <li className="mr-2 lg:mr-6 hover:text-green-500">
                Shop Details
              </li>
              <li className="mr-2 lg:mr-6 hover:text-green-500">
                <div
                  className="relative"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  Pages <FontAwesomeIcon icon={faCaretDown} />
                  {Dropdown && (
                    <div className="absolute left-0 top-full z-30">
                      <ul className="bg-gray-100 opacity-100 transition-opacity duration-300 ease-in-out rounded-md text-black p-2 lg:p-4">
                        <li className="hover:text-green-500 hover:bg-orange-400">
                          <a href="#">Cart</a>
                        </li>
                        <li className="hover:text-green-500 hover:bg-orange-400">
                          <a href="#">Checkout</a>
                        </li>
                        <li className="hover:text-green-500 hover:bg-orange-400">
                          <a href="#">Testimonials</a>
                        </li>
                        <li className="hover:text-green-500 hover:bg-orange-400">
                          <a href="#">404 page</a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
              <li className="mr-2 lg:mr-6 hover:text-green-500">Contact</li>
            </ul>
          </div>
          <div className="text-3xl flex text-green-500 items-center justify-center">
            <button className="border border-orange-400 rounded-full mr-2 lg:mr-3 p-2 text-center hover:bg-orange-400 relative">
              <FontAwesomeIcon
                className="text-lg lg:text-xl"
                icon={faMagnifyingGlass}
              />
            </button>
            <FontAwesomeIcon className="mr-2 lg:mr-3" icon={faLock} />
            <FontAwesomeIcon className="mr-2 lg:mr-3" icon={faUser} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
