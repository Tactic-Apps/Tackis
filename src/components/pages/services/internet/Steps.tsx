import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import TrophyIcon from "../../../../assets/icons/trophy.svg"
import Step from "./Step"

const Steps = () => {
  const stepsContent = [
    {
      heading: "Check Availability",
      paragraph:
        "Choose a plan below and enter your address to see if Tachis has open registration for internet in your area.",
    },
    {
      heading: "Sign Up For Internet",
      paragraph:
        "If fiber internet is not yet available in your area we'll notify as soon as our infrastructure is ready.",
    },
    {
      heading: "Spread The Word",
      paragraph:
        "Tell your friends and neighbors about Tachis Fiber Internet and help us bring blazing fast speeds to your area.",
    },
    {
      heading: "Enjoy!",
      paragraph:
        "Enjoy the fact that you have incredible internet speeds with a simple monthly bill that will never increase again.",
    },
  ]

  return (
    <section id="Steps" className="relative">
      <StaticImage
        src="../../../../assets/images/hero.jpg"
        alt="Hero image"
        placeholder="blurred"
        layout="fullWidth"
        className="absolute top-0 left-0 w-full h-full -z-20"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
      <div className="container py-24">
        <div className="text-center m-auto mb-16 max-w-prose text-white">
          <TrophyIcon className="fill-current text-primary-dark m-auto w-7 h-7 bg-primary-light rounded-lg p-1" />
          <p className="text-primary pt-2 pb-3">Tackis Internet Steps</p>
          <h2>How do I get Tackis Internet?</h2>
        </div>
        <Step stepsContent={stepsContent} />
      </div>
    </section>
  )
}

export default Steps
