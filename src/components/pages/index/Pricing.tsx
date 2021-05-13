import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import InternetIcon from "../../../assets/icons/network_check.svg"
import CheckIcon from "../../../assets/icons/tick.svg"

const Pricing = () => {
  return (
    <section id="Pricing" className="py-24">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="relative px-8 py-12 text-white w-full ">
          <InternetIcon className="p-4 w-20 h-20 border rounded-full bg-primary-light fill-current text-gray mb-5" />

          <div className="mb-1">FAST INTERNET</div>
          <h2 className="mb-7">100 Mbps</h2>
          <ul className="mb-10">
            <li className="flex items-center mb-5">
              <CheckIcon className="p-1 w-5 h-5 rounded-full bg-primary-light mr-2 text-white fill-current" />
              Stable Fiber Infrastructure
            </li>
            <li className="flex items-center mb-5">
              <CheckIcon className="p-1 w-5 h-5 rounded-full bg-primary-light mr-2 text-white fill-current" />
              Fast Speeds
            </li>
            <li className="flex items-center mb-5">
              <CheckIcon className="p-1 w-5 h-5 rounded-full bg-primary-light mr-2 text-white fill-current" />
              100 Mbps Up & Down
            </li>
            <li className="flex items-center mb-5">
              <CheckIcon className="p-1 w-5 h-5 rounded-full bg-primary-light mr-2 text-white fill-current" />
              Recommended for up to 10 Devices
            </li>
          </ul>
          <span className="text-lg">$</span>
          <span className="text-5xl p-1">65</span>
          <span className="text-lg">/mo</span>
          <div className="mt-7">
            <button className="btn btn-ghost-light">Check Now</button>
          </div>
          <StaticImage
            src="../../../assets/images/card-bg.jpg"
            alt="Pricing Background"
            placeholder="blurred"
            layout="fullWidth"
            className="absolute top-0 left-0 w-full h-full"
            style={{ zIndex: "-2" }}
          />
          <div
            className="bg-primary absolute top-0 left-0 w-full h-full opacity-80"
            style={{ zIndex: "-1" }}
          ></div>
        </div>
        <div className="relative px-8 py-12 text-white w-full ">
          <InternetIcon className="p-4 w-20 h-20 border rounded-full bg-secondary-light fill-current text-gray mb-5" />

          <div className="mb-1">FASTER INTERNET</div>
          <h2 className="mb-7">500 Mbps</h2>
          <ul className="mb-10">
            <li className="flex items-center mb-5">
              <CheckIcon className="p-1 w-5 h-5 rounded-full bg-gray-light mr-2 text-white fill-current" />
              Stable Fiber Infrastructure
            </li>
            <li className="flex items-center mb-5">
              <CheckIcon className="p-1 w-5 h-5 rounded-full bg-gray-light mr-2 text-white fill-current" />
              Faster Speeds
            </li>
            <li className="flex items-center mb-5">
              <CheckIcon className="p-1 w-5 h-5 rounded-full bg-gray-light mr-2 text-white fill-current" />
              500 Mbps Up & Down
            </li>
            <li className="flex items-center mb-5">
              <CheckIcon className="p-1 w-5 h-5 rounded-full bg-gray-light mr-2 text-white fill-current" />
              Recommended for up to 30 Devices
            </li>
          </ul>
          <span className="text-lg">$</span>
          <span className="text-5xl p-1">80</span>
          <span className="text-lg">/mo</span>
          <div className="mt-7">
            <button className="btn btn-secondary">Check Now</button>
          </div>
          <StaticImage
            src="../../../assets/images/card-bg.jpg"
            alt="Pricing Background"
            placeholder="blurred"
            layout="fullWidth"
            className="absolute top-0 left-0 w-full h-full"
            style={{ zIndex: "-2" }}
          />
        </div>
        <div className="relative px-8 py-12 text-white w-full ">
          <InternetIcon className="p-4 w-20 h-20 border rounded-full bg-primary-light fill-current text-gray mb-5" />

          <div className="mb-1">FASTEST INTERNET</div>
          <h2 className="mb-7">1000 Mbps</h2>
          <ul className="mb-10">
            <li className="flex items-center mb-5">
              <CheckIcon className="p-1 w-5 h-5 rounded-full bg-primary-light mr-2 text-white fill-current" />
              Stable Fiber Infrastructure
            </li>
            <li className="flex items-center mb-5">
              <CheckIcon className="p-1 w-5 h-5 rounded-full bg-primary-light mr-2 text-white fill-current" />
              Fastest Speeds
            </li>
            <li className="flex items-center mb-5">
              <CheckIcon className="p-1 w-5 h-5 rounded-full bg-primary-light mr-2 text-white fill-current" />
              1000 Mbps Up & Down
            </li>
            <li className="flex items-center mb-5">
              <CheckIcon className="p-1 w-5 h-5 rounded-full bg-primary-light mr-2 text-white fill-current" />
              Recommended for up to 100 Devices
            </li>
          </ul>
          <span className="text-lg">$</span>
          <span className="text-5xl p-1">90</span>
          <span className="text-lg">/mo</span>
          <div className="mt-7">
            <button className="btn btn-ghost-light">Check Now</button>
          </div>
          <StaticImage
            src="../../../assets/images/card-bg.jpg"
            alt="Pricing Background"
            placeholder="blurred"
            layout="fullWidth"
            className="absolute top-0 left-0 w-full h-full"
            style={{ zIndex: "-2" }}
          />
          <div
            className="bg-primary absolute top-0 left-0 w-full h-full opacity-80"
            style={{ zIndex: "-1" }}
          ></div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
