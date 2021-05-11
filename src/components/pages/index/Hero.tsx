import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import InternetIcon from "../../../assets/icons/network_check.svg"
import Wave from "../../../assets/icons/wave.svg"

const Hero = () => {
  return (
    <section id="hero-banner" className="relative w-100 h-hero overflow-hidden">
      <StaticImage
        src="../../assets/images/hero.jpg"
        alt="Hero image"
        placeholder="blurred"
        layout="fullWidth"
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="absolute w-screen top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4">
        <div className="container grid grid-cols-2 gap-4">
          <div className="col-span-2 xl:col-span-1 text-white">
            <div className="flex items-center pb-4">
              <InternetIcon className="text-secondary inline-block fill-current h-6 w-6 mr-1" />
              <p className="text-white">Tackos Fiber Internet</p>
            </div>
            <h1 className="capitalize mb-3">
              Built for <span className="text-primary">extreme</span> speeds
            </h1>
            <p className="text-white my-7">
              We provide the fastest and most reliable internet speeds at
              affordable prices with no surprises.
            </p>
            <span className="text-2xl font-bold border-b-2 border-secondary">
              NO HIDDEN FEES. NO CONTRACTS. LIFETIME PRICE.
            </span>
            <br/>
            <button className="btn btn-primary mt-10">
              Sign Up For Fiber Internet
            </button>
          </div>
        </div>
      </div>
      <Wave className="absolute bottom-0 left-0 w-full"
      />
    </section>
  )
}

export default Hero
