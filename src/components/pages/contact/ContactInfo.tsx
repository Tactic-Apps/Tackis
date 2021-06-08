import React from "react"

type ContactInfoArray = {
  /** SVG Icon component */
  Icon: any
  /** Heading for feature block */
  heading: string
  /** Paragraph that comes after heading in feature block */
  paragraph: string
}

type Props = {
  contactInfoArray: ContactInfoArray[]
}

const ContactInfo = ({ contactInfoArray }: Props) => {
  let contactBoxes = contactInfoArray.map(contactInfo => (
    <a key={Math.random()} href="">
      <div
        key={contactInfo.heading}
        className="bg-white shadow-xl py-7 px-7 xl:px-16 transition-colors border-2 border-white hover:border-primary-light"
      >
        <contactInfo.Icon className="fill-current text-primary-dark bg-primary-light m-auto w-20 h-20 p-5 rounded-full bg-opacity-50" />
        <h3 className="my-5 capitalize">{contactInfo.heading}</h3>
        <p className="mb-5">{contactInfo.paragraph}</p>
      </div>
    </a>
  ))
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-center text-center gap-6 xl:gap-16 mb-20">
      {contactBoxes}
    </div>
  )
}

export default ContactInfo
