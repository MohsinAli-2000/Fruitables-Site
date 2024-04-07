import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Contact = () => {
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
        <h1 className="text-5xl text-white font-bold">Contact</h1>
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
            Contact{" "}
          </span>
        </div>
      </div>

      <div className="my-16 mx-12 rounded-xl bg-custom-white">
        <div className="flex flex-col justify-center items-center py-12 px-6">
          <h1 className="text-4xl text-custom-green font-semibold my-6">
            Get in touch
          </h1>
          <p className="text-xl text-custom-black text-center max-w-5xl">
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax & PHP in a few minutes. Just copy and paste
            the files, add a little code and you&apos;re done.
          </p>
          <a
            className="text-custom-green text-xl hover:text-custom-black"
            href="https://htmlcodex.com/contact-form/"
          >
            Download Now
          </a>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13390.34145426364!2d72.8300856864391!3d32.96195493120086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3920677aafeaf1e3%3A0x3cc1ef9f9437a947!2sChakwal%20City%2C%20Chakwal%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1712397262191!5m2!1sen!2s"
            className="border rounded-xl h-96 w-full my-12"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="flex w-full text-custom-black flex-col md:flex-row">
            <div className="w-full  md:w-2/4">
              <input
                type="text"
                placeholder="Your Name"
                className="text-xl w-full rounded-xl p-4 my-4 outline-custom-green outline-2"
              />
              <input
                type="text"
                placeholder="Enter Your Email"
                className="text-xl w-full rounded-xl p-4 my-4 outline-custom-green outline-2"
              />
              <textarea
                name="Your Message"
                placeholder="Your Message"
                className="text-xl w-full rounded-xl p-4 my-4 outline-custom-green outline-2"
                cols="30"
                rows="5"
              ></textarea>
              <button className="text-xl text-custom-green font-semibold hover:text-white hover:bg-custom-orange transition-all duration-1000 my-6 w-full py-4 border border-custom-orange rounded-lg">
                Submit
              </button>
            </div>
            <div className="w-full  md:ml-8  md:w-2/4">
              <div className="bg-white flex my-4 p-6 rounded-xl">
                <span className="text-4xl text-custom-green">
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <div className="mx-6">
                  <h4 className="text-2xl font-semibold">Address</h4>
                  <p className="text-md my-2">123 Street New York.USA</p>
                </div>
              </div>
              <div className="bg-white flex my-4 p-6 rounded-xl">
                <span className="text-4xl text-custom-green">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <div className="mx-6">
                  <h4 className="text-2xl font-semibold">Mail Us</h4>
                  <p className="text-md my-2">info@example.com</p>
                </div>
              </div>
              <div className="bg-white flex my-4 p-6 rounded-xl">
                <span className="text-4xl text-custom-green">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <div className="mx-6">
                  <h4 className="text-2xl font-semibold">Telephone</h4>
                  <p className="text-md my-2">(+012) 3456 7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
