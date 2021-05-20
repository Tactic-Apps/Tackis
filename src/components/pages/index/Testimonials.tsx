import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import MegaphoneIcon from "../../../assets/icons/megaphone.svg"
import QuoteLeftIcon from "../../../assets/icons/quote-left.svg"
import QuoteRightIcon from "../../../assets/icons/quote-right.svg"
import Carousel, { Settings } from "../../Carousel"

const Testimonials = () => {
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

  return (
    <section id="Testimonials" className="bg-white mb-20 py-16">
      <div className="text-center m-auto max-w-prose">
        <MegaphoneIcon className="fill-current text-primary-dark m-auto w-7 h-7 bg-primary-light rounded-lg p-1" />
        <p className="text-primary pt-2 pb-3">Tackos Testimonials</p>
        <h2>What our customers have to say</h2>
      </div>
      <div className="container px-16 md:px-24 py-20">
        <Carousel {...settings}>
          <div className="grid grid-cols-6 gap-1 items-center">
            <div className="col-span-6 md:col-span-2 text-center">
              <StaticImage
                src="../../../assets/images/lisa-testimonial.jpg"
                alt="Lisa Adams Photo"
                placeholder="blurred"
                layout="fixed"
                width={64}
                height={64}
                className="rounded-full m-auto"
              />
              <h4 className="text-lg">Lisa Adams</h4>
              <p className="text-sm">- Conroe Lake</p>
            </div>
            <div className="relative col-span-6 md:col-span-4">
              <QuoteLeftIcon className="float-left w-4 h-4 fill-current text-gray-300 mr-2" />
              <p>
                You guys have definitely lived up to everything you said you
                would do... very refreshing these days.
                <QuoteRightIcon className="inline-block w-4 h-4 fill-current text-gray-300 ml-2" />
              </p>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-1 items-center border border-primary-light">
            <div className="col-span-6 md:col-span-2 text-center">
              <StaticImage
                src="../../../assets/images/lisa-testimonial.jpg"
                alt="Lisa Adams Photo"
                placeholder="blurred"
                layout="fixed"
                width={64}
                height={64}
                className="rounded-full m-auto"
              />
              <h4 className="text-lg">Lisa Adams</h4>
              <p className="text-sm">- Conroe Lake</p>
            </div>
            <div className="relative col-span-6 md:col-span-4">
              <QuoteLeftIcon className="float-left w-4 h-4 fill-current text-gray-300 mr-2" />
              <p>
                You guys have definitely lived up to everything you said you
                would do... very refreshing these days.
                <QuoteRightIcon className="inline-block w-4 h-4 fill-current text-gray-300 ml-2" />
              </p>
            </div>
          </div>
        </Carousel>
        {/*<Slider {...settings}>
          <div className="grid grid-cols-6 gap-1 items-center border border-primary-light">
            <div className="col-span-6 md:col-span-2 text-center">
              <StaticImage
                src="../../../assets/images/lisa-testimonial.jpg"
                alt="Lisa Adams Photo"
                placeholder="blurred"
                layout="fixed"
                width={64}
                height={64}
                className="rounded-full m-auto"
              />
              <h4 className="text-lg">Lisa Adams</h4>
              <p className="text-sm">- Conroe Lake</p>
            </div>
            <div className="relative col-span-6 md:col-span-4">
              <QuoteLeftIcon className="float-left w-4 h-4 fill-current text-gray-300 mr-2" />
              <p>
                You guys have definitely lived up to everything you said you
                would do... very refreshing these days.
                <QuoteRightIcon className="inline-block w-4 h-4 fill-current text-gray-300 ml-2" />
              </p>
            </div>
          </div>
          <div className="grid grid-cols-6 items-center">
            <div className="col-span-6 md:col-span-2 text-center">
              <StaticImage
                src="../../../assets/images/lisa-testimonial.jpg"
                alt="Lisa Adams Photo"
                placeholder="blurred"
                layout="fixed"
                width={64}
                height={64}
                className="rounded-full m-auto"
              />
              <h4 className="text-lg">Lisa Adams</h4>
              <p className="text-sm">- Conroe Lake</p>
            </div>
            <div className="col-span-6 md:col-span-4">
              <p className="mb-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio, nobis quis in officia expedita architecto ducimus,
                similique est dignissimos, eius quod amet
              </p>
            </div>
          </div>
          <div className="grid grid-cols-6 items-center">
            <div className="col-span-6 md:col-span-2 text-center">
              <StaticImage
                src="../../../assets/images/lisa-testimonial.jpg"
                alt="Lisa Adams Photo"
                placeholder="blurred"
                layout="fixed"
                width={64}
                height={64}
                className="rounded-full m-auto"
              />
              <h4 className="text-lg">Lisa Adams</h4>
              <p className="text-sm">- Conroe Lake</p>
            </div>
            <div className="col-span-6 md:col-span-4">
              <p className="mb-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio, nobis quis in officia expedita architecto ducimus,
                similique est dignissimos, eius quod amet
              </p>
            </div>
          </div>
          <div className="grid grid-cols-6 items-center">
            <div className="col-span-6 md:col-span-2 text-center">
              <StaticImage
                src="../../../assets/images/lisa-testimonial.jpg"
                alt="Lisa Adams Photo"
                placeholder="blurred"
                layout="fixed"
                width={64}
                height={64}
                className="rounded-full m-auto"
              />
              <h4 className="text-lg">Lisa Adams</h4>
              <p className="text-sm">- Conroe Lake</p>
            </div>
            <div className="col-span-6 md:col-span-4">
              <p className="mb-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio, nobis quis in officia expedita architecto ducimus,
                similique est dignissimos, eius quod amet
              </p>
            </div>
          </div>
  </Slider>*/}
      </div>
    </section>
  )
}

export default Testimonials
