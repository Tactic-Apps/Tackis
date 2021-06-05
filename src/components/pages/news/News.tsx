import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import PostGrid from "./PostGrid"

const News = () => {
  const {
    gamer,
    ethernet,
    parentalControl,
    neighborhood,
    security,
    router,
  } = useStaticQuery(
    graphql`
      fragment postImageConfig on File {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      query {
        gamer: file(relativePath: { eq: "news/gamer.jpg" }) {
          ...postImageConfig
        }
        ethernet: file(relativePath: { eq: "news/ethernet.jpg" }) {
          ...postImageConfig
        }
        parentalControl: file(
          relativePath: { eq: "news/parental-control.jpg" }
        ) {
          ...postImageConfig
        }
        neighborhood: file(relativePath: { eq: "news/neighborhood.jpg" }) {
          ...postImageConfig
        }
        security: file(relativePath: { eq: "news/security.jpg" }) {
          ...postImageConfig
        }
        router: file(relativePath: { eq: "news/router.jpg" }) {
          ...postImageConfig
        }
      }
    `
  )

  const posts = [
    {
      image: ethernet,
      alt: "Wired or Wireless",
      author: "Melissa Phuong",
      date: "June 1, 2020",
      heading: "Wired vs Wireless: Which one should you choose for your home?",
      snippet:
        "The recent shift to remote work stresses how much your team relies on reliable and secure internet. You need consistently performing internet...",
      link: "wired-vs-wireless",
    },
    {
      image: gamer,
      alt: "Ping vs Latency",
      author: "Daryl Jenkins",
      date: "June 16, 2020",
      heading: "Ping vs Latency: What you should know as a gamer.",
      snippet:
        "The recent shift to remote work stresses how much your team relies on reliable and secure internet. You need consistently performing internet...",
      link: "wired-vs-wireless",
    },
    {
      image: parentalControl,
      alt: "Parental Controls",
      author: "Melissa Phuong",
      date: "July 1, 2020",
      heading: "How to protect your kids online with parental controls.",
      snippet:
        "The recent shift to remote work stresses how much your team relies on reliable and secure internet. You need consistently performing internet...",
      link: "wired-vs-wireless",
    },
    {
      image: neighborhood,
      alt: "Lake Austin",
      author: "Skyla Remy",
      date: "July 21, 2020",
      heading: "Tackis is expanding into Lake Austin so register today!",
      snippet:
        "The recent shift to remote work stresses how much your team relies on reliable and secure internet. You need consistently performing internet...",
      link: "wired-vs-wireless",
    },
    {
      image: security,
      alt: "Security",
      author: "Chris Wong",
      date: "August 2, 2020",
      heading: "How to keep your personal data safe from malware and hackers.",
      snippet:
        "The recent shift to remote work stresses how much your team relies on reliable and secure internet. You need consistently performing internet...",
      link: "wired-vs-wireless",
    },
    {
      image: router,
      alt: "Bring Your Own Router",
      author: "Melissa Phuong",
      date: "August 17, 2020",
      heading: "Why does Tackis ask you to bring your own router?",
      snippet:
        "The recent shift to remote work stresses how much your team relies on reliable and secure internet. You need consistently performing internet...",
      link: "wired-vs-wireless",
    },
  ]

  return (
    <section id="News">
      <div className="container py-24">
        <PostGrid postsArray={posts} />
        <div className="flex justify-center my-10">
          <Link to="">
            <div className="bg-white font-bold hover:bg-primary hover:text-white shadow-lg mr-3 w-12 h-12 text-center leading-12 transition-colors duration-300">
              &#171;
            </div>
          </Link>
          <Link to="">
            <div className="font-bold bg-primary text-white shadow-lg mr-3 w-12 h-12 text-center leading-12 transition-colors duration-300">
              1
            </div>
          </Link>
          <Link to="">
            <div className="bg-white font-bold hover:bg-primary hover:text-white shadow-lg mr-3 w-12 h-12 text-center leading-12 transition-colors duration-300">
              2
            </div>
          </Link>
          <Link to="">
            <div className="bg-white font-bold hover:bg-primary hover:text-white shadow-lg mr-3 w-12 h-12 text-center leading-12 transition-colors duration-300">
              3
            </div>
          </Link>
          <Link to="">
            <div className="bg-white font-bold hover:bg-primary hover:text-white shadow-lg mr-3 w-12 h-12 text-center leading-12 transition-colors duration-300">
              &#187;
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default News
