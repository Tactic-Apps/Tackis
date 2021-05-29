import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import InfoIcon from "../../../assets/icons/info-large-outline.svg"

const About = () => {
  return (
    <section id="About">
      <div className="container py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gab-16">
          <div className="order-2 lg:order-1 px-2 lg:px-5">
            <InfoIcon className="fill-current inline-block text-primary-dark m-auto w-7 h-7 bg-primary-light rounded-lg p-1" />
            <p className="inline-block text-primary pl-2 mb-3">About Tackis</p>
            <h2 className="mb-5">
              Trusted Internet Service Without The Hassle
            </h2>
            <p className="mb-3">
              Tackis founder Alex Johnson was trying to help his retired parents
              out in Cherrywood figure out why their internet bill was over $80
              per month for 10Mbps. After spending time figuring out all the
              hidden fees and negotiating a better price while locking into an
              extended contract, Alex figured there must be a better way. This
              is where the idea of Tackis was born.
            </p>
            <p className="mb-5">
              Alex partnered with Sean Stearns and together they established
              Tackis as a no nonsense fiber internet service provider. Their
              goal was, and still is, to provide customers with complete
              transparency on their bills and provide the fastest speeds in the
              industry at highly competitive prices. Every customer that comes
              on board is treated as family and together we're building company
              that leaves the competition in the dust.
            </p>
          </div>
          <div className="relative p-5 self-center order-1 lg:order-2">
            {/*<div className="absolute bottom-0 left-0 w-full h-4/5 bg-primary"></div>*/}
            <StaticImage
              src="../../../assets/images/about-internet.png"
              alt="Bring your own equipment"
              placeholder="blurred"
              layout="fullWidth"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
