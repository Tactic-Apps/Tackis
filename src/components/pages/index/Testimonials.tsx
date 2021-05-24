import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import MegaphoneIcon from "../../../assets/icons/megaphone.svg"
import Carousel, { Settings } from "../../Carousel"
import testimonial from "./testimonial"

const Testimonials = () => {
  const imageQuery = useStaticQuery(
    graphql`
      fragment testimonialImageConfig on File {
        childImageSharp {
          gatsbyImageData(
            width: 64
            height: 64
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      query {
        lisa: file(relativePath: { eq: "lisa-testimonial.jpg" }) {
          ...testimonialImageConfig
        }
        chris: file(relativePath: { eq: "chris-testimonial.jpg" }) {
          ...testimonialImageConfig
        }
        ron: file(relativePath: { eq: "ron-testimonial.jpg" }) {
          ...testimonialImageConfig
        }
        beth: file(relativePath: { eq: "beth-testimonial.jpg" }) {
          ...testimonialImageConfig
        }
      }
    `
  )
  const settings: Settings = {
    dots: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: "md",
        slidesToShow: 1,
        dots: true,
      },
      {
        breakpoint: "lg",
        slidesToShow: 2,
        dots: true,
      },
      {
        breakpoint: "2xl",
        slidesToShow: 2,
        dots: true,
      },
    ],
  }
  const testimonialData = [
    {
      image: imageQuery.lisa,
      imageAlt: "Lisa Adams Photo",
      name: "Lisa Adams",
      location: "North Loop",
      testimonial:
        "You guys have definitely lived up to everything you said you would do... very refreshing these days.",
    },
    {
      image: imageQuery.chris,
      imageAlt: "Chris Lao Photo",
      name: "Chris Lao",
      location: "Cherrywood",
      testimonial:
        "I have noticed a marked increase over speed and reliability on both computer usage and TV streaming services. Could not be more pleased.",
    },
    {
      image: imageQuery.ron,
      imageAlt: "Ron Beeman Photo",
      name: "Ron Rotman",
      location: "South Menchaca",
      testimonial:
        "Thank you for being proactive and sending messages when you are doing system checks and things. We love having Tackis!",
    },
    {
      image: imageQuery.beth,
      imageAlt: "Beth Meyers Photo",
      name: "Beth Meyers",
      location: "Crestview",
      testimonial:
        "We got sick and tired of going over our monthly download limits with astronomical fees at the end of the month. Tackis gives us all the internet we want for a fraction of the price!",
    },
  ]
  return (
    <section id="Testimonials" className="bg-white py-16">
      <div className="text-center m-auto max-w-prose">
        <MegaphoneIcon className="fill-current text-primary-dark m-auto w-7 h-7 bg-primary-light rounded-lg p-1" />
        <p className="text-primary pt-2 pb-3">Tackis Testimonials</p>
        <h2>What our customers have to say</h2>
      </div>
      <Carousel {...settings}>{testimonial({ testimonialData })}</Carousel>
    </section>
  )
}

export default Testimonials
