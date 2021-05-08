import React from "react"
import { Link } from "gatsby"
import FacebookIcon from "../assets/icons/facebook.svg"
import Twitter from "../assets/icons/twitter.svg"
import LinkedIn from "../assets/icons/linkedin.svg"

const Header = () => (
  <header className="bg-gray p-2 border-b-2 border-gray-light text-sm text-white">
    <div className="container flex md:flex-wrap flex-col md:flex-row items-center">
      <div className="md:mr-auto">
        <a href="tel:8002147435">
          <span className="text-primary">Call Now At: </span>
          800.214.7435
        </a>
      </div>
      <div className="flex items-center mt-4 md:mt-0">
        <ul className="flex">
          <li className="mr-4">
            <Link to="/myaccount" className="hover:text-primary">
              My Account
            </Link>
          </li>
          <li className="mr-4">
            <Link to="/register" className="hover:text-primary">
              Register
            </Link>
          </li>
        </ul>
        <div className="flex border-l-2 border-gray-light pl-4">
          <FacebookIcon className="w-6 h-6 fill-current mr-3 hover:text-primary hover:cursor-pointer" />
          <Twitter className="w-6 h-6 fill-current mr-3 hover:text-primary hover:cursor-pointer" />
          <LinkedIn className="w-6 h-6 fill-current mr-3 hover:text-primary hover:cursor-pointer" />
        </div>
      </div>
    </div>
  </header>
)

export default Header
