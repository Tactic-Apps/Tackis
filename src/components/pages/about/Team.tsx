import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import TeamIcon from "../../../assets/icons/users.svg"
import TeamMembers from "./TeamMembers"

const Team = () => {
  const { ceo, cfo, cio, engineer } = useStaticQuery(
    graphql`
      fragment teamMemberConfig on File {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      query {
        ceo: file(relativePath: { eq: "ceo.jpg" }) {
          ...teamMemberConfig
        }
        cfo: file(relativePath: { eq: "cfo.jpg" }) {
          ...teamMemberConfig
        }
        cio: file(relativePath: { eq: "cio.jpg" }) {
          ...teamMemberConfig
        }
        engineer: file(relativePath: { eq: "engineer.jpg" }) {
          ...teamMemberConfig
        }
      }
    `
  )

  const teamMembers = [
    {
      image: ceo,
      name: "Alex Johnson",
      title: "CEO & Co-Founder",
      phone: "(512) 425-1174",
      email: "alex.johnson@tackis.com",
      location: "201 Manhattan Place, Cherrywood, TX 72281",
      twitter: "https://www.twitter.com",
      linkedin: "https://www.linkedin.com",
    },
    {
      image: cfo,
      name: "Sean Stearns",
      title: "CFO & Co-Founder",
      phone: "(512) 425-1189",
      email: "sean.stearns@tackis.com",
      location: "201 Manhattan Place, Cherrywood, TX 72281",
      twitter: "https://www.twitter.com",
      linkedin: "https://www.linkedin.com",
    },
    {
      image: cio,
      name: "Tessa Stevens",
      title: "CIO",
      phone: "(512) 425-1274",
      email: "tessa.stevens@tackis.com",
      location: "201 Manhattan Place, Cherrywood, TX 72281",
      twitter: "https://www.twitter.com",
      linkedin: "https://www.linkedin.com",
    },
    {
      image: engineer,
      name: "Don Brown",
      title: "Senior Engineer",
      phone: "(512) 425-5401",
      email: "don.brown@tackis.com",
      location: "201 Manhattan Place, Cherrywood, TX 72281",
      twitter: "https://www.twitter.com",
      linkedin: "https://www.linkedin.com",
    },
  ]
  return (
    <section id="Team" className="bg-white">
      <div className="container py-24">
        <div className="text-center m-auto max-w-prose mb-16">
          <TeamIcon className="fill-current text-primary-dark m-auto w-7 h-7 bg-primary-light rounded-lg p-1" />
          <p className="text-primary pt-2 pb-3">Tackis Team</p>
          <h2>Meet the leadership team</h2>
        </div>
        <TeamMembers teamMembersArray={teamMembers} />
      </div>
    </section>
  )
}

export default Team
