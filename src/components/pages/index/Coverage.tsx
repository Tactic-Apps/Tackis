import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Coverage = () => {
  return (
    <section className="relative w-full py-36 sm:py-24">
      <StaticImage
        src="../../../assets/images/austin.jpg"
        alt="Austin Texas Cityscape"
        placeholder="blurred"
        layout="fullWidth"
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="bg-black opacity-70 absolute top-0 left-0 w-full h-full"></div>
      <div className="absolute w-full top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4">
        <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-center items-center">
          <div>
            <h3 className="capitalize text-white">
              Call us now to get fiber internet
            </h3>
            <a
              href="tel:9002147435"
              className="text-secondary text-4xl font-bold"
            >
              1 (800) 214-7435
            </a>
          </div>
          <div className="hidden xl:block"></div>
          <div className="md:text-right">
            <button className="btn btn-secondary capitalize mt-5 md:mt-0">
              Check availability in your area
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Coverage
