import React from "react"
import PlaneIcon from "../../../assets/icons/paper-plane.svg"
import ContactInfo from "./ContactInfo"

import HeadsetIcon from "../../../assets/icons/headset_mic.svg"
import MailIcon from "../../../assets/icons/mail.svg"
import PhoneIcon from "../../../assets/icons/phone.svg"
import PinIcon from "../../../assets/icons/location-pin.svg"

const Contact = () => {
  const contactInfo = [
    {
      Icon: PhoneIcon,
      heading: "Call Us",
      paragraph:
        "Give us a call and speak live with a customer service representative",
    },
    {
      Icon: MailIcon,
      heading: "Email Us",
      paragraph:
        "Email our customer service team directly and we'll call or email you back.",
    },
    {
      Icon: HeadsetIcon,
      heading: "Live Chat",
      paragraph:
        "Live chat with a customer service representative through your browser.",
    },
  ]
  return (
    <section id="Contact">
      <div className="container py-24">
        <ContactInfo contactInfoArray={contactInfo} />
        <div className="text-center m-auto mb-16 max-w-prose">
          <div className="flex justify-center items-center mb-5">
            <PlaneIcon className="fill-current text-primary-dark mr-3 w-7 h-7 bg-primary-light rounded-lg p-1" />
            <p className="text-primary">Message Tackis</p>
          </div>
          <h2>Drop us a line and we'll get back to you within 24 hours</h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-16">
          <div className="xl:col-span-2">
            <form className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name*"
                required
                className="col-span-2 sm:col-span-1 border-gray-200 focus:border-primary focus:bg-white focus:ring-0"
              />
              <input
                type="text"
                placeholder="Last Name*"
                required
                className="col-span-2 sm:col-span-1 border-gray-200 focus:border-primary focus:bg-white focus:ring-0"
              />
              <input
                type="email"
                placeholder="Email*"
                required
                className="col-span-2 sm:col-span-1 border-gray-200 focus:border-primary focus:bg-white focus:ring-0"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="col-span-2 sm:col-span-1 border-gray-200 focus:border-primary focus:bg-white focus:ring-0"
              />
              <textarea
                placeholder="Your Message*"
                required
                cols={30}
                rows={10}
                className="col-span-2 border-gray-200 focus:border-primary focus:bg-white focus:ring-0"
              ></textarea>
              <button className="btn btn-secondary col-span-2 ">
                Send Your Message
              </button>
            </form>
          </div>
          <div className="xl:col-span-1 bg-white border border-gray-200 self-start p-5">
            <h3 className="mb-5">Tachis Contact Information</h3>
            <div className="flex items-center mb-3">
              <PinIcon className="fill-current text-primary mr-2" />
              <p>201 Manhattan Place, Cherrywood, TX 72281</p>
            </div>
            <div className="flex items-center mb-3">
              <PhoneIcon className="fill-current text-primary mr-2" />
              <p>1 (800) 214-7435</p>
            </div>
            <div className="flex items-center mb-3">
              <MailIcon className="fill-current text-primary mr-2" />
              <p>support@tackis.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
