import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import TwitterIcon from "../../../assets/icons/twitter-full.svg"
import LinkedinIcon from "../../../assets/icons/linkedin-full.svg"

type TeamMemberProps = {
  image: any
  name: string
  title: string
  phone: string
  email: string
  location: string
  twitter: string
  linkedin: string
}

type Props = {
  teamMembersArray: TeamMemberProps[]
}

const TeamMembers = ({ teamMembersArray }: Props) => {
  let teamMembers = teamMembersArray.map(teamMember => (
    <div
      key={Math.random()}
      className="grid grid-cols-1 md:grid-cols-10 bg-gray-200 shadow-sm"
    >
      <div className="col-span-4 self-center  h-full">
        <GatsbyImage
          image={getImage(teamMember.image)!}
          alt={teamMember.name}
        />
      </div>
      <div className="grid-cols-1 md:col-span-6 py-4 px-5 self-center">
        <h3 className="mb-1">{teamMember.name}</h3>
        <p className="mb-5 text-primary">{teamMember.title}</p>
        <p className="mb-2">
          <span className="font-bold">Phone: </span>
          {teamMember.phone}
        </p>
        <p className="mb-2">
          <strong>Email: </strong>
          {teamMember.email}
        </p>
        <p className="mb-2">
          <strong>Location: </strong>
          {teamMember.location}
        </p>
        <div className="flex">
          <a href={teamMember.twitter}>
            <TwitterIcon className="w-9 h-9 p-2 border fill-current border-gray-400 rounded-full text-gray hover:text-white hover:bg-primary hover:border-primary transition-colors mr-2" />
          </a>
          <a href={teamMember.linkedin}>
            <LinkedinIcon className="w-9 h-9 p-2 border fill-current border-gray-400 rounded-full text-gray hover:text-white hover:bg-primary hover:border-primary transition-colors" />
          </a>
        </div>
      </div>
    </div>
  ))
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">{teamMembers}</div>
  )
}

export default TeamMembers
