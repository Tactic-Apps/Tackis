import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Navigation = () => {
  const [showMobileLinks, setShowMobileLinks] = useState(false)

  const toggleMobileLinks = () => {
    setShowMobileLinks(prevState => !prevState)
  }
  return (
    <nav className="p-5 w-full bg-gray">
      <div className="container flex flex-wrap items-center ">
        <Link to="/" className="mr-auto">
          <StaticImage
            src="../assets/images/logo.png"
            alt="Tackis Logo"
            placeholder="blurred"
            layout="fixed"
            width={140}
            height={40}
          />
        </Link>
        <div className="flex md:hidden">
          <button onClick={toggleMobileLinks}>
            <StaticImage
              src="../assets/images/burger-menu.png"
              alt="Menu Open"
              placeholder="blurred"
              layout="fixed"
              width={40}
              height={40}
              className={showMobileLinks ? "hidden" : "block"}
            />
            <StaticImage
              src="../assets/images/close-window.png"
              alt="Menu Open"
              placeholder="blurred"
              layout="fixed"
              width={40}
              height={40}
              className={showMobileLinks ? "block" : "hidden"}
            />
          </button>
        </div>
        <ul
          className={`transform-gpu transition-all md:transform-none md:flex items-center w-full md:w-auto font-bold text-white uppercase ${
            showMobileLinks ? "translate-y-0" : "-translate-y-56"
          }`}
        >
          <li
            className={`md:inline-block p-3 pb-3 pt-5 md:py-2 md:pr-3 border-b-2 border-gray-light md:border-none ${
              showMobileLinks ? "block" : "hidden"
            }`}
          >
            <Link to="/services/internet" className="hover:text-primary">
              Internet
            </Link>
          </li>
          <li
            className={`md:inline-block p-3 md:py-2 md:pr-3 border-b-2 border-gray-light md:border-none ${
              showMobileLinks ? "block" : "hidden"
            }`}
          >
            <Link to="/services/streaming" className="hover:text-primary">
              Streaming
            </Link>
          </li>
          <li
            className={`md:inline-block p-3 md:py-2 md:pr-3 border-b-2 border-gray-light md:border-none ${
              showMobileLinks ? "block" : "hidden"
            }`}
          >
            <Link to="/services/streaming" className="hover:text-primary">
              About
            </Link>
          </li>
          <li
            className={`md:inline-block p-3 md:py-2 md:pr-3 border-b-2 border-gray-light md:border-none ${
              showMobileLinks ? "block" : "hidden"
            }`}
          >
            <Link to="/services/streaming" className="hover:text-primary">
              Contact
            </Link>
          </li>
        </ul>
        <div
          className={`transform md:transform-none transition-all w-full md:w-auto ${
            showMobileLinks ? "translate-y-0" : "-translate-y-56"
          }`}
        >
          <button
            className={`btn btn-ghost mt-5 w-full md:w-auto md:mt-0 md:ml-3 md:inline-block ${
              showMobileLinks ? "" : "hidden"
            }`}
          >
            Get Fiber
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
