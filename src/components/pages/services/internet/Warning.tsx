import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import TrophyIcon from "../../../../assets/icons/trophy.svg"

const Warning = () => {
  return (
    <section id="Warning" className="bg-white">
      <div className="container py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gab-16">
          <div className="order-2 lg:order-1 px-2 lg:px-5">
            <TrophyIcon className="fill-current inline-block text-primary-dark m-auto w-7 h-7 bg-primary-light rounded-lg p-1" />
            <p className="inline-block text-primary pl-2 mb-3">
              Tackis Internet
            </p>
            <h2 className="mb-5">
              A few things to note about Tackis Fiber Internet
            </h2>
            <p className="mb-3">
              We don't like slow internet, hidden fees, contracts and
              especially, fine print. So let's lay it all out on the table.
              Tackis will provide a modem capable of extreme internet speeds but
              we do not supply wireless routers. We feel renting routers to our
              customers is a money grab and ask our customers to{" "}
              <strong>bring their own routers</strong>. Your router must support
              extreme speeds to take full advantage of fiber internet.
            </p>
            <p className="mb-5">
              Tackis fiber internet is not available in every Austin
              neighborhood yet. We are working hard to lay down the necessary
              infrastructure to support extreme internet speeds throughout
              Austin but we can only do one neighborhood at a time. If you'd
              like us in your area,{" "}
              <strong>please register and have your friends register</strong> so
              we can prioritize your neighborhood.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
          <div className="relative p-5 self-center order-1 lg:order-2">
            <div className="absolute bottom-0 left-0 w-full h-4/5 bg-primary"></div>
            <StaticImage
              src="../../../../assets/images/router.jpg"
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

export default Warning
