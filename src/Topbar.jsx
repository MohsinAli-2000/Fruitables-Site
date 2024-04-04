import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Topbar = () => {
  return (
    <div>
      <div className="hidden mx-16 lg:flex justify-between p-2 lg:p-4 px-4 lg:px-8 text-white box-border border border-gray-300 rounded-tl-full rounded-tr-lg rounded-br-full rounded-bl-lg bg-custom-green">
          <div>
            <span className="cursor-pointer mr-3">
              <FontAwesomeIcon
                className="text-custom-orange mr-2"
                icon={faLocationDot}
              />
              123 Street, New York
            </span>
            <span className="cursor-pointer">
              <FontAwesomeIcon
                className="text-custom-orange mr-2"
                
                icon={faEnvelope}
              />
              Email@Example.com
            </span>
          </div>
          <div>
            <a className="m-1 lg:m-2 hover:text-custom-orange" href="#">
              Privacy Policy
            </a>
            /
            <a className="m-1 lg:m-2 hover:text-custom-orange" href="#">
              Terms of use
            </a>
            /
            <a className="m-1 lg:m-2 hover:text-custom-orange" href="#">
              Sales and refunds
            </a>
          </div>
        </div>
    </div>
  )
}

export default Topbar
