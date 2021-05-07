import React, { useState } from "react"
import { Link } from "gatsby"

const Navigation = () => {
  const [showMobileLinks, setShowMobileLinks] = useState(false)

  const toggleMobileLinks = () => {
    setShowMobileLinks(prevState => !prevState)
  }
  return (
    <nav className="p-5 w-full bg-gray shadow-sm border-b ">
      <div className="container flex flex-wrap items-center ">
        <Link to="/" className="mr-auto">
          <img
            src="http://acmelogos.com/images/logo-1.svg"
            alt="ACME"
            width="120"
          />
        </Link>
        <div className="flex md:hidden">
          <button onClick={toggleMobileLinks}>
            <img
              className={showMobileLinks ? "hidden" : "block"}
              src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
              style={{ width: "40", height: "40" }}
            />
            <img
              className={showMobileLinks ? "block" : "hidden"}
              src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
              style={{ width: "40", height: "40" }}
            />
          </button>
        </div>
        <ul
          className={`transform-gpu transition-all md:transform-none md:flex items-center w-full md:w-auto font-bold text-white uppercase ${
            showMobileLinks ? "translate-y-0" : "-translate-y-56"
          }`}
        >
          <li
            className={`md:inline-block px-3 pb-3 pt-5 md:p-2 border-b-2 border-blue-900 md:border-none ${
              showMobileLinks ? "block" : "hidden"
            }`}
          >
            <Link to="/login" className="hover:text-blue-500">
              Login
            </Link>
          </li>
          <li
            className={`md:inline-block p-3 md:p-2 border-b-2 border-blue-900 md:border-none ${
              showMobileLinks ? "block" : "hidden"
            }`}
          >
            <Link to="/register" className="hover:text-blue-500">
              Register
            </Link>
          </li>
        </ul>
        <button className="btn btn-ghost">Get Fiber</button>
      </div>
    </nav>
  )
}

export default Navigation
