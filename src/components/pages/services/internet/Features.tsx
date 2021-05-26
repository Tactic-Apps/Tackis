import React from "react"

import Feature from "./Feature"

import InternetIcon from "../../../../assets/icons/network_check.svg"
import SpeedIcon from "../../../../assets/icons/speed.svg"
import InfinityIcon from "../../../../assets/icons/infinite.svg"
import NoMoneyIcon from "../../../../assets/icons/money_off.svg"
import RouterIcon from "../../../../assets/icons/router.svg"
import FingerTapIcon from "../../../../assets/icons/one-finger-double-tap.svg"
import PhoneIcon from "../../../../assets/icons/phone.svg"

const Features = () => {
  const features = [
    {
      Icon: SpeedIcon,
      heading: "Extreme Speeds",
      paragraph:
        "No more loading screens, our fiber backbone gets you internet speeds ranging from 100Mbps to 1000Mbps.",
    },
    {
      Icon: InfinityIcon,
      heading: "Unlimited Data",
      paragraph:
        "Stream, surf, download, game and work on multiple devices without worrying about additional usage fees.",
    },
    {
      Icon: NoMoneyIcon,
      heading: "Peace of Mind",
      paragraph:
        "You will never be charged hidden fees or sign any contracts. The price you pay is guaranteed for life.",
    },
    {
      Icon: RouterIcon,
      heading: "Bring Your Own Device",
      paragraph:
        "Get the best WIFI control and coverage in your home by bringing your own router and save on monthly equipment rental fees.",
    },
    {
      Icon: FingerTapIcon,
      heading: "Enhanced Account Control",
      paragraph:
        "Adjust your internet plan and payment methods while checking your equipment status and network uptime all through an online portal.",
    },
    {
      Icon: PhoneIcon,
      heading: "24 Hour Customer Service",
      paragraph:
        "If you're having trouble using self service through your online portal, our award winning customer service team is ready to help.",
    },
  ]
  return (
    <section id="features">
      <div className="container my-24">
        <div className="text-center m-auto mb-16 max-w-prose">
          <InternetIcon className="fill-current text-primary-dark m-auto w-7 h-7 bg-primary-light rounded-lg p-1" />
          <p className="text-primary pt-2 pb-3">Tackis Internet Features</p>
          <h2>
            We provide extreme speed fiber internet services to Austin Texas
          </h2>
        </div>
        <Feature featuresArray={features} />
      </div>
    </section>
  )
}

export default Features
