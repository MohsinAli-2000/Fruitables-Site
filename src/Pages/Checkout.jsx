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

      <div className="flex flex-col md:flex-row mx-2 md:mx-16 my-36">
        <div className="text-custom-black w-full md:w-2/4">
          <h1 className="text-custom-black text-3xl md:text-5xl font-semibold">
            Billing details
          </h1>
          <div className="mt-2 md:mt-10">
            <div className="flex flex-col w-full">
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col md:w-2/4">
                  <label className="text-custom-black text-lg md:text-xl my-3">
                    First Name<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    className="border-2 border-custom-black rounded-xl  p-2 outline-custom-green outline-2"
                  />
                </div>
                <div className="flex flex-col md:ml-6 md:w-2/4">
                  <label className="text-custom-black text-lg md:text-xl my-3">
                    Last Name<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    className="border-2 border-custom-black rounded-xl  p-2 outline-custom-green outline-2"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <label className="text-custom-black text-lg md:text-xl my-3">
                  Company Name<sup>*</sup>
                </label>
                <input
                  type="text"
                  className="border-2 border-custom-black rounded-xl  p-2 outline-custom-green outline-2"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-custom-black text-lg md:text-xl my-3">
                  Address<sup>*</sup>
                </label>
                <input
                  type="text"
                  placeholder="House Number Street Name"
                  className="border-2 border-custom-black rounded-xl  p-2 outline-custom-green outline-2"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-custom-black text-lg md:text-xl my-3">
                  Town/City<sup>*</sup>
                </label>
                <input
                  type="text"
                  className="border-2 border-custom-black rounded-xl  p-2 outline-custom-green outline-2"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-custom-black text-lg md:text-xl my-3">
                  Country<sup>*</sup>
                </label>
                <input
                  type="text"
                  className="border-2 border-custom-black rounded-xl  p-2 outline-custom-green outline-2"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-custom-black text-lg md:text-xl my-3">
                  Postcode/Zip<sup>*</sup>
                </label>
                <input
                  type="text"
                  className="border-2 border-custom-black rounded-xl  p-2 outline-custom-green outline-2"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-custom-black text-lg md:text-xl my-3">
                  Mobile<sup>*</sup>
                </label>
                <input
                  type="text"
                  className="border-2 border-custom-black rounded-xl  p-2 outline-custom-green outline-2"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-custom-black text-lg md:text-xl my-3">
                  Email Address<sup>*</sup>
                </label>
                <input
                  type="text"
                  className="border-2 border-custom-black rounded-xl  p-2 outline-custom-green outline-2"
                />
              </div>
              <label className="my-4 text-lg md:text-xl text-custom-black w-fit">
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4 p-2 border border-custom-black rounded"
                  value="Create an account?"
                />
                Create an account?
              </label>
              <hr />
              <label className="my-4 text-lg md:text-xl text-custom-black w-fit">
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4 p-2 border border-custom-black rounded"
                  value="Create an account?"
                />
                Ship to a different address?
              </label>
            </div>
            <textarea
              className="w-full p-2 border border-custom-black rounded-xl outline-custom-green outline-2 text-lg md:text-xl"
              placeholder="Order Notes (Optional)"
              name=""
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>
        </div>
        <div className="w-fit mt-10 md:mt-20 md:ml-24">
          <table className="w-fit text-custom-black">
            <thead className="text-md md:text-lg text-custom-black border-black border-b-2">
              <tr>
                <th className="p-3 w-1/6 text-left">Products</th>
                <th className="p-3 w-1/6 text-left">Name</th>
                <th className="p-3 w-1/6 text-left">Price</th>
                <th className="p-3 w-1/6 text-left">Quantity</th>
                <th className="p-3 w-1/6 text-left hidden md:table-cell">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="text-lg text-custom-black font-normal">
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
                <td className="p-3 text-left">2.00 $</td>
                <td className="p-3 text-left hidden md:table-cell">4.00 $</td>
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
                <td className="p-3 text-left">2.00 $</td>
                <td className="p-3 text-left  hidden md:table-cell">4.00 $</td>
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
                <td className="p-3 text-left">2.00 $</td>
                <td className="p-3 text-left hidden md:table-cell">4.00 $</td>
              </tr>
            </tbody>
          </table>
          <div className="my-16 text-lg md:text-xl text-custom-black text-right">
            <span className="mx-3">Subtotal</span>
            <span className="border-y-2 p-3">12.00 $</span>
          </div>
          <hr />
          <div className="my-16 text-md md:text-xl text-custom-black">
            <div className="flex items-center justify-end">
              <span>Shipping</span>
              <div className="ml-8 flex flex-col">
                <label className="text-lg md:text-xl text-custom-black w-fit">
                  <input
                    type="checkbox"
                    className="mr-2 w-4 h-4 p-2 border border-custom-black rounded-xl"
                    value="Create an account?"
                  />
                  Free Shipping?
                </label>
                <label className="text-lg md:text-xl text-custom-black w-fit">
                  <input
                    type="checkbox"
                    className="mr-2 w-4 h-4 p-2 border border-custom-black rounded-xl"
                    value="Create an account?"
                  />
                  Flat rate: $15.00
                </label>
                <label className="text-lg md:text-xl text-custom-black w-fit">
                  <input
                    type="checkbox"
                    className="mr-2 w-4 h-4 p-2 border border-custom-black rounded-xl"
                    value="Create an account?"
                  />
                  Local Pickup: $8.
                </label>
              </div>
            </div>
            <hr className="mt-16" />
            <div className="my-16 text-lg md:text-xl text-custom-black text-right">
              <span className="mx-3">Subtotal</span>
              <span className="border-y-2 p-3">20.00 $</span>
            </div>
            <hr />
            <div className="my-6">
              <label className="text-lg md:text-xl text-custom-black w-fit">
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4 p-2 border border-custom-black rounded-xl"
                  value="Direct Bank Transfers"
                />
                Direct Bank Transfer
              </label>
              <p className="max-w-xl text-md my-4">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </div>
            <hr />
            <div className="my-6">
              <label className="text-lg md:text-xl text-custom-black w-fit">
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4 p-2 border border-custom-black rounded-xl"
                  value="Check Payments"
                />
                Check Payments
              </label>
            </div>
            <hr />
            <div className="my-6">
              <label className="text-lg md:text-xl text-custom-black w-fit">
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4 p-2 border border-custom-black rounded-xl"
                  value="Check Payments"
                />
                Cash On Delivery
              </label>
            </div>
            <hr />
            <div className="my-6">
              <label className="text-lg md:text-xl text-custom-black w-fit">
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4 p-2 border border-custom-black rounded-xl"
                  value="Check Payments"
                />
                Paypal
              </label>
            </div>
            <hr />
            <button className="text-xl text-custom-green font-semibold hover:text-white hover:bg-custom-orange transition-all duration-1000 my-6 w-full py-4 border border-custom-orange rounded-lg">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
