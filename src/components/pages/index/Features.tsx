import React from "react"

import InternetIcon from "../../../assets/icons/network_check.svg"
import RocketIcon from "../../../assets/icons/rocket.svg"
import ShieldIcon from "../../../assets/icons/shield.svg"
import FingerTapIcon from "../../../assets/icons/one-finger-double-tap.svg"

const Features = () => {
  return (
    <section id="index-features">
      <div className="container my-24">
        <div className="text-center m-auto mb-16 max-w-prose">
          <InternetIcon className="fill-current text-primary-dark m-auto w-7 h-7 bg-primary-light rounded-lg p-1" />
          <p className="text-primary pt-2 pb-3">Tackis ISP Features</p>
          <h2>
            We provide fiber internet and TV streaming services to Austin Texas
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-16 text-center">
          <div className="relative overflow-hidden bg-white shadow-lg h-80 w-full">
            <RocketIcon className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 w-64 h-64 fill-current text-primary opacity-10" />
            <div className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 p-5 w-full">
              <RocketIcon className="fill-current text-primary m-auto w-20 h-20 pb-5" />
              <h3 className="mb-5 capitalize">Speeds up to 1Gbps</h3>
              <p className="mb-5">
                Our fiber backbone gets you internet speeds ranging from 100Mbps
                to 1000Mbps.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
          <div className="relative overflow-hidden bg-white shadow-lg h-80 w-full">
            <ShieldIcon className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 w-64 h-64 fill-current text-primary opacity-10" />
            <div className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 p-5 w-full">
              <ShieldIcon className="fill-current text-primary m-auto w-20 h-20 pb-5" />
              <h3 className="mb-5 capitalize">Reliable Service</h3>
              <p className="mb-5">
                Our state of the art fiber infrastructure has a 99.9% uptime
                guarantee to get you, and keep you online.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
          <div className="relative overflow-hidden bg-white shadow-lg h-80 w-full md:col-span-2 md:w-1/2 lg:col-span-1 lg:w-full">
            <FingerTapIcon className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 w-64 h-64 fill-current text-primary opacity-10" />
            <div className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 p-5 w-full">
              <FingerTapIcon className="fill-current text-primary m-auto w-20 h-20 pb-5" />
              <h3 className="mb-5 capitalize">Easy Billing</h3>
              <p className="mb-5">
                Get straight forward billing with no contracts, no hidden fees
                and a lifetime price guarantee.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
