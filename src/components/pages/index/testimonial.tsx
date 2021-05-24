import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import QuoteLeftIcon from "../../../assets/icons/quote-left.svg"
import QuoteRightIcon from "../../../assets/icons/quote-right.svg"

type TestimonialData = {
  image: any
  imageAlt: string
  name: string
  location: string
  testimonial: string
}

type Props = {
  testimonialData: TestimonialData[]
}

const testimonial = ({ testimonialData }: Props): React.ReactNodeArray => {
  let testimonials: React.ReactNodeArray = []
  testimonialData.map(settings => {
    testimonials.push(
      <div
        key={Math.random()}
        className="grid grid-cols-6 gap-1 items-center shadow-xl mr-0 lg:mx-3 p-5"
      >
        <div className="col-span-6 md:col-span-2 text-center mb-5 md:mb-0">
          <GatsbyImage
            image={getImage(settings.image)}
            alt={settings.imageAlt}
            className="rounded-full m-auto"
          />
          <h4 className="text-lg">{settings.name}</h4>
          <p className="text-sm">- {settings.location}</p>
        </div>
        <div className="relative col-span-6 md:col-span-4">
          <QuoteLeftIcon className="float-left w-5 h-5 fill-current text-gray-300 mr-2" />
          <p>
            {settings.testimonial}
            <QuoteRightIcon className="inline-block w-5 h-5 fill-current text-gray-300 ml-2" />
          </p>
        </div>
      </div>
    )
  })
  return testimonials
}

export default testimonial
