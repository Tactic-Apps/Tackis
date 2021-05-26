import React from "react"

import RightArrowIcon from "../../../../assets/icons/arrow-right.svg"

type FeaturesArrayContent = {
  /** SVG Icon component */
  Icon: any
  /** Heading for feature block */
  heading: string
  /** Paragraph that comes after heading in feature block */
  paragraph: string
}

type Props = {
  featuresArray: FeaturesArrayContent[]
}

const Feature = ({ featuresArray }: Props) => {
  let features = featuresArray.map(feature => (
    <div
      key={feature.heading}
      className="bg-white shadow-xl py-7 px-7 xl:px-16 transition-colors border-2 border-white hover:border-primary-light"
    >
      <feature.Icon className="fill-current text-primary-dark bg-primary-light m-auto w-20 h-20 p-5 rounded-full bg-opacity-50" />
      <h3 className="my-5 capitalize">{feature.heading}</h3>
      <p className="mb-5">{feature.paragraph}</p>
      <a href="#Pricing">
        <button className="border border-gray-400 rounded-full leading-none text-gray-400 text-3xl focus:outline-none hover:border-primary-light transition duration-300">
          <RightArrowIcon className="fill-current h-10 w-10 hover:bg-primary-light hover:text-white rounded-full transform -translate-x-3 transition duration-300 hover:translate-x-0 p-2" />
        </button>
      </a>
    </div>
  ))
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center text-center gap-6 xl:gap-16">
      {features}
    </div>
  )
}

export default Feature
