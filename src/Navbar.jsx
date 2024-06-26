import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faLock,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [Dropdown, setDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setDropdown(false);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setIsOpen(false);
    setDropdown(false);
  };

  return (
    <>
      <div className="mx-0 px-4 md:px-16 z-20 bg-white p-2 sticky top-0">
        {/* Navbar for small devices */}
        <div className="flex justify-between items-center mt-3 lg:mt-5 mb-3 lg:mb-5 lg:hidden relative">
          <h1 className="text-custom-green cursor-pointer text-4xl lg:text-5xl font-extrabold">
            Fruitables
          </h1>
          <button onClick={toggleMenu}>
            <FontAwesomeIcon
              className="cursor-pointer text-custom-green text-2xl"
              icon={faBars}
            />
          </button>
          {isOpen && (
            <div className="text-lg opacity-80 absolute left-0 w-full top-full">
              <ul className="bg-gray-100 opacity-100 transition-opacity duration-300 ease-in-out rounded-md text-black p-2 lg:p-4">
                <li
                  className={`mr-2 lg:mr-6 cursor-pointer ${
                    activeMenu === "home" ? "text-custom-green" : ""
                  }`}
                >
                  <NavLink to="/" onClick={() => handleMenuClick("home")}>
                    Home
                  </NavLink>
                </li>
                <li
                  className={`mr-2 lg:mr-6 cursor-pointer hover:text-custom-green ${
                    activeMenu === "shop" ? "text-custom-green" : ""
                  }`}
                >
                  <NavLink to="/shop" onClick={() => handleMenuClick("shop")}>
                    Shop
                  </NavLink>
                </li>
                <li
                  className={`mr-2 lg:mr-6 cursor-pointer hover:text-custom-green ${
                    activeMenu === "shop-details" ? "text-custom-green" : ""
                  }`}
                >
                  <NavLink
                    to="/shop-details"
                    onClick={() => handleMenuClick("shop-details")}
                  >
                    Shop Details
                  </NavLink>
                </li>
                <li className="mr-2 lg:mr-6 cursor-pointer hover:text-custom-green">
                  <div
                    className="mx-4 lg:mx-16 relative z-50"
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    Pages <FontAwesomeIcon icon={faCaretDown} />
                    {Dropdown && (
                      <div className="text-lg opacity-80 absolute left-0 w-full top-full z-40">
                        <ul className="bg-custom-white duration-300 ease-in-out rounded-md text-custom-black p-2 lg:p-4 z-50">
                          <li className="cursor-pointer w-full hover:text-custom-green hover:bg-custom-orange">
                            <NavLink
                              to="/cart"
                              onClick={() => handleMenuClick("cart")}
                            >
                              Cart
                            </NavLink>
                          </li>
                          <li className="cursor-pointer hover:text-custom-green hover:bg-custom-orange">
                            <NavLink
                              to="/checkout"
                              onClick={() => handleMenuClick("checkout")}
                            >
                              Checkout
                            </NavLink>
                          </li>
                          <li className="cursor-pointer hover:text-custom-green hover:bg-custom-orange">
                            <NavLink
                              to="/testimonials"
                              onClick={() => handleMenuClick("testimonials")}
                            >
                              Testimonials
                            </NavLink>
                          </li>
                          <li className="cursor-pointer hover:text-custom-green hover:bg-custom-orange">
                            <NavLink
                              to="/404-page"
                              onClick={() => handleMenuClick("404-page")}
                            >
                              404 page
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </li>
                <li
                  className={`mr-2 lg:mr-6 hover:text-custom-green ${
                    activeMenu === "contact" ? "text-custom-green" : ""
                  }`}
                >
                  <NavLink
                    to="/contact"
                    onClick={() => handleMenuClick("contact")}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* Navbar for large devices */}
        <div className="hidden lg:flex items-center justify-between mt-3 lg:mt-5 mb-3 lg:mb-5 relative z-20">
          <h1 className="text-custom-green cursor-pointer text-4xl lg:text-5xl font-extrabold">
            Fruitables
          </h1>
          <div className="text-lg cursor-pointer opacity-80">
            <ul className="flex">
              <li
                className={`mr-2 lg:mr-6 ${
                  activeMenu === "home" ? "text-custom-green" : ""
                }`}
              >
                <NavLink to="/" onClick={() => handleMenuClick("home")}>
                  Home
                </NavLink>
              </li>
              <li
                className={`mr-2 lg:mr-6 hover:text-custom-green ${
                  activeMenu === "shop" ? "text-custom-green" : ""
                }`}
              >
                <NavLink to="/shop" onClick={() => handleMenuClick("shop")}>
                  Shop
                </NavLink>
              </li>
              <li
                className={`mr-2 lg:mr-6 hover:text-custom-green ${
                  activeMenu === "shop-details" ? "text-custom-green" : ""
                }`}
              >
                <NavLink
                  to="/shop-details"
                  onClick={() => handleMenuClick("shop-details")}
                >
                  Shop Details
                </NavLink>
              </li>
              <li className="mr-2 lg:mr-6 hover:text-custom-green">
                <div
                  className="relative"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  Pages <FontAwesomeIcon icon={faCaretDown} />
                  {Dropdown && (
                    <div className="absolute left-0 top-full z-30">
                      <ul className="bg-gray-100 duration-500 ease-in-out rounded-md w-48 p-2 text-black">
                        <li className="hover:text-custom-green hover:bg-custom-orange">
                          <NavLink
                            to="/cart"
                            onClick={() => handleMenuClick("cart")}
                          >
                            Cart
                          </NavLink>
                        </li>
                        <li className="hover:text-custom-green hover:bg-custom-orange">
                          <NavLink
                            to="/checkout"
                            onClick={() => handleMenuClick("checkout")}
                          >
                            Checkout
                          </NavLink>
                        </li>
                        <li className="hover:text-custom-green hover:bg-custom-orange">
                          <NavLink
                            to="/testimonials"
                            onClick={() => handleMenuClick("testimonials")}
                          >
                            Testimonials
                          </NavLink>
                        </li>
                        <li className="hover:text-custom-green hover:bg-custom-orange">
                          <NavLink
                            to="/404-page"
                            onClick={() => handleMenuClick("404-page")}
                          >
                            404 page
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
              <li
                className={`mr-2 lg:mr-6 hover:text-custom-green ${
                  activeMenu === "contact" ? "text-custom-green" : ""
                }`}
              >
                <NavLink
                  to="/contact"
                  onClick={() => handleMenuClick("contact")}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="text-3xl flex text-custom-green items-center justify-center">
            <button className="border border-custom-orange rounded-full flex justify-center items-center w-12 h-12 focus:outline-none hover:bg-custom-orange hover:text-green-600 mx-3">
              <FontAwesomeIcon
                className="text-lg lg:text-xl"
                icon={faMagnifyingGlass}
              />
            </button>

            <FontAwesomeIcon
              className="mr-2 lg:mr-3 hover:text-green-600 cursor-pointer"
              icon={faLock}
            />
            <FontAwesomeIcon
              className="mr-2 lg:mr-3 hover:text-green-600 cursor-pointer"
              icon={faUser}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
