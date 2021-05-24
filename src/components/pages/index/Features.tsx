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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-16 text-center">
          <div className="relative overflow-hidden bg-white shadow-lg p-8">
            <RocketIcon className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 w-64 h-64 fill-current text-primary opacity-5" />
            <RocketIcon className="fill-current text-primary m-auto w-20 h-20 pb-5" />
            <h3 className="mb-5 capitalize">Speeds up to 1Gbps</h3>
            <p className="mb-5">
              Our fiber backbone gets you internet speeds ranging from 100Mbps
              to 1000Mbps.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
          <div className="relative overflow-hidden bg-white shadow-lg p-5">
            <ShieldIcon className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 w-64 h-64 fill-current text-primary opacity-5" />
            <ShieldIcon className="fill-current text-primary m-auto w-20 h-20 pb-5" />
            <h3 className="mb-5 capitalize">Reliable Service</h3>
            <p className="mb-5">
              Our state of the art fiber infrastructure has a 99.9% uptime
              guarantee to get you, and keep you online.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
          <div className="relative overflow-hidden bg-white shadow-lg p-5 sm:col-span-2 sm:w-1/2 md:col-span-1 md:w-full">
            <FingerTapIcon className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 w-64 h-64 fill-current text-primary opacity-5" />
            <FingerTapIcon className="fill-current text-primary m-auto w-20 h-20 pb-5" />
            <h3 className="mb-5 capitalize">Easy Billing</h3>
            <p className="mb-5">
              With Tackis you get straight forward billing with no contracts, no
              hidden fees and a lifetime price guarantee.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
