import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Cart = () => {
  const [quantities, setQuantities] = useState([1, 1, 1]);

  const handleClick = (operation, index) => {
    const updatedQuantities = [...quantities];
    if (operation === "decrement" && updatedQuantities[index] > 1) {
      updatedQuantities[index] -= 1;
    } else if (operation === "increment") {
      updatedQuantities[index] += 1;
    }
    setQuantities(updatedQuantities);
  };

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
        <h1 className="text-5xl text-white font-bold">Cart</h1>
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
            Cart{" "}
          </span>
        </div>
      </div>

      <div className="mx-16 my-36">
        <div className="overflow-x-auto">
          <table className="w-full text-custom-black">
            <thead className="text-lg border-black border-b-2">
              <tr>
                <th className="p-3 w-1/6 text-left">Products</th>
                <th className="p-3 w-1/6 text-left">Name</th>
                <th className="p-3 w-1/6 text-left">Price</th>
                <th className="p-3 w-1/6 text-left">Quantity</th>
                <th className="p-3 w-1/6 text-left">Total</th>
                <th className="p-3 w-1/6 text-left">Handle</th>
              </tr>
            </thead>
            <tbody className="text-xl font-normal">
              <tr className="border-gray-200 border-b-2">
                <td className="p-3 text-left">
                  <img
                    src="/potato.jpg"
                    alt="image"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </td>

                <td className="p-3 text-left">Big Banana</td>
                <td className="p-3 text-left">2.99 $</td>
                <td className="p-3 text-left">
                  <button
                    className="p-2 mx-1 bg-custom-white font-extrabold rounded-full w-10 h-10 justify-center items-center inline-flex "
                    onClick={() => handleClick("decrement", 0)}
                  >
                    -
                  </button>{" "}
                  {quantities[0]}
                  <button
                    className="p-2 mx-1 bg-custom-white font-extrabold rounded-full w-10 h-10 justify-center items-center inline-flex"
                    onClick={() => handleClick("increment", 0)}
                  >
                    +
                  </button>
                </td>
                <td className="p-3 text-left">2.99 $</td>
                <td className="p-3 text-left">
                  <div className="flex items-center justify-center rounded-full cursor-pointer bg-custom-white w-12 h-12">
                    <div className="p-2">
                      <FontAwesomeIcon
                        icon={faXmark}
                        className="text-custom-red"
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-gray-200 border-b-2">
                <td className="p-3 text-left">
                  <img
                    src="/brocoli.jpg"
                    alt="image"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </td>

                <td className="p-3 text-left">Big Banana</td>
                <td className="p-3 text-left">2.99 $</td>
                <td className="p-3 text-left">
                  <button
                    className="p-2 mx-1 bg-custom-white font-extrabold rounded-full w-10 h-10 justify-center items-center inline-flex "
                    onClick={() => handleClick("decrement", 1)}
                  >
                    -
                  </button>{" "}
                  {quantities[1]}
                  <button
                    className="p-2 mx-1 bg-custom-white font-extrabold rounded-full w-10 h-10 justify-center items-center inline-flex"
                    onClick={() => handleClick("increment", 1)}
                  >
                    +
                  </button>
                </td>
                <td className="p-3 text-left">2.99 $</td>
                <td className="p-3 text-left">
                  <div className="flex items-center justify-center rounded-full cursor-pointer bg-custom-white w-12 h-12">
                    <div className="p-2">
                      <FontAwesomeIcon
                        icon={faXmark}
                        className="text-custom-red"
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-gray-200 border-b-2">
                <td className="p-3 text-left">
                  <img
                    src="/strawberry.jpg"
                    alt="image"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </td>

                <td className="p-3 text-left">Big Banana</td>
                <td className="p-3 text-left">2.99 $</td>
                <td className="p-3 text-left">
                  <button
                    className="p-2 mx-1 bg-custom-white font-extrabold rounded-full w-10 h-10 justify-center items-center inline-flex "
                    onClick={() => handleClick("decrement", 2)}
                  >
                    -
                  </button>{" "}
                  {quantities[2]}
                  <button
                    className="p-2 mx-1 bg-custom-white font-extrabold rounded-full w-10 h-10 justify-center items-center inline-flex"
                    onClick={() => handleClick("increment", 2)}
                  >
                    +
                  </button>
                </td>
                <td className="p-3 text-left">2.99 $</td>
                <td className="p-3 text-left">
                  <div className="flex items-center  justify-center rounded-full cursor-pointer bg-custom-white w-12 h-12">
                    <div className="p-2">
                      <FontAwesomeIcon
                        icon={faXmark}
                        className="text-custom-red"
                      />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-6">
          <input
            type="text"
            className="text-lg text-custom-black p-4 border-custom-black border-b-2 rounded-xl"
            placeholder="Coupon Code"
          />
          <button className="text-2xl text-custom-green font-semibold hover:text-white hover:bg-custom-orange transition-all duration-1000 ml-8 p-1 mt-2 md:mt-0 md:p-4 border border-custom-orange rounded-full">
            Apply Coupon
          </button>
        </div>
        <div className="flex justify-end lg:justify-end">
          <div className="bg-custom-white max-w-lg max-h-96 p-4 rounded-xl">
            <h3 className="text-custom-black text-4xl font-bold">
              Cart <span className="font-semibold">Total</span>
            </h3>
            <div className="text-custom-black flex justify-between my-4">
              <p className="text-xl font-bold">Subtotal:</p>
              <p className="text-lg font-thin">$96.00</p>
            </div>
            <div className="text-custom-black flex justify-between my-4">
              <p className="text-xl font-bold">Shipping</p>
              <p className="text-lg font-thin">
                Flat rate: $3.00
                <br />
                Shipping to Ukraine.
              </p>
            </div>
            <hr />
            <div className="text-custom-black flex justify-between my-4">
              <p className="text-xl font-bold">Total</p>
              <p className="text-lg font-thin">$99.00</p>
            </div>
            <hr />
            <button className=" text-xl mt-1  md:text-2xl text-custom-green font-semibold hover:text-white hover:bg-custom-orange transition-all duration-1000 my-6 ml-8 p-1 md:p-4  border border-custom-orange rounded-full">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
