import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const GoTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenScroll = () => {
    let hideScroll = 200;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (windowScroll > hideScroll) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);
    return () => window.removeEventListener("scroll", listenScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            className="w-12 h-12  flex items-center justify-center bg-custom-green text-black rounded-full hover:bg-opacity-85 focus:outline-none"
            onClick={GoTop}
          >
            <FontAwesomeIcon icon={faArrowUp} className="text-xl" />
          </button>
        </div>
      )}
    </>
  );
};

export default GoTop;
