import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import QuoteLeftIcon from "../../../assets/icons/quote-left.svg"
import QuoteRightIcon from "../../../assets/icons/quote-right.svg"

const Testimonial = ({ image, imageAlt, name, location, testimonial }) => {
  const imageQuery = getImage(image)
  return (
    <div className="grid grid-cols-6 gap-1 items-center shadow-2xl mr-0 lg:mr-5 p-5">
      <div className="col-span-6 md:col-span-2 text-center mb-5 md:mb-0">
        <GatsbyImage
          image={imageQuery}
          alt={imageAlt}
          className="rounded-full m-auto"
        />
        <h4 className="text-lg">{name}</h4>
        <p className="text-sm">- {location}</p>
      </div>
      <div className="relative col-span-6 md:col-span-4">
        <QuoteLeftIcon className="float-left w-5 h-5 fill-current text-gray-300 mr-2" />
        <p>
          {testimonial}
          <QuoteRightIcon className="inline-block w-5 h-5 fill-current text-gray-300 ml-2" />
        </p>
      </div>
    </div>
  )
}

export default Testimonial
